export function HeroBadge() {
  return (
    <div className='glass-card shimmer relative mb-6 inline-flex items-center gap-2 overflow-hidden rounded-full bg-slate-900/90 px-4 py-2 text-sm font-medium'>
      <span className='relative flex h-2 w-2'>
        <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75'></span>
        <span className='relative inline-flex h-2 w-2 rounded-full bg-blue-500'></span>
      </span>
      <span className='bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold text-transparent'>
        Revolutionizing Cloud Infrastructure
      </span>
    </div>
  );
}
