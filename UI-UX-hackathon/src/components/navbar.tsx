"use client";

import * as React from "react";
import Link from "next/link";
import { Search, ShoppingBag, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";

interface NavigationItem {
  title: string;
  href: string;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  { title: "Home", href: "/" },
  { title: "Menu", href: "/menu" },
  { title: "Blog", href: "/blog" },
  {
    title: "Pages",
    href: "#",
    children: [
      { title: "About Us", href: "/aboutSection" },
      { title: "Team", href: "/not-found" },
      { title: "FAQ", href: "/faq" },
    ],
  },
  { title: "About", href: "/aboutSection" },
  { title: "Shop", href: "/shop" },
  { title: "Contact", href: "/signinform" },
];

// Sample product data
const products = [
  { id: 1, name: "Pizza", description: "Delicious cheese pizza" },
  { id: 2, name: "Burger", description: "Juicy beef burger" },
  { id: 3, name: "Pasta", description: "Creamy Alfredo pasta" },
  { id: 4, name: "Sushi", description: "Fresh salmon sushi" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [filteredProducts, setFilteredProducts] = React.useState(products);

  const closeMenu = () => setIsMenuOpen(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter products based on the search query
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <nav className="relative bg-black py-4 px-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#FF9F0D]">
            Food<span className="text-white">tuck</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <NavigationMenu className="space-x-4">
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger className="text-white hover:text-[#FF9F0D] px-2 py-1">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-48 gap-3 p-4">
                            {item.children.map((child) => (
                              <li key={child.title}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={child.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    onClick={closeMenu}
                                  >
                                    {child.title}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-white hover:text-[#FF9F0D] transition-colors px-2 py-1"
                        onClick={closeMenu}
                      >
                        {item.title}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Search and Cart */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-64 rounded-full border-[#FF9F0D] bg-transparent text-white placeholder:text-white"
                  value={searchQuery}
                  onChange={handleSearch}
                />
                <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white" />
              </div>
              <Link href="/shoppingCart">
              
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-orange-600 hover:text-white"
              >
                <ShoppingBag className="h-6 w-6" />
              </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <div key={item.title} className="py-1">
                  {item.children ? (
                    <div className="space-y-1">
                      <button className="flex items-center text-white w-full px-2 py-1">
                        {item.title}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            className="block text-white hover:text-[#FF9F0D] px-2 py-1"
                            onClick={closeMenu}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-white hover:text-[#FF9F0D] px-2 py-1"
                      onClick={closeMenu}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-4">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full rounded-full border-[#FF9F0D] bg-transparent text-white placeholder:text-white"
                  value={searchQuery}
                  onChange={handleSearch}
                />
               <Link href={"/shoppingCart"} >
               <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-orange-600"
                >
                  <ShoppingBag className="h-6 w-6" />
                </Button>
               </Link>
                
              </div>
            </div>
          </div>
        )}

        {/* Display Search Results */}
        {searchQuery && (
          <div className="mt-4 bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-black font-semibold mb-2">Search Results</h3>
            <ul>
              {filteredProducts.map((product) => (
                <li key={product.id} className="text-black">
                  <div className="p-2 hover:bg-gray-100 rounded">
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-600">{product.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            {filteredProducts.length === 0 && (
              <p className="text-gray-600">No products found.</p>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}