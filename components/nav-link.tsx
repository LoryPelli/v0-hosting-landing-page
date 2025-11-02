import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  gradient: string;
}

export function NavLink({ href, children, gradient }: NavLinkProps) {
  return (
    <a
      href={href}
      className='group relative overflow-hidden rounded-xl px-4 py-2 text-sm text-slate-300 transition-all duration-500 hover:text-white'
    >
      <span className='relative z-10'>{children}</span>
      <div
        className={cn(
          'absolute inset-0 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100',
          gradient,
        )}
      />
      <div className='absolute inset-0 rounded-xl border border-white/0 transition-all duration-500 group-hover:border-white/20' />
    </a>
  );
}
