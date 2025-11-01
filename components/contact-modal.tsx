'use client';

import { useState, useEffect } from 'react';
import { Mail, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
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

  const email = 'info@skymeshdynamics.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        'fixed inset-0 z-100 flex items-center justify-center p-4',
        isClosing ? 'animate-out fade-out duration-300' : 'animate-in fade-in duration-300'
      )}
    >
      <div className='absolute inset-0 bg-black/60 backdrop-blur-md' onClick={handleClose} />

      <div
        className={cn(
          'relative glass-card rounded-3xl p-8 max-w-md w-full shadow-2xl border-2 border-white/20 bg-slate-900/95',
          isClosing ? 'animate-out zoom-out-95 duration-500' : 'animate-in zoom-in-95 duration-500'
        )}
      >
        <div className='absolute -inset-1 bg-linear-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-50 glow' />

        <div className='relative'>
          <button
            onClick={handleClose}
            className='absolute -top-2 -right-2 p-2 rounded-full glass-card border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-110 bg-slate-800/90 hover:bg-slate-700'
          >
            <X className='h-4 w-4 text-white' />
          </button>

          <div className='flex justify-center mb-6'>
            <div className='p-4 rounded-full glass-card border border-white/20 bg-linear-to-br from-blue-500/20 to-purple-500/20'>
              <Mail className='h-8 w-8 text-blue-400' />
            </div>
          </div>

          <h2 className='text-2xl font-bold text-center mb-4 text-balance text-white'>Contact Us</h2>
          <p className='text-slate-300 text-center mb-6 leading-relaxed'>
            For information about our services, write to us at:
          </p>

          <div className='glass-card rounded-2xl p-4 mb-6 border border-white/20 text-center bg-slate-800/90'>
            <p className='text-lg font-semibold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
              {email}
            </p>
          </div>

          <div className='flex gap-3'>
            <Button
              onClick={handleCopy}
              className='flex-1 liquid-button relative z-10 rounded-full py-6 text-base font-semibold text-white bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(147,51,234,0.6)]'
              size='lg'
            >
              <span className='relative z-10'>{copied ? 'Copied!' : 'Copy Email'}</span>
            </Button>
            <Button
              onClick={handleClose}
              variant='outline'
              className='flex-1 liquid-button rounded-full py-6 text-base font-semibold glass-card border-white/20 hover:border-white/40 bg-linear-to-r from-purple-600 to-blue-600 text-white hover:bg-slate-700 hover:from-slate-700 hover:to-slate-600 transition-all duration-500 hover:scale-105 overflow-hidden relative'
              size='lg'
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
