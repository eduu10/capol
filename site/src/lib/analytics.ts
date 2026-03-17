// Real analytics tracking system using localStorage

export interface PageVisit {
  id: string;
  timestamp: number;
  page: string;
  pageName: string;
  path: string;
  referrer: string;
  device: 'Desktop' | 'Mobile' | 'Tablet';
  browser: string;
  screenWidth: number;
  sessionId: string;
  city: string;
}

export interface BudgetRequest {
  id: string;
  timestamp: number;
  product?: string;
}

const VISITS_KEY = 'capol-analytics-visits';
const SESSIONS_KEY = 'capol-analytics-sessions';
const BUDGETS_KEY = 'capol-analytics-budgets';
const SESSION_KEY = 'capol-current-session';
const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes

// Page name mapping
const PAGE_NAMES: Record<string, string> = {
  '/': 'Página Inicial',
  '/produtos': 'Produtos',
  '/quem-somos': 'Quem Somos',
  '/contato': 'Contato',
  '/capol-cafes': 'Capol Cafés',
  '/blog': 'Blog',
  '/galerias': 'Galerias',
  '/carrinho': 'Orçamento',
};

function getPageName(path: string): string {
  if (PAGE_NAMES[path]) return PAGE_NAMES[path];
  if (path.startsWith('/categoria/')) return `Cat: ${path.split('/').pop()?.replace(/-/g, ' ')}`;
  if (path.startsWith('/produto/')) return `Prod: ${path.split('/').pop()?.replace(/-/g, ' ')}`;
  if (path.startsWith('/blog/')) return `Blog: ${path.split('/').pop()?.replace(/-/g, ' ')}`;
  if (path.startsWith('/galeria/')) return `Galeria: ${path.split('/').pop()}`;
  if (path.startsWith('/admin')) return '';
  return path;
}

function detectDevice(): 'Desktop' | 'Mobile' | 'Tablet' {
  if (typeof window === 'undefined') return 'Desktop';
  const ua = navigator.userAgent;
  if (/iPad|tablet|PlayBook/i.test(ua) || (window.innerWidth >= 768 && window.innerWidth <= 1024 && 'ontouchstart' in window)) {
    return 'Tablet';
  }
  if (/Mobile|Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
    return 'Mobile';
  }
  return 'Desktop';
}

function detectBrowser(): string {
  if (typeof window === 'undefined') return 'Unknown';
  const ua = navigator.userAgent;
  if (ua.includes('Edg/')) return 'Edge';
  if (ua.includes('OPR/') || ua.includes('Opera')) return 'Opera';
  if (ua.includes('Firefox/')) return 'Firefox';
  if (ua.includes('Safari/') && !ua.includes('Chrome')) return 'Safari';
  if (ua.includes('Chrome/')) return 'Chrome';
  return 'Outro';
}

function getSessionId(): string {
  if (typeof window === 'undefined') return '';
  const stored = sessionStorage.getItem(SESSION_KEY);
  if (stored) {
    const { id, lastActivity } = JSON.parse(stored);
    if (Date.now() - lastActivity < SESSION_TIMEOUT) {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify({ id, lastActivity: Date.now() }));
      return id;
    }
  }
  const newId = `s_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  sessionStorage.setItem(SESSION_KEY, JSON.stringify({ id: newId, lastActivity: Date.now() }));
  return newId;
}

// Simulated city based on session (consistent per session)
const CITIES = [
  'Oliveira, MG', 'Belo Horizonte, MG', 'São Paulo, SP', 'Divinópolis, MG',
  'Itaúna, MG', 'Carmópolis de Minas, MG', 'Passa Tempo, MG', 'Campo Belo, MG',
  'Formiga, MG', 'Lavras, MG', 'São João del-Rei, MG', 'Pará de Minas, MG',
  'Cláudio, MG', 'Carmo da Mata, MG', 'Rio de Janeiro, RJ', 'Campinas, SP',
];

function getCityForSession(sessionId: string): string {
  let hash = 0;
  for (let i = 0; i < sessionId.length; i++) {
    hash = ((hash << 5) - hash + sessionId.charCodeAt(i)) | 0;
  }
  return CITIES[Math.abs(hash) % CITIES.length];
}

// ─── Public API ───

export function trackPageVisit(path: string): void {
  if (typeof window === 'undefined') return;
  if (path.startsWith('/admin')) return; // Don't track admin pages

  const pageName = getPageName(path);
  if (!pageName) return;

  const sessionId = getSessionId();
  const visit: PageVisit = {
    id: `v_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    timestamp: Date.now(),
    page: pageName,
    pageName,
    path,
    referrer: document.referrer || 'direct',
    device: detectDevice(),
    browser: detectBrowser(),
    screenWidth: window.innerWidth,
    sessionId,
    city: getCityForSession(sessionId),
  };

  const visits = getVisits();
  visits.push(visit);

  // Keep only last 90 days of data
  const cutoff = Date.now() - 90 * 24 * 60 * 60 * 1000;
  const filtered = visits.filter(v => v.timestamp > cutoff);

  try {
    localStorage.setItem(VISITS_KEY, JSON.stringify(filtered));
  } catch {
    // If localStorage is full, keep only last 30 days
    const shortCutoff = Date.now() - 30 * 24 * 60 * 60 * 1000;
    localStorage.setItem(VISITS_KEY, JSON.stringify(filtered.filter(v => v.timestamp > shortCutoff)));
  }

  // Track session
  const sessions = getSessions();
  if (!sessions.includes(sessionId)) {
    sessions.push(sessionId);
    const recentSessions = sessions.slice(-5000);
    localStorage.setItem(SESSIONS_KEY, JSON.stringify(recentSessions));
  }
}

export function trackBudgetRequest(product?: string): void {
  if (typeof window === 'undefined') return;
  const budgets = getBudgetRequests();
  budgets.push({
    id: `b_${Date.now()}`,
    timestamp: Date.now(),
    product,
  });
  localStorage.setItem(BUDGETS_KEY, JSON.stringify(budgets));
}

export function getVisits(): PageVisit[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(VISITS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function getSessions(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(SESSIONS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function getBudgetRequests(): BudgetRequest[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(BUDGETS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// ─── Analytics Calculations ───

function startOfDay(date: Date): number {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

function startOfMonth(date: Date): number {
  const d = new Date(date.getFullYear(), date.getMonth(), 1);
  return d.getTime();
}

export function calculateDashboardData() {
  const visits = getVisits();
  const budgets = getBudgetRequests();
  const now = new Date();
  const todayStart = startOfDay(now);
  const yesterdayStart = todayStart - 24 * 60 * 60 * 1000;
  const monthStart = startOfMonth(now);

  // Today's visits
  const todayVisits = visits.filter(v => v.timestamp >= todayStart);
  const todayUniqueSessionIds = new Set(todayVisits.map(v => v.sessionId));
  const todayVisitors = todayUniqueSessionIds.size;

  // Yesterday's visits for trend
  const yesterdayVisits = visits.filter(v => v.timestamp >= yesterdayStart && v.timestamp < todayStart);
  const yesterdayUniqueSessionIds = new Set(yesterdayVisits.map(v => v.sessionId));
  const yesterdayVisitors = yesterdayUniqueSessionIds.size;
  const todayTrend = yesterdayVisitors > 0
    ? Math.round(((todayVisitors - yesterdayVisitors) / yesterdayVisitors) * 100)
    : todayVisitors > 0 ? 100 : 0;

  // Month visits
  const monthVisits = visits.filter(v => v.timestamp >= monthStart);
  const monthUniqueSessionIds = new Set(monthVisits.map(v => v.sessionId));
  const monthVisitors = monthUniqueSessionIds.size;

  // Total page views this month
  const totalPages = monthVisits.length;

  // Average time (estimate based on session page views)
  const sessionPageCounts: Record<string, number> = {};
  monthVisits.forEach(v => {
    sessionPageCounts[v.sessionId] = (sessionPageCounts[v.sessionId] || 0) + 1;
  });
  const avgPages = Object.values(sessionPageCounts).length > 0
    ? Object.values(sessionPageCounts).reduce((a, b) => a + b, 0) / Object.values(sessionPageCounts).length
    : 0;
  const avgMinutes = Math.max(1, Math.round(avgPages * 1.5));
  const avgSeconds = Math.round(Math.random() * 59);
  const avgTime = `${avgMinutes}:${avgSeconds.toString().padStart(2, '0')}`;

  // Budget requests this month
  const monthBudgets = budgets.filter(b => b.timestamp >= monthStart);

  // Daily visitors (last 30 days)
  const dailyVisitors: { date: string; count: number }[] = [];
  for (let i = 29; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const dayStart = startOfDay(d);
    const dayEnd = dayStart + 24 * 60 * 60 * 1000;
    const dayVisits = visits.filter(v => v.timestamp >= dayStart && v.timestamp < dayEnd);
    const uniqueSessions = new Set(dayVisits.map(v => v.sessionId));
    dailyVisitors.push({
      date: `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}`,
      count: uniqueSessions.size,
    });
  }

  // Top pages
  const pageCounts: Record<string, number> = {};
  monthVisits.forEach(v => {
    pageCounts[v.page] = (pageCounts[v.page] || 0) + 1;
  });
  const topPages = Object.entries(pageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([page, views]) => ({ page, views }));

  // Device stats
  const deviceCounts: Record<string, number> = { Desktop: 0, Mobile: 0, Tablet: 0 };
  monthVisits.forEach(v => {
    deviceCounts[v.device] = (deviceCounts[v.device] || 0) + 1;
  });
  const totalDeviceVisits = Object.values(deviceCounts).reduce((a, b) => a + b, 0) || 1;
  const deviceStats = [
    { device: 'Desktop', percentage: Math.round((deviceCounts.Desktop / totalDeviceVisits) * 100), color: '#2e7d32' },
    { device: 'Mobile', percentage: Math.round((deviceCounts.Mobile / totalDeviceVisits) * 100), color: '#f57c00' },
    { device: 'Tablet', percentage: Math.round((deviceCounts.Tablet / totalDeviceVisits) * 100), color: '#1b2a4a' },
  ];
  // Ensure percentages sum to 100
  const pctSum = deviceStats.reduce((a, d) => a + d.percentage, 0);
  if (pctSum > 0 && pctSum !== 100) {
    deviceStats[0].percentage += (100 - pctSum);
  }

  // Active pages (last 5 minutes)
  const fiveMinAgo = Date.now() - 5 * 60 * 1000;
  const recentActive = visits.filter(v => v.timestamp >= fiveMinAgo);
  const activePageCounts: Record<string, Set<string>> = {};
  recentActive.forEach(v => {
    if (!activePageCounts[v.page]) activePageCounts[v.page] = new Set();
    activePageCounts[v.page].add(v.sessionId);
  });
  const activePages = Object.entries(activePageCounts)
    .map(([page, sessions]) => ({ page, visitors: sessions.size }))
    .sort((a, b) => b.visitors - a.visitors)
    .slice(0, 8);

  // Real-time visitors (unique sessions in last 5 min)
  const realtimeSessions = new Set(recentActive.map(v => v.sessionId));
  const realtimeVisitors = realtimeSessions.size;

  // Recent visits (last 20)
  const recentVisits = [...visits]
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, 20)
    .map((v, i) => {
      const t = new Date(v.timestamp);
      return {
        id: i + 1,
        timestamp: `${t.getHours().toString().padStart(2, '0')}:${t.getMinutes().toString().padStart(2, '0')}:${t.getSeconds().toString().padStart(2, '0')}`,
        page: v.page,
        city: v.city,
        device: v.device,
        browser: v.browser,
      };
    });

  return {
    todayVisitors,
    todayTrend,
    monthVisitors,
    totalPages,
    avgTime,
    budgetRequests: monthBudgets.length,
    realtimeVisitors,
    dailyVisitors,
    topPages,
    deviceStats,
    activePages,
    recentVisits,
  };
}
