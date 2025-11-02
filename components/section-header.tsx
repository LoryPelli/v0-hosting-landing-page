interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className='mx-auto mb-20 max-w-3xl text-center'>
      <h2 className='text-primary mb-4 text-sm font-semibold tracking-wider uppercase'>{label}</h2>
      <p className='text-4xl font-bold tracking-tight text-balance md:text-5xl'>{title}</p>
      {description && <p className='text-muted-foreground mt-6 text-xl text-balance'>{description}</p>}
    </div>
  );
}
