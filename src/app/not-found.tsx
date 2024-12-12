import Image from 'next/image';
import Link from 'next/link';

export default function Custom404 () {
  return (
    <div className='container mx-auto flex justify-center items-center'>
      <div className="flex flex-col items-center justify-center p-12">
        <Image
          src={'/bg-404.png'}
          alt='page not found'
          width={267}
          height={267}
          priority
        />
        <h1 className='font-semibold my-[46px] text-[70px]'>Error 404</h1>
        <p className='my-4'>We can&apos;t seem to find the page youre looking for.</p>
        <Link href='/' className='text-green hover:text-black mt-12'>Go back to homepage</Link>
      </div>
    </div>
  );
}
