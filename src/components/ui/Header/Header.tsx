import React from 'react';
import Image from 'next/image';
import { loadEnvFile } from 'process';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav aria-label="Global" className="mx-auto flex items-center justify-between lg:p-2 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
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
}
