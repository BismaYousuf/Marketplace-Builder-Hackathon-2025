//src\app\menu\page.tsx
import StarterMenu from '@/components/startmenu';
import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Clients from '@/components/Clients';
import MenuSection from '@/components/menu';
import Link from 'next/link';

function MenuHero() {
  return (
    <>
     

      <div className="relative w-full h-[410px] bg-black m-auto">
        {/* Background Image */}
        <Image
          src={'/menubg.png'}
          alt={'Menu Background'}
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
        />

        {/* Heading on Top of Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4 sm:px-6 md:px-8">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
            Our Menu
          </h1>

          {/* Paragraph with Hover Effect */}
          <p className="text-sm sm:text-base text-white flex items-center space-x-2 group">
          <Link href={"/"} ><span className="transition-colors duration-300">Home</span></Link>  
            <ChevronRight
              size={16}
              className="text-white transition-colors duration-300 group-hover:text-orange-500"
            />
            <span className="transition-colors duration-300 text-orange-500">Menu</span>
          </p>
        </div>
      </div>

      <StarterMenu />
      <MenuSection />
      <Clients />
      <StarterMenu />
      <MenuSection />
    </>
  );
}

export default MenuHero;
