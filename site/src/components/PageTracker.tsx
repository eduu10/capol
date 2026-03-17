'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageVisit } from '@/lib/analytics';

export default function PageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    trackPageVisit(pathname);
  }, [pathname]);

  return null;
}
