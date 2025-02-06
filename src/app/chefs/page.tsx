"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { ChefCard } from "@/components/ChefCard"
import Link from "next/link"
import { createClient } from "@sanity/client"

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: "2021-08-31",
})

interface Chef {
  _id: string
  name: string
  image: string
  position: string
}

export default function ChefGrid() {
  const [chefs, setChefs] = useState<Chef[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const data = await client.fetch(`*[_type == "chef"]{
          _id,
          name,
          position,
          "image": image.asset->url
        }`)
        setChefs(data)
      } catch (err) {
        console.error("Error fetching chefs:", err)
        setError("Failed to load chefs. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchChefs()
  }, [])

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>
  }

  return (
    <div className="w-full">
      <div className="relative w-full h-[300px] md:h-[410px] bg-black">
        <Image src="/menubg.png" alt="Menu Background" layout="fill" objectFit="cover" priority />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          <h1 className="text-3xl md:text-[48px] font-bold text-white">Our Chef</h1>
          <p className="text-[16px] text-white flex items-center space-x-2 group">
            <Link href={"/"}>
              <span className="transition-colors duration-300">Home</span>
            </Link>
            <ChevronRight size={16} className="text-white transition-colors duration-300 group-hover:text-orange-500" />
            <span className="transition-colors duration-300 text-orange-500">Chef</span>
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 justify-items-center">
          {chefs.map((chef) => (
            <ChefCard key={chef._id} name={chef.name} imageUrl={chef.image} position={chef.position} />
          ))}
        </div>
      </div>
    </div>
  )
}

