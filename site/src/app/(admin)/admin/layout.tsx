'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { assetPath } from '@/lib/utils';
import { AnalyticsProvider } from '@/contexts/AnalyticsContext';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isLoginPage = pathname?.includes('/admin/login');

  useEffect(() => {
    const auth = localStorage.getItem('capol_admin_auth');
    if (auth) {
      try {
        const parsed = JSON.parse(auth);
        if (parsed.authenticated) {
          setAuthenticated(true);
          if (isLoginPage) {
            router.push('/admin');
          }
        } else if (!isLoginPage) {
          router.push('/admin/login');
        }
      } catch {
        if (!isLoginPage) router.push('/admin/login');
      }
    } else if (!isLoginPage) {
      router.push('/admin/login');
    }
    setChecking(false);
  }, [isLoginPage, router]);

  const handleLogout = () => {
    localStorage.removeItem('capol_admin_auth');
    router.push('/admin/login');
  };

  if (checking) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (isLoginPage) {
    return <>{children}</>;
  }

  if (!authenticated) {
    return null;
  }

  const navItems = [
    {
      label: 'Dashboard',
      href: '/admin',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      label: 'Configurações',
      href: '/admin/configuracoes',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  const isActive = (href: string) => {
    if (href === '/admin') return pathname === '/admin' || pathname === '/admin/';
    return pathname?.includes(href);
  };

  return (
    <AnalyticsProvider>
      <div className="min-h-screen bg-[#f8fafc] flex">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Sidebar - shadcn/ui style */}
        <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-[260px] bg-white border-r border-[#e2e8f0] transform transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} flex flex-col`}>
          {/* Logo */}
          <div className="h-16 flex items-center px-5 border-b border-[#e2e8f0]">
            <Link href="/admin" className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-[#f0f7f0] flex-shrink-0">
                <Image src={assetPath('/imagens/logos/logo-capol.png')} alt="Capol" fill className="object-contain p-0.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-[#0f172a] tracking-tight">CAPOL</span>
                <span className="text-[10px] text-[#64748b] leading-none">Painel Admin</span>
              </div>
            </Link>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden ml-auto p-1.5 hover:bg-[#f1f5f9] rounded-md text-[#64748b]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-3 px-3">
            <p className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#94a3b8]">Menu</p>
            <div className="space-y-0.5">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-[#f0fdf4] text-[#166534] border border-[#bbf7d0]'
                      : 'text-[#475569] hover:bg-[#f1f5f9] hover:text-[#0f172a]'
                  }`}
                >
                  <span className={isActive(item.href) ? 'text-[#16a34a]' : 'text-[#94a3b8]'}>{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <p className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#94a3b8]">Links</p>
              <Link
                href="/"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-[#475569] hover:bg-[#f1f5f9] hover:text-[#0f172a] transition-colors"
              >
                <span className="text-[#94a3b8]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                </span>
                Ver Site
              </Link>
            </div>
          </nav>

          {/* Sidebar footer */}
          <div className="p-3 border-t border-[#e2e8f0]">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm font-medium text-[#dc2626] hover:bg-[#fef2f2] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sair
            </button>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top bar - shadcn/ui style */}
          <header className="h-14 bg-white border-b border-[#e2e8f0] flex items-center justify-between px-4 lg:px-6 sticky top-0 z-30">
            <div className="flex items-center gap-3">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-1.5 hover:bg-[#f1f5f9] rounded-md text-[#64748b]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
              </button>
              <div className="hidden lg:flex items-center gap-2 text-sm text-[#64748b]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                <span>/</span>
                <span className="text-[#0f172a] font-medium">
                  {pathname?.includes('/configuracoes') ? 'Configurações' : 'Dashboard'}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f1f5f9] text-xs text-[#64748b]">
                <div className="w-5 h-5 rounded-full bg-[#16a34a] flex items-center justify-center text-[9px] font-bold text-white">A</div>
                <span className="hidden sm:inline font-medium text-[#334155]">Admin</span>
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 p-4 lg:p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </AnalyticsProvider>
  );
}
