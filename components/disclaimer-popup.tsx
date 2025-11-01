'use client';

import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface DisclaimerPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DisclaimerPopup({ isOpen, onClose }: DisclaimerPopupProps) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div
      className={cn(
        'fixed inset-0 z-100 flex items-center justify-center p-4',
        isClosing ? 'animate-out fade-out duration-300' : 'animate-in fade-in duration-300'
      )}
    >
      <div className='absolute inset-0 bg-black/60 backdrop-blur-md' />

      <div
        className={cn(
          'relative glass-card rounded-3xl p-8 max-w-md w-full shadow-2xl border-2 border-white/20',
          isClosing ? 'animate-out zoom-out-95 duration-500' : 'animate-in zoom-in-95 duration-500'
        )}
      >
        <div className='absolute -inset-1 bg-linear-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-50 glow' />

        <div className='relative'>
          <div className='flex justify-center mb-6'>
            <div className='p-4 rounded-full glass-card border border-white/20'>
              <AlertCircle className='h-8 w-8 text-blue-400' />
            </div>
          </div>

          <h2 className='text-2xl font-bold text-center mb-4 text-balance'>Fictional Website</h2>
          <p className='text-muted-foreground text-center mb-8 leading-relaxed'>
            This is a demonstration website created for illustrative purposes only. SkyMesh Dynamics is not a real
            company and all content is purely fictional.
          </p>

          <Button
            onClick={handleClose}
            className='liquid-button rounded-full text-base px-8 group relative z-10 w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]'
            size='lg'
          >
            <span className='relative z-10'>I Understand</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
