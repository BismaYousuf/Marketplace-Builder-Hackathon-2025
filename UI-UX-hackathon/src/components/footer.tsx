
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Clock, MessageCircle, PinIcon as Pinterest } from 'lucide-react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import Image from "next/image"
import Link from "next/link"

const recentPosts = [
  {
    date: "20 Feb 2022",
    title: "Keep Your Business",
    image: "/footer1.png"
  },
  {
    date: "20 Feb 2022",
    title: "Keep Your Business",
    image: "/footer (2).png"
  },
  {
    date: "20 Feb 2022",
    title: "Keep Your Business",
    image: "/footer roll.png"
  }
]

export default function Footer() {


  return (
    <footer className="bg-[#1A1A1A] text-white pt-16">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="max-w-xl">
            <h2 className="text-[#FF9F0D] text-3xl font-bold mb-2">
              Still You Need Our Support &amp;?
            </h2>
            <p className="text-white/80">
              Don&apos;t wait make a smart &amp; logical quote here. Its pretty easy.
            </p>
          </div>
          <div className="w-full md:w-auto flex">
            <Input
              type="email"
              placeholder="Enter Your Email"
              className="bg-[#FF9F0D] border-0 text-white placeholder:text-white/60 rounded-none"
            />
            <Button className="bg-white text-[#FF9F0D] hover:bg-white/90 rounded-none">
              Subscribe Now
            </Button>
          </div>
        </div>
        <div className="mt-8 border-t border-[#FF9F0D]" />
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About Us */}
        <div>
          <h3 className="text-2xl font-bold mb-6">About Us.&apos;</h3>
          <p className="text-white/80 mb-6">
            Corporate clients and leisure travelers has been relying on Groundlink for dependable safe, and professional chauffeured car service in major cities across World.
          </p>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#FF9F0D] rounded">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-medium mb-2">Opening Hours</h4>
              <p className="text-sm text-white/80">Mon - Sat(8.00 - 6.00)</p>
              <p className="text-sm text-white/80">Sunday - Closed</p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Useful Links</h3>
          <nav className="space-y-3">
            {['About', 'News', 'Partners', 'Team', 'Menu', 'Contacts'].map((item) => (
              <Link
                key={item}
                href="#"
                className="block text-white/80 hover:text-[#FF9F0D]"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Help&amp;?</h3>
          <nav className="space-y-3">
            {[
              'FAQ',
              'Term &amp; conditions',
              'Reporting',
              'Documentation',
              'Support Policy',
              'Privacy',
            ].map((item) => (
              <Link
                key={item}
                href="#"
                className="block text-white/80 hover:text-[#FF9F0D]"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Recent Post</h3>
          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <div key={index} className="flex gap-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={60}
                  height={60}
                  className="rounded"
                />
                <div>
                  <time className="text-white/50 text-sm">{post.date}</time>
                  <h4 className="text-white hover:text-[#FF9F0D] cursor-pointer">
                    {post.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 py-6 border-t border-gray-800 bg-[#4F4F4F]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/80">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            {[FaFacebook, FaInstagram, MessageCircle, Pinterest, FaYoutube, FaTwitter].map((Icon, index) => (
              <button
                key={index}
                className="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-[#FF9F0D] transition-colors"
              >
                <Icon className="w-4 h-4 text-gray-800" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
