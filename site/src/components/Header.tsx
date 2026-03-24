'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { assetPath } from '@/lib/utils';
import { categories } from '@/data/products';

const navLinks = [
  {
    href: '/',
    label: 'HOME',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    href: '/quem-somos',
    label: 'QUEM SOMOS',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: '#',
    label: 'PRODUTOS',
    hasSubmenu: true,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    href: '/galerias',
    label: 'GALERIA',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
      </svg>
    ),
  },
  {
    href: '/blog',
    label: 'BLOG',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    href: '/contato',
    label: 'CONTATO',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    href: '/carrinho',
    label: 'ORÇAMENTO',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsSubmenuOpen, setProductsSubmenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const submenuRef = useRef<HTMLLIElement>(null);
  const submenuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastDirection: 'up' | 'down' = 'up';
    let accumulated = 0;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;
      lastScrollY = currentY;

      setIsScrolled(currentY > 0);

      const direction = delta > 0 ? 'down' : 'up';
      if (direction !== lastDirection) {
        accumulated = 0;
        lastDirection = direction;
      }
      accumulated += Math.abs(delta);

      if (accumulated > 60) {
        if (direction === 'down' && currentY > 100) {
          setIsCompact(true);
        } else if (direction === 'up') {
          setIsCompact(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        submenuRef.current &&
        !submenuRef.current.contains(event.target as Node)
      ) {
        setProductsSubmenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmenuEnter = () => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current);
      submenuTimeoutRef.current = null;
    }
    setProductsSubmenuOpen(true);
  };

  const handleSubmenuLeave = () => {
    submenuTimeoutRef.current = setTimeout(() => {
      setProductsSubmenuOpen(false);
    }, 200);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
      style={{ borderBottom: '1px solid #e5e7eb' }}
    >
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 ${
        isCompact ? 'py-1' : 'py-2'
      }`}>
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={assetPath("/imagens/logos/logo-capol.png")}
            alt="Capol - Cooperativa Agropecuária de Oliveira"
            width={160}
            height={50}
            className={`w-auto transition-all duration-300 ${
              isCompact ? 'h-8 md:h-9' : 'h-12 md:h-14'
            }`}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-0">
            {navLinks.map((link) =>
              link.hasSubmenu ? (
                <li
                  key={link.label}
                  ref={submenuRef}
                  className="relative"
                  onMouseEnter={handleSubmenuEnter}
                  onMouseLeave={handleSubmenuLeave}
                >
                  <button
                    type="button"
                    onClick={() => setProductsSubmenuOpen(!productsSubmenuOpen)}
                    className="flex flex-col items-center gap-1 px-4 py-2 text-[13px] font-semibold tracking-wide text-gray-600 transition-colors hover:text-green-700"
                    aria-expanded={productsSubmenuOpen}
                    aria-haspopup="true"
                  >
                    <span className="text-gray-500">{link.icon}</span>
                    <span className="flex items-center gap-1">
                      {link.label}
                      <svg
                        className={`h-3 w-3 transition-transform ${
                          productsSubmenuOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>

                  {/* Desktop Submenu */}
                  {productsSubmenuOpen && (
                    <div className="absolute left-0 top-full z-50 mt-0 w-64 rounded-b-lg bg-white py-2 shadow-xl border border-gray-100">
                      <Link
                        href="/produtos"
                        className="block px-4 py-2 text-sm font-semibold text-gray-800 transition-colors hover:bg-green-50 hover:text-green-700"
                        onClick={() => setProductsSubmenuOpen(false)}
                      >
                        Todos os Produtos
                      </Link>
                      <div className="my-1 border-t border-gray-100" />
                      {categories.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/categoria/${cat.slug}`}
                          className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-green-50 hover:text-green-700"
                          onClick={() => setProductsSubmenuOpen(false)}
                        >
                          {cat.name}
                          <span className="ml-2 text-xs text-gray-400">
                            ({cat.count})
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex flex-col items-center gap-1 px-4 py-2 text-[13px] font-semibold tracking-wide text-gray-600 transition-colors hover:text-green-700"
                  >
                    <span className="text-gray-500">{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-md p-2 text-gray-600 lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="border-t border-gray-200 bg-white lg:hidden">
          <ul className="px-4 py-2">
            {navLinks.map((link) =>
              link.hasSubmenu ? (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className="flex w-full items-center justify-between py-3 text-sm font-semibold text-gray-700"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-gray-500">{link.icon}</span>
                      {link.label}
                    </span>
                    <svg
                      className={`h-4 w-4 transition-transform ${
                        mobileProductsOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {mobileProductsOpen && (
                    <ul className="mb-2 ml-4 border-l-2 border-green-200 pl-4">
                      <li>
                        <Link
                          href="/produtos"
                          className="block py-2 text-sm font-semibold text-gray-700"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Todos os Produtos
                        </Link>
                      </li>
                      {categories.map((cat) => (
                        <li key={cat.slug}>
                          <Link
                            href={`/categoria/${cat.slug}`}
                            className="block py-2 text-sm text-gray-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {cat.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 py-3 text-sm font-semibold text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-gray-500">{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
