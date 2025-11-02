interface HeroBackgroundProps {
  mousePosition: { x: number; y: number };
}

export function HeroBackground({ mousePosition }: HeroBackgroundProps) {
  return (
    <>
      <div
        className='absolute inset-0 transition-all duration-300'
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 50%),
                       linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))`,
        }}
      />

      <div className='floating absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl' />
      <div
        className='floating absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl'
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
    </>
  );
}
