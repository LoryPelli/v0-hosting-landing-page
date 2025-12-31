import Image from 'next/image';

export function Logo() {
  return (
    <div className='flex shrink-0 items-center gap-3'>
      <Image
        src='/favicon.ico'
        alt='SkyMesh Dynamics Logo'
        width={40}
        height={40}
        quality={100}
        priority
        className='rounded-full object-contain'
      />
      <span className='text-xl font-semibold tracking-tight whitespace-nowrap'>SkyMesh Dynamics</span>
    </div>
  );
}
