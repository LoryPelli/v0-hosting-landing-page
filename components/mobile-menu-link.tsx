import { cn } from '@/lib/utils';

interface MobileMenuLinkProps {
  href: string;
  children: React.ReactNode;
  gradient: string;
  shadowColor: string;
  onClick: () => void;
}

export function MobileMenuLink({ href, children, gradient, shadowColor, onClick }: MobileMenuLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'relative px-6 py-4 text-lg text-slate-300 hover:text-white',
        'group overflow-hidden rounded-xl transition-all duration-500',
        'glass-card border border-white/10 hover:border-white/30',
        'hover:scale-105',
      )}
    >
      <span className='relative z-10 font-medium'>{children}</span>
      <div
        className={cn(
          'absolute inset-0 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100',
          gradient,
        )}
      />
      <div
        className={cn(
          'absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100',
          shadowColor,
        )}
      />
    </a>
  );
}
