'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

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
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-20'>
      <div
        className='absolute inset-0 transition-all duration-300'
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 50%),
                       linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))`,
        }}
      />

      <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl floating' />
      <div
        className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl floating'
        style={{ animationDelay: '2s' }}
      />

      <div
        className='absolute inset-0 opacity-[0.02]'
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
        }}
      />

      <div className='container relative z-10 mx-auto px-6 py-32'>
        <div className='max-w-5xl mx-auto text-center space-y-8'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card shimmer text-sm font-medium mb-6 bg-slate-900/90 overflow-hidden relative'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-blue-500'></span>
            </span>
            <span className='bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold'>
              Revolutionizing Cloud Infrastructure
            </span>
          </div>

          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance'>
            Building the IT infrastructure{' '}
            <span className='bg-linear-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient bg-size-[200%_auto]'>
              of the future
            </span>
          </h1>

          <p className='text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto text-balance leading-relaxed'>
            Autonomous, adaptive, and always connected. We revolutionize hosting through intelligent technology,
            automation, and distributed infrastructure.
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-8'>
            <Button
              size='lg'
              onClick={onDisclaimerClick}
              className='liquid-button rounded-full text-base px-8 group relative z-10 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.6),0_20px_40px_rgba(147,51,234,0.4)]'
            >
              <span className='relative z-10'>Explore Our Solutions</span>
              <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10' />
            </Button>
            <Button
              size='lg'
              variant='outline'
              onClick={onContactClick}
              className='liquid-button rounded-full text-base px-8 glass-card border-white/20 hover:border-white/40 bg-slate-900/80 hover:bg-slate-800/90 text-white font-semibold transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] overflow-hidden relative'
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
