import React from 'react';
import Image from 'next/image';

export default function Header () {
  return (
    <header>
      <nav aria-label='Global' className='fixed mx-auto flex items-center justify-between lg:p-0.5 lg:px-8 bg-white w-full shadow'>
        <div className='flex lg:flex-1'>
          <a href='#' className=' p-1.5'>
            <span className='sr-only'>Your Company</span>
            <Image
              src='/logo-01.svg'
              alt='Shifter logo'
              width={140}
              height={38}
              priority
            />
          </a>
        </div>
      </nav>
    </header>
  );
};
