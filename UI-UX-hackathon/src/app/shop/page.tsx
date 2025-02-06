"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronRight, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { createClient } from "@sanity/client"

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string; 
  category: string;
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: "2021-08-31",
})

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [priceRange, setPriceRange] = useState([0, 100])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("newest")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async (retries = 3) => {
      setIsLoading(true)
      setError(null)
      try {
        const data = await client.fetch(`*[_type == "food"]{
          _id,
          name,
          price,
          category,
          "image": image.asset->url
        }`)
        setProducts(data)
        setFilteredProducts(data)

        // Update price range based on actual product prices
        const prices = data.map((product: Product) => product.price)
        setPriceRange([Math.min(...prices), Math.max(...prices)])
      } catch (err) {
        console.error("Error fetching products:", err)
        if (retries > 0) {
          console.log(`Retrying... (${retries} attempts left)`)
          setTimeout(() => fetchProducts(retries - 1), 2000) // Wait 2 seconds before retrying
        } else {
          setError("Failed to load products. Please try again later.")
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  useEffect(() => {
    let result = products.filter(
      (product) =>
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    if (selectedCategories.length > 0) {
      result = result.filter((product) => selectedCategories.includes(product.category))
    }

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      default:
        // "newest" - assuming the original order is by newest
        break
    }

    setFilteredProducts(result)
  }, [products, priceRange, searchTerm, selectedCategories, sortBy])

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const uniqueCategories = Array.from(new Set(products.map((product) => product.category)))

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-red-500 mb-4">{error}</p>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </div>
    )
  }

  return (
    <>
      <div className="relative w-full h-[410px] bg-black m-auto">
        <Image
          src={"/menubg.png"}
          alt={"Menu Background"}
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">Our Shop</h1>

          <p className="text-sm sm:text-base text-white flex items-center space-x-2 group">
            <Link href={"/"}>
              <span className="transition-colors duration-300">Home</span>
            </Link>
            <ChevronRight size={16} className="text-white transition-colors duration-300 group-hover:text-orange-500" />
            <span className="transition-colors duration-300 text-orange-500">Shop</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-[312px] space-y-8">
            <div className="relative">
              <Input
                placeholder="Search Product"
                className="pl-4 pr-10 h-[46px] bg-[#FFF5E9]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button size="sm" className="absolute right-0 top-0 h-full px-4 bg-[#FF9F0D]">
                <Search className="h-5 w-5" />
              </Button>
            </div>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Category</h3>
                <div className="space-y-2">
                  {uniqueCategories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => handleCategoryChange(category)}
                      />
                      <label htmlFor={category} className="text-sm">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Filter By Price</h3>
                <Slider
                  defaultValue={[0, 100]}
                  max={Math.max(...priceRange)}
                  step={1}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mt-6"
                />
                <div className="flex justify-between text-sm">
                  <span>From ${priceRange[0]}</span>
                  <span>to ${priceRange[1]}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-gray-700">Sort By:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.length === 0 ? (
                <div className="col-span-full text-center text-gray-500">No items found.</div>
              ) : (
                filteredProducts.map((product) => (
                  <Card key={product._id} className="overflow-hidden">
                    <Link href={`/shop/${product._id}`}>
                      <div className="relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={300}
                          height={200}
                          className="w-full h-[200px] object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-bold mb-2">{product.name}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-[#FF9F0D]">${product.price.toFixed(2)}</span>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}