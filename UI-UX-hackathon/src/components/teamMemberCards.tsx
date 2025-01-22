import Image from "next/image"
import {   PinIcon as PinAlt } from 'lucide-react'
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";


interface TeamMemberProps {
  name: string
  role: string
  imageUrl: string
}

export function TeamMemberCard({ name, role, imageUrl }: TeamMemberProps) {
  return (
    <>
   
    <div className="relative group w-full max-w-[312px]">
      <div className="relative h-[398px] bg-gray-100 overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Social Icons - Hidden by default, shown on hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
          <button className="p-2 bg-gray-100 hover:bg-[#FF9F0D] rounded transition-colors">
            <FaFacebookF className="w-4 h-4 text-gray-600 group-hover:text-white" />
          </button>
          <button className="p-2 bg-gray-100 hover:bg-[#FF9F0D] rounded transition-colors">
            <FaTwitter className="w-4 h-4 text-gray-600 group-hover:text-white" />
          </button>
          <button className="p-2 bg-[#FF9F0D] hover:bg-[#FF9F0D]/90 rounded transition-colors">
            < FiYoutube className="w-4 h-4 text-white" />
          </button>
          <button className="p-2 bg-gray-100 hover:bg-[#FF9F0D] rounded transition-colors">
            <PinAlt className="w-4 h-4 text-gray-600 group-hover:text-white" />
          </button>
        </div>
      </div>
      {/* Info Section */}
      <div className="absolute bottom-0 left-0 right-0 h-[88px] bg-white shadow-lg px-4 py-3 text-center">
        <h3 className="font-helvetica text-[20px] font-bold text-gray-600 mb-1">
          {name}
        </h3>
        <p className="font-helvetica text-base text-gray-400">{role}</p>
      </div>
    </div>
    </>
  )
}

