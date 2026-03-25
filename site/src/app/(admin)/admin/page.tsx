'use client';

import { useAnalytics } from '@/contexts/AnalyticsContext';

/* ─── Card wrapper (shadcn/ui style) ─── */
function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-[#e2e8f0] bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

function CardHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`flex flex-col space-y-1.5 p-6 pb-2 ${className}`}>{children}</div>;
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm font-semibold text-[#0f172a] tracking-tight">{children}</h3>;
}

function CardDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-[#64748b]">{children}</p>;
}

function CardContent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-6 pt-4 ${className}`}>{children}</div>;
}

/* ─── Badge ─── */
function Badge({ children, variant = 'default' }: { children: React.ReactNode; variant?: 'default' | 'success' | 'warning' | 'destructive' }) {
  const styles = {
    default: 'bg-[#f1f5f9] text-[#475569]',
    success: 'bg-[#f0fdf4] text-[#166534] border-[#bbf7d0]',
    warning: 'bg-[#fefce8] text-[#854d0e] border-[#fde68a]',
    destructive: 'bg-[#fef2f2] text-[#991b1b] border-[#fecaca]',
  };
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold ${styles[variant]}`}>
      {children}
    </span>
  );
}

/* ─── Counter Card ─── */
function StatCard({ title, value, trend, icon, color }: { title: string; value: string | number; trend?: number; icon: React.ReactNode; color: string }) {
  return (
    <Card>
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-medium text-[#64748b] uppercase tracking-wider">{title}</p>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: color + '10' }}>
            <span style={{ color }}>{icon}</span>
          </div>
        </div>
        <p className="text-2xl font-bold text-[#0f172a] tracking-tight">{value}</p>
        {trend !== undefined && (
          <div className={`flex items-center gap-1 mt-2 text-xs font-medium ${trend >= 0 ? 'text-[#16a34a]' : 'text-[#dc2626]'}`}>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d={trend >= 0 ? 'M5 10l7-7m0 0l7 7m-7-7v18' : 'M19 14l-7 7m0 0l-7-7m7 7V3'} />
            </svg>
            {Math.abs(trend)}% vs ontem
          </div>
        )}
      </div>
    </Card>
  );
}

/* ─── SVG Line Chart ─── */
function LineChart({ data }: { data: { date: string; count: number }[] }) {
  if (!data || data.length === 0) {
    return <div className="flex items-center justify-center h-48 text-[#94a3b8] text-sm">Navegue pelo site para gerar dados</div>;
  }
  const maxVal = Math.max(...data.map(d => d.count));
  const minVal = Math.min(...data.map(d => d.count));
  const range = maxVal - minVal || 1;
  const width = 800, height = 250, padX = 50, padY = 30;
  const chartW = width - padX * 2, chartH = height - padY * 2;
  const divisor = data.length > 1 ? data.length - 1 : 1;

  const points = data.map((d, i) => ({
    x: padX + (i / divisor) * chartW,
    y: padY + chartH - ((d.count - minVal) / range) * chartH,
  }));

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const lastPt = points[points.length - 1], firstPt = points[0];
  const areaPath = `${linePath} L ${lastPt.x} ${padY + chartH} L ${firstPt.x} ${padY + chartH} Z`;

  const gridLines = 5;
  const gridValues = Array.from({ length: gridLines }, (_, i) => minVal + (range / (gridLines - 1)) * i);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      {gridValues.map((val, i) => {
        const y = padY + chartH - ((val - minVal) / range) * chartH;
        return (
          <g key={i}>
            <line x1={padX} y1={y} x2={width - padX} y2={y} stroke="#f1f5f9" strokeWidth={1} />
            <text x={padX - 8} y={y + 4} textAnchor="end" fill="#94a3b8" fontSize={10} fontFamily="system-ui">{Math.round(val)}</text>
          </g>
        );
      })}
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#16a34a" stopOpacity={0.15} />
          <stop offset="100%" stopColor="#16a34a" stopOpacity={0} />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#chartGrad)" />
      <path d={linePath} fill="none" stroke="#16a34a" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      {points.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r={2.5} fill="#16a34a" stroke="white" strokeWidth={2} />)}
      {data.map((d, i) => {
        if (i % 5 !== 0 && i !== data.length - 1) return null;
        return <text key={i} x={points[i].x} y={height - 5} textAnchor="middle" fill="#94a3b8" fontSize={9} fontFamily="system-ui">{d.date}</text>;
      })}
    </svg>
  );
}

/* ─── Bar Chart ─── */
function BarChart({ data }: { data: { page: string; views: number }[] }) {
  if (!data || data.length === 0) return <div className="flex items-center justify-center h-48 text-[#94a3b8] text-sm">Sem dados</div>;
  const maxVal = Math.max(...data.map(d => d.views)) || 1;
  return (
    <div className="space-y-3">
      {data.map((d, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="text-[11px] text-[#64748b] w-24 truncate text-right flex-shrink-0 font-medium">{d.page}</span>
          <div className="flex-1 bg-[#f1f5f9] rounded-full h-6 relative overflow-hidden">
            <div className="h-full rounded-full transition-all duration-700 bg-gradient-to-r from-[#16a34a] to-[#22c55e]" style={{ width: `${(d.views / maxVal) * 100}%` }} />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-semibold text-[#475569]">{d.views}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Donut Chart ─── */
function DonutChart({ data }: { data: { device: string; percentage: number; color: string }[] }) {
  const size = 160, strokeWidth = 24;
  const radius = (size - strokeWidth) / 2, circumference = 2 * Math.PI * radius, center = size / 2;
  let offset = 0;
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={center} cy={center} r={radius} fill="none" stroke="#f1f5f9" strokeWidth={strokeWidth} />
        {data.map((d, i) => {
          const len = (d.percentage / 100) * circumference;
          const off = -offset;
          offset += len;
          return <circle key={i} cx={center} cy={center} r={radius} fill="none" stroke={d.color} strokeWidth={strokeWidth} strokeDasharray={`${len} ${circumference - len}`} strokeDashoffset={off} strokeLinecap="butt" transform={`rotate(-90 ${center} ${center})`} />;
        })}
        <text x={center} y={center + 2} textAnchor="middle" fill="#0f172a" fontSize={20} fontWeight="bold" fontFamily="system-ui">{data.reduce((a, d) => a + d.percentage, 0)}%</text>
      </svg>
      <div className="space-y-2.5">
        {data.map((d, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: d.color }} />
            <span className="text-xs text-[#64748b]">{d.device}</span>
            <span className="text-xs font-bold text-[#0f172a]">{d.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Dashboard Page ─── */
export default function AdminDashboardPage() {
  const { data } = useAnalytics();

  return (
    <div className="space-y-6">
      {/* Page title */}
      <div>
        <h2 className="text-xl font-semibold text-[#0f172a] tracking-tight">Dashboard</h2>
        <p className="text-sm text-[#64748b] mt-0.5">Visão geral do site CAPOL</p>
      </div>

      {/* Counter cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <StatCard title="Visitantes Hoje" value={data.todayVisitors} trend={data.todayTrend} color="#16a34a" icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>} />
        <StatCard title="Este Mês" value={data.monthVisitors.toLocaleString('pt-BR')} color="#2563eb" icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>} />
        <StatCard title="Páginas" value={data.totalPages.toLocaleString('pt-BR')} color="#9333ea" icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>} />
        <StatCard title="Tempo Médio" value={data.avgTime} color="#ea580c" icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} />
        <StatCard title="Orçamentos" value={data.budgetRequests} color="#dc2626" icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>} />
      </div>

      {/* Real-time section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16a34a]" />
              </span>
              <p className="text-xs font-medium text-[#64748b] uppercase tracking-wider">Tempo Real</p>
            </div>
            <p className="text-4xl font-bold text-[#0f172a] tracking-tight">{data.realtimeVisitors}</p>
            <p className="text-xs text-[#94a3b8] mt-1">usuários ativos agora</p>
          </div>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Páginas Ativas</CardTitle>
            <CardDescription>Páginas sendo visitadas agora</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2.5">
              {data.activePages.map((p, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full" />
                    <span className="text-sm text-[#334155]">{p.page}</span>
                  </div>
                  <Badge variant="success">{p.visitors} {p.visitors === 1 ? 'visitante' : 'visitantes'}</Badge>
                </div>
              ))}
              {data.activePages.length === 0 && <p className="text-sm text-[#94a3b8]">Nenhum visitante ativo</p>}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Visitantes por Dia</CardTitle>
            <CardDescription>Últimos 30 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <LineChart data={data.dailyVisitors} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Páginas Mais Visitadas</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart data={data.topPages} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dispositivos</CardTitle>
          </CardHeader>
          <CardContent>
            <DonutChart data={data.deviceStats} />
          </CardContent>
        </Card>
      </div>

      {/* Recent visits table */}
      <Card>
        <CardHeader>
          <CardTitle>Visitas Recentes</CardTitle>
          <CardDescription>Últimas visitas registradas no site</CardDescription>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-t border-b border-[#e2e8f0]">
                <th className="px-6 py-3 text-left text-[10px] font-semibold text-[#64748b] uppercase tracking-wider">Horário</th>
                <th className="px-6 py-3 text-left text-[10px] font-semibold text-[#64748b] uppercase tracking-wider">Página</th>
                <th className="px-6 py-3 text-left text-[10px] font-semibold text-[#64748b] uppercase tracking-wider">Cidade</th>
                <th className="px-6 py-3 text-left text-[10px] font-semibold text-[#64748b] uppercase tracking-wider">Dispositivo</th>
                <th className="px-6 py-3 text-left text-[10px] font-semibold text-[#64748b] uppercase tracking-wider">Navegador</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f1f5f9]">
              {data.recentVisits.map(visit => (
                <tr key={visit.id} className="hover:bg-[#f8fafc] transition-colors">
                  <td className="px-6 py-3 text-xs text-[#64748b] font-mono">{visit.timestamp}</td>
                  <td className="px-6 py-3 text-sm text-[#0f172a] font-medium">{visit.page}</td>
                  <td className="px-6 py-3 text-sm text-[#64748b]">{visit.city}</td>
                  <td className="px-6 py-3">
                    <Badge variant={visit.device === 'Desktop' ? 'default' : visit.device === 'Mobile' ? 'warning' : 'success'}>
                      {visit.device}
                    </Badge>
                  </td>
                  <td className="px-6 py-3 text-sm text-[#64748b]">{visit.browser}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
