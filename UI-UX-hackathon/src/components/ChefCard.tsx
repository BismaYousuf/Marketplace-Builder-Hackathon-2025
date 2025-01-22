

import type React from "react"
import Image from "next/image"

interface ChefCardProps {
  name: string
  imageUrl: string
  position: string
}

export const ChefCard: React.FC<ChefCardProps> = ({ name, imageUrl, position }) => {
  return (
    <div className="w-full max-w-[300px] bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-[300px]">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-gray-600">{position}</p>
      </div>
    </div>
  )
}

