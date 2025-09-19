// app/(auth)/layout.tsx
import React from "react";
import Image from "next/image";
import Head from "next/head";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>   
      {/* Main layout */}
      <div className="flex min-h-screen">
       {/* Left sidebar */}
<section className="hidden lg:flex w-1/2 bg-gradient-to-r from-sky-900 via-cyan-500 to-yellow-200 p-10 flex-col items-center justify-center gap-5">

  <div className='flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12"'>
  <Image src="/favicon.png" alt="logo" width={256} height={256} />
  </div>


  <div className="space-y-3 text-white text-center">

    <h1 className="text-4xl font-bold">
      Manage your files in the best way
    </h1>

    <p className="text-lg text-white/9  font-serif">
      This is the place where you can manage your files in the best way possible.
    </p>

  </div>

  {/* Center the second image */}
  <div className="flex justify-center">
    <Image 
      src="/files.png"
      alt="Files"
      width={256} 
      height={256}
      className="transition-all hover:rotate-2 hover:scale-105"
          />

  </div>

</section>


        {/* Right content area
        <main className="flex-1 flex items-center justify-center p-10 bg-gray-50">
          {children}
        </main> */}
       <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
      
        <div className="mb-16 lg:hidden">
          
               <Image src="/favicon.png" alt="logo" width={224} height={82} 
               className="h-auto w-[200px] lg:w-[250px]"/>          
        </div>
        {children}

      </section>

      </div>

    </>

);
};

export default AuthLayout;
