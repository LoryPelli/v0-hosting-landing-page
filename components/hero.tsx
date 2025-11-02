'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { HeroBackground } from './hero-background';
import { HeroBadge } from './hero-badge';

interface HeroProps {
  onContactClick: () => void;
  onDisclaimerClick: () => void;
}

export function Hero({ onContactClick, onDisclaimerClick }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden pt-20'>
      <HeroBackground mousePosition={mousePosition} />

      <div className='relative z-10 container mx-auto px-6 py-32'>
        <div className='mx-auto max-w-5xl space-y-8 text-center'>
          <HeroBadge />

          <h1 className='text-4xl leading-tight font-bold tracking-tight text-balance sm:text-5xl md:text-7xl lg:text-8xl'>
            Building the IT infrastructure{' '}
            <span className='animate-gradient bg-linear-to-r from-blue-500 via-purple-500 to-blue-500 bg-size-[200%_auto] bg-clip-text text-transparent'>
              of the future
            </span>
          </h1>

          <p className='mx-auto max-w-3xl text-lg leading-relaxed text-balance text-slate-300 sm:text-xl md:text-2xl'>
            Autonomous, adaptive, and always connected. We revolutionize hosting through intelligent technology,
            automation, and distributed infrastructure.
          </p>

          <div className='flex flex-col items-center justify-center gap-4 pt-8 sm:flex-row'>
            <Button
              size='lg'
              onClick={onDisclaimerClick}
              className='liquid-button group relative z-10 overflow-hidden rounded-full bg-linear-to-r from-blue-600 to-purple-600 px-8 text-base font-semibold text-white transition-all duration-500 hover:scale-105 hover:from-blue-500 hover:to-purple-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.6),0_20px_40px_rgba(147,51,234,0.4)]'
            >
              <span className='relative z-10'>Explore Our Solutions</span>
              <ArrowRight className='relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Button>
            <Button
              size='lg'
              variant='outline'
              onClick={onContactClick}
              className='liquid-button glass-card relative overflow-hidden rounded-full border-white/20 bg-slate-900/80 px-8 text-base font-semibold text-white transition-all duration-500 hover:scale-105 hover:border-white/40 hover:bg-slate-800/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]'
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
