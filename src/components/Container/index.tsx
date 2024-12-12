import React from 'react';

interface ContainerProps {
  children: React.ReactNode
}

export default function Container({
  children
}: Readonly<ContainerProps>) {
  return (
    <main className='block w-full h-height bg-grey py-6 px-6  pt-[80px] m-0'>
      <div className='bg-white mx-auto px-4 py-6 sm:px-6 lg:px-8 rounded-xl border border-grey-extra-light shadow'>
        {children}
      </div>
    </main>
  );
}

