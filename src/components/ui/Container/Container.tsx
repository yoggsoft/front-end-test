import React from 'react';

export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-grey w-full h-full py-6 px-6">
      <div className="bg-grey-light mx-auto px-4 py-6 sm:px-6 lg:px-8 rounded-xl border border-gray-400">
        {children}
      </div>
    </main>
  );
}

