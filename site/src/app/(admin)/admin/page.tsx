'use client';

import { useAnalytics } from '@/contexts/AnalyticsContext';

/* ─── Counter Card ─── */
function StatCard({
  title,
  value,
  trend,
  icon,
  color,
}: {
  title: string;
  value: string | number;
  trend?: number;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
          {trend !== undefined && (
            <div className={`flex items-center gap-1 mt-2 text-xs font-medium ${trend >= 0 ? 'text-green-600' : 'text-red-500'}`}>
              {trend >= 0 ? (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              )}
              {Math.abs(trend)}% vs ontem
            </div>
          )}
        </div>
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0`} style={{ backgroundColor: color + '18' }}>
          <div style={{ color }}>{icon}</div>
        </div>
      </div>
    </div>
  );
}

/* ─── SVG Line Chart ─── */
function LineChart({ data }: { data: { date: string; count: number }[] }) {
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-48 text-gray-400 text-sm">
        Navegue pelo site para gerar dados de visitantes
      </div>
    );
  }
  const maxVal = Math.max(...data.map(d => d.count));
  const minVal = Math.min(...data.map(d => d.count));
  const range = maxVal - minVal || 1;
  const width = 800;
  const height = 250;
  const padX = 50;
  const padY = 30;
  const chartW = width - padX * 2;
  const chartH = height - padY * 2;

  const divisor = data.length > 1 ? data.length - 1 : 1;
  const points = data.map((d, i) => ({
    x: padX + (i / divisor) * chartW,
    y: padY + chartH - ((d.count - minVal) / range) * chartH,
  }));

  if (points.length === 0) return null;

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const lastPoint = points[points.length - 1];
  const firstPoint = points[0];
  const areaPath = `${linePath} L ${lastPoint.x} ${padY + chartH} L ${firstPoint.x} ${padY + chartH} Z`;

  const gridLines = 5;
  const gridValues = Array.from({ length: gridLines }, (_, i) => minVal + (range / (gridLines - 1)) * i);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      {/* Grid lines */}
      {gridValues.map((val, i) => {
        const y = padY + chartH - ((val - minVal) / range) * chartH;
        return (
          <g key={i}>
            <line x1={padX} y1={y} x2={width - padX} y2={y} stroke="#e5e7eb" strokeWidth={1} />
            <text x={padX - 8} y={y + 4} textAnchor="end" fill="#9ca3af" fontSize={11}>
              {Math.round(val)}
            </text>
          </g>
        );
      })}

      {/* Area fill */}
      <path d={areaPath} fill="url(#lineGradient)" opacity={0.3} />
      <defs>
        <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2e7d32" />
          <stop offset="100%" stopColor="#2e7d32" stopOpacity={0} />
        </linearGradient>
      </defs>

      {/* Line */}
      <path d={linePath} fill="none" stroke="#2e7d32" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />

      {/* Dots */}
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={3} fill="#2e7d32" stroke="white" strokeWidth={2} />
      ))}

      {/* X axis labels (every 5 days) */}
      {data.map((d, i) => {
        if (i % 5 !== 0 && i !== data.length - 1) return null;
        return (
          <text key={i} x={points[i].x} y={height - 5} textAnchor="middle" fill="#9ca3af" fontSize={10}>
            {d.date}
          </text>
        );
      })}
    </svg>
  );
}

/* ─── SVG Bar Chart ─── */
function BarChart({ data }: { data: { page: string; views: number }[] }) {
  if (!data || data.length === 0) {
    return <div className="flex items-center justify-center h-48 text-gray-400 text-sm">Sem dados ainda</div>;
  }
  const maxVal = Math.max(...data.map(d => d.views)) || 1;

  return (
    <div className="space-y-2">
      {data.map((d, i) => {
        const widthPct = (d.views / maxVal) * 100;
        return (
          <div key={i} className="flex items-center gap-3">
            <span className="text-xs text-gray-600 w-28 truncate text-right flex-shrink-0">{d.page}</span>
            <div className="flex-1 bg-gray-100 rounded-full h-7 relative overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${widthPct}%`,
                  background: `linear-gradient(90deg, #2e7d32, #43a047)`,
                }}
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-600">
                {d.views}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── SVG Donut Chart ─── */
function DonutChart({ data }: { data: { device: string; percentage: number; color: string }[] }) {
  const size = 180;
  const strokeWidth = 30;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  let offset = 0;

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {data.map((d, i) => {
          const dashLength = (d.percentage / 100) * circumference;
          const dashOffset = -offset;
          offset += dashLength;
          return (
            <circle
              key={i}
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={d.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${dashLength} ${circumference - dashLength}`}
              strokeDashoffset={dashOffset}
              strokeLinecap="butt"
              transform={`rotate(-90 ${center} ${center})`}
            />
          );
        })}
        <text x={center} y={center - 6} textAnchor="middle" fill="#374151" fontSize={24} fontWeight="bold">
          {data.reduce((a, d) => a + d.percentage, 0)}%
        </text>
        <text x={center} y={center + 14} textAnchor="middle" fill="#9ca3af" fontSize={11}>
          Total
        </text>
      </svg>
      <div className="space-y-3">
        {data.map((d, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: d.color }} />
            <span className="text-sm text-gray-700">{d.device}</span>
            <span className="text-sm font-bold text-gray-800">{d.percentage}%</span>
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
        <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
        <p className="text-sm text-gray-500 mt-1">Visao geral do site CAPOL</p>
      </div>

      {/* Counter cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <StatCard
          title="Visitantes Hoje"
          value={data.todayVisitors}
          trend={data.todayTrend}
          color="#2e7d32"
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
        />
        <StatCard
          title="Visitantes Este Mes"
          value={data.monthVisitors.toLocaleString('pt-BR')}
          color="#1976d2"
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          }
        />
        <StatCard
          title="Paginas Visitadas"
          value={data.totalPages.toLocaleString('pt-BR')}
          color="#7b1fa2"
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          }
        />
        <StatCard
          title="Tempo Medio"
          value={data.avgTime}
          color="#f57c00"
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <StatCard
          title="Orcamentos Recebidos"
          value={data.budgetRequests}
          color="#c62828"
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
        />
      </div>

      {/* Real-time section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <h3 className="font-semibold text-gray-700">Visitantes em Tempo Real</h3>
          </div>
          <p className="text-5xl font-bold text-[#2e7d32]">{data.realtimeVisitors}</p>
          <p className="text-sm text-gray-500 mt-2">usuarios ativos agora</p>
        </div>
        <div className="lg:col-span-2 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-700 mb-4">Paginas Ativas Agora</h3>
          <div className="space-y-3">
            {data.activePages.map((p, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm text-gray-700">{p.page}</span>
                </div>
                <span className="text-sm font-semibold text-gray-800 bg-gray-100 px-2.5 py-0.5 rounded-full">
                  {p.visitors} {p.visitors === 1 ? 'visitante' : 'visitantes'}
                </span>
              </div>
            ))}
            {data.activePages.length === 0 && (
              <p className="text-sm text-gray-400">Nenhum visitante ativo no momento</p>
            )}
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {/* Line chart */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 xl:col-span-2">
          <h3 className="font-semibold text-gray-700 mb-4">Visitantes por Dia (ultimos 30 dias)</h3>
          <LineChart data={data.dailyVisitors} />
        </div>

        {/* Bar chart */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-700 mb-4">Paginas Mais Visitadas</h3>
          <BarChart data={data.topPages} />
        </div>

        {/* Donut chart */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-700 mb-4">Visitantes por Dispositivo</h3>
          <DonutChart data={data.deviceStats} />
        </div>
      </div>

      {/* Recent visits table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <h3 className="font-semibold text-gray-700">Visitas Recentes</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                <th className="px-5 py-3">Horario</th>
                <th className="px-5 py-3">Pagina</th>
                <th className="px-5 py-3">Cidade</th>
                <th className="px-5 py-3">Dispositivo</th>
                <th className="px-5 py-3">Navegador</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.recentVisits.map(visit => (
                <tr key={visit.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3 text-sm text-gray-600 font-mono">{visit.timestamp}</td>
                  <td className="px-5 py-3 text-sm text-gray-800 font-medium">{visit.page}</td>
                  <td className="px-5 py-3 text-sm text-gray-600">{visit.city}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      visit.device === 'Desktop'
                        ? 'bg-blue-100 text-blue-700'
                        : visit.device === 'Mobile'
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {visit.device}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-600">{visit.browser}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
