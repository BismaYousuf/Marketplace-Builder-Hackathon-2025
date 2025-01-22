'use client'
import Link from 'next/link';
import { ShoppingBag, Search, UserRound, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${isScrolled ? 'bg-black shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-orange-500">
            Food<span className="text-white">tuck</span>
          </Link>

          {/* Hamburger Menu for Mobile */}
          <button onClick={toggleMenu} className="md:hidden text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Links and Icons for larger screens */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-6">
              <NavItem href="/" active>Home</NavItem>
              <NavItem href="/menu">Menu</NavItem>
              <NavItem href="/blog">Blog</NavItem>
              <NavItem href="/not-found">Pages</NavItem>
              <NavItem href="/aboutSection">About</NavItem>
              <NavItem href="/Ourshop">Shop</NavItem>
              <NavItem href="/signupForm">Contact</NavItem>
            </div>
            <div className="flex items-center space-x-4">
              <Search className="text-white cursor-pointer" size={20} />
              <Link href={'/signinform'}>
                <UserRound className="text-white cursor-pointer" size={20} />
              </Link>
              <ShoppingBag className="text-white cursor-pointer" size={20} />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-black rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              <NavItem href="/" active onClick={toggleMenu}>Home</NavItem>
              <NavItem href="/menu" onClick={toggleMenu}>Menu</NavItem>
              <NavItem href="/blog" onClick={toggleMenu}>Blog</NavItem>
              <NavItem href="/not-found" onClick={toggleMenu}>Pages</NavItem>
              <NavItem href="/aboutSection" onClick={toggleMenu}>About</NavItem>
              <NavItem href="/Ourshop" onClick={toggleMenu}>Shop</NavItem>
              <NavItem href="/signupForm" onClick={toggleMenu}>Contact</NavItem>
            </div>
            <div className="flex justify-center space-x-6 mt-4 pt-4 border-t border-gray-700">
              <Search className="text-white cursor-pointer" size={20} />
              <Link href={'/signinform'}>
                <UserRound className="text-white cursor-pointer" size={20} />
              </Link>
              <ShoppingBag className="text-white cursor-pointer" size={20} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavItem({ href, children, active = false, onClick }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`text-base ${active ? 'text-orange-500' : 'text-white'} hover:text-orange-500 transition-colors relative ${
        active
          ? 'after:content-[""] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-orange-500 after:rounded-full'
          : ''
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

