"use client";

import { usePathname } from 'next/navigation';
import { Header } from './header';


export function HeaderWrapper() {
  const pathname = usePathname();
  const isAuthPage = pathname === '/login' || pathname === '/signup';

  if (isAuthPage) return null;
  return <Header />;
}
