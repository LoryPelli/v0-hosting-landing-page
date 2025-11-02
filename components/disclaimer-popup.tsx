'use client';

import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { IconBadge } from './icon-badge';
import { ModalWrapper } from './modal-wrapper';

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

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  return (
    <ModalWrapper isOpen={isOpen} isClosing={isClosing}>
      <IconBadge icon={AlertCircle} />

      <h2 className='mb-4 text-center text-2xl font-bold text-balance'>Fictional Website</h2>
      <p className='text-muted-foreground mb-8 text-center leading-relaxed'>
        This is a demonstration website created for illustrative purposes only. SkyMesh Dynamics is not a real company
        and all content is purely fictional.
      </p>

      <Button
        onClick={handleClose}
        className='liquid-button group relative z-10 w-full overflow-hidden rounded-full bg-linear-to-r from-blue-600 to-purple-600 px-8 text-base font-semibold text-white transition-all duration-500 hover:scale-105 hover:from-blue-500 hover:to-purple-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]'
        size='lg'
      >
        <span className='relative z-10'>I Understand</span>
      </Button>
    </ModalWrapper>
  );
}
