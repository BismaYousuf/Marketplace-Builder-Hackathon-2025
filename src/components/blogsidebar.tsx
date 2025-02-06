'use client'

import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Star, PinIcon as Pinterest } from 'lucide-react'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import { FiYoutube } from "react-icons/fi"

const recentPosts = [
  {
    title: "Lorem ipsum dolor sit cing elit, sed do.",
    date: "June 22, 2020",
    image: "/butter.png"
  },
  {
    title: "Lorem ipsum dolor sit cing elit, sed do.",
    date: "June 22, 2020",
    image: "/Gourmet.png"
  },
  {
    title: "Lorem ipsum dolor sit cing elit, sed do.",
    date: "June 22, 2020",
    image: "/Mask Group (6).png"
  },
  {
    title: "Lorem ipsum dolor sit cing elit, sed do.",
    date: "June 22, 2020",
    image: "/06.png"
  }
]

const menuItems = [
  { name: "Chicken Fry", count: 26, image: "/01.png" },
  { name: "Burger Food", count: 46, image: "/02.png" },
  { name: "Pizza", count: 16, image: "/Mask Group (3).png" },
  { name: "Fresh Fruits", count: 36, image: "/Mask Group (8).png" },
  { name: "Vegetables", count: 16, image: "/sd2.png" }
]

const tags = [
  "Sandwich", "Tikka", "BBQ", "Restaurant", "Chicken Sharma", "Health",
  "Fastfood", "Pizza", "Burger", "Chicken", "Food"
]

const gallery = Array(6).fill("/sd3.png")

export default function BlogSidebar() {
  return (
    <div className="w-full max-w-md space-y-6 mt-8 sm:mt-[120px] mx-auto sm:ml-[24px] px-4 sm:px-0">
      {/* Search */}
      <div className="relative">
        <Input 
          placeholder="Search Your Keyword.." 
          className="pl-4 pr-12 h-[50px] sm:h-[70px] border-gray-200"
        />
        <button className="absolute right-0 top-0 h-full px-4 bg-[#FF9F0D] text-white">
          <Search className="h-5 w-5" />
        </button>
      </div>

      {/* Author Profile */}
      <Card>
        <CardContent className="p-4 sm:p-6 text-center">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4">
            <Image
              src="/prince.png"
              alt="Prince Miyako"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h3 className="text-lg sm:text-xl font-bold">Prince Miyako</h3>
          <p className="text-gray-500 mb-2 text-sm sm:text-base">Blogger/Photographer</p>
          <div className="flex justify-center gap-1 mb-4">
            {Array(5).fill(null).map((_, i) => (
              <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-[#FF9F0D] stroke-[#FF9F0D]" />
            ))}
            <span className="text-xs sm:text-sm text-gray-500 ml-2">(1 Review)</span>
          </div>
          <p className="text-gray-500 mb-4 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio eligendi suscipit reprehenderit atque
          </p>
          <div className="flex justify-center gap-4 text-gray-600">
            <FaFacebook className="h-4 w-4 sm:h-5 sm:w-5" />
            <FaTwitter className="h-4 w-4 sm:h-5 sm:w-5" />
            <FaInstagram className="h-4 w-4 sm:h-5 sm:w-5" />
            <FiYoutube className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Recent Post</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentPosts.map((post, i) => (
            <div key={i} className="flex gap-3 sm:gap-4">
              <Image
                src={post.image}
                alt={post.title}
                width={90}
                height={75}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-xs sm:text-sm text-[#FF9F0D]">{post.date}</p>
                <p className="text-sm sm:text-base text-gray-600">{post.title}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Filter by Menu */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Filter By Menu</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {menuItems.map((item, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-3 sm:gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-md object-cover"
                />
                <span className="font-bold text-sm sm:text-base">{item.name}</span>
              </div>
              <span className="text-gray-500 text-sm sm:text-base">{item.count}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Popular Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 sm:px-3 sm:py-1 border border-gray-400 text-gray-600 text-xs sm:text-sm rounded hover:bg-[#FF9F0D] hover:text-white hover:border-[#FF9F0D] cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Photo Gallery */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Photo Gallery</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-2">
            {gallery.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`Gallery image ${i + 1}`}
                width={90}
                height={75}
                className="rounded-md object-cover"
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Follow Us */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Follow Us</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-2">
            {[FaTwitter, FiYoutube, Pinterest, FaInstagram, FaFacebook].map((Icon, i) => (
              <button
                key={i}
                className={`p-3 sm:p-4 ${i === 2 ? 'bg-[#FF9F0D] text-white' : 'bg-[#FAF7F2]'} rounded-md hover:bg-[#FF9F0D] hover:text-white transition-colors`}
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

