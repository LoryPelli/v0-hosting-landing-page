'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ModalWrapperProps {
  isOpen: boolean;
  isClosing: boolean;
  onBackdropClick?: () => void;
  children: ReactNode;
}

export function ModalWrapper({ isOpen, isClosing, onBackdropClick, children }: ModalWrapperProps) {
  if (!isOpen && !isClosing) return null;

  return (
    <div
      className={cn(
        'fixed inset-0 z-100 flex items-center justify-center p-4',
        isClosing ? 'animate-out fade-out duration-300' : 'animate-in fade-in duration-300',
      )}
    >
      <div className='absolute inset-0 bg-black/60 backdrop-blur-md' onClick={onBackdropClick} />

      <div
        className={cn(
          'glass-card relative w-full max-w-md rounded-3xl border-2 border-white/20 p-8 shadow-2xl',
          isClosing ? 'animate-out zoom-out-95 duration-500' : 'animate-in zoom-in-95 duration-500',
        )}
      >
        <div className='glow absolute -inset-1 rounded-3xl bg-linear-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-50 blur-xl' />
        <div className='relative'>{children}</div>
      </div>
    </div>
  );
}
