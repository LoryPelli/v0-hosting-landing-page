import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface IconBadgeProps {
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
}

export function IconBadge({ icon: Icon, className = '', iconClassName = 'h-8 w-8 text-blue-400' }: IconBadgeProps) {
  return (
    <div className='mb-6 flex justify-center'>
      <div className={cn('glass-card rounded-full border border-white/20 p-4', className)}>
        <Icon className={iconClassName} />
      </div>
    </div>
  );
}
