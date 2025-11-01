'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header className={cn('fixed top-16 left-0 right-0 z-50 border-b border-white/10')}>
      <div className={cn('container mx-auto px-6 py-3')}>
        <nav className={cn('flex items-center justify-between gap-8')}>
          <div className={cn('flex items-center gap-3 shrink-0')}>
            <Image
              src='/logo.png'
              alt='SkyMesh Dynamics Logo'
              width={40}
              height={40}
              quality={100}
              priority
              className={cn('object-contain rounded-full')}
            />
            <span className={cn('text-xl font-semibold tracking-tight whitespace-nowrap')}>SkyMesh Dynamics</span>
          </div>

          <div className={cn('hidden md:flex items-center gap-2 shrink-0')}>
            <a
              href='#values'
              className={cn('relative px-4 py-2 text-sm text-slate-300 hover:text-white transition-all duration-500 rounded-xl overflow-hidden group')}
            >
              <span className={cn('relative z-10')}>Values</span>
              <div className={cn('absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm')} />
              <div className={cn('absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-xl transition-all duration-500')} />
            </a>
            <a
              href='#vision'
              className={cn('relative px-4 py-2 text-sm text-slate-300 hover:text-white transition-all duration-500 rounded-xl overflow-hidden group')}
            >
              <span className={cn('relative z-10')}>Vision</span>
              <div className={cn('absolute inset-0 bg-linear-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm')} />
              <div className={cn('absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-xl transition-all duration-500')} />
            </a>
            <a
              href='#services'
              className={cn('relative px-4 py-2 text-sm text-slate-300 hover:text-white transition-all duration-500 rounded-xl overflow-hidden group')}
            >
              <span className={cn('relative z-10')}>Services</span>
              <div className={cn('absolute inset-0 bg-linear-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm')} />
              <div className={cn('absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-xl transition-all duration-500')} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
