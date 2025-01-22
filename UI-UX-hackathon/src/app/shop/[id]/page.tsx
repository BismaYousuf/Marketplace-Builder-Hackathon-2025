//src\app\shop\[id]\page.tsx
"use client"

import React, { useState } from "react"
import { useParams } from "next/navigation"
import { createClient } from "@sanity/client"
import Image from "next/image"
import { Star, Heart, GitCompareIcon as GitDiff, Minus, Plus, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FaFacebookF, FaInstagram, FaTwitter, FaVk } from "react-icons/fa"
import { FiYoutube } from "react-icons/fi"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: "2021-08-31",
})

interface Product {
  _id: string
  name: string
  price: number
  image: string
  category: string
  description?: string
  reviews: Array<{ rating: number; comment: string }>
}
interface ProductItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity?: number; // Optional for wishlist and compare
}


export default function ProductDetails() {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Product | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)
  const router = useRouter()
  const [newReview, setNewReview] = useState({ rating: 5, comment: "" })

  React.useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const data = await client.fetch(
          `*[_type == "food" && _id == $id][0]{
            _id,
            name,
            price,
            category,
            description,
            "image": image.asset->url,
            reviews[]
          }`,
          { id },
        )
        if (data) {
          setProduct(data)
        } else {
          setError("Product not found.")
        }
      } catch (err) {
        console.error("Error fetching product:", err)
        setError("Failed to load product details. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  const handleAddToCart = () => {
    if (!product) return
    const cartItem = {
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
    }

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]")
    const existingItemIndex = existingCart.findIndex((item: ProductItem) => item.id === cartItem.id)

    if (existingItemIndex > -1) {
      existingCart[existingItemIndex].quantity += quantity
    } else {
      existingCart.push(cartItem)
    }

    localStorage.setItem("cart", JSON.stringify(existingCart))
    alert("Product added to cart!")
    router.push("/shoppingCart")
  }

  const handleAddToWishlist = () => {
    if (!product) return
    const wishlistItem = {
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
    }

    const existingWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    if (!existingWishlist.some((item: ProductItem) => item.id === wishlistItem.id)) {
      existingWishlist.push(wishlistItem)
      localStorage.setItem("wishlist", JSON.stringify(existingWishlist))
      alert("Product added to wishlist!")
    } else {
      alert("Product is already in the wishlist!")
    }
  }

  const handleCompare = () => {
    if (!product) return
    const compareItem = {
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
    }

    const existingCompare = JSON.parse(localStorage.getItem("compare") || "[]")
    if (!existingCompare.some((item: ProductItem) => item.id === compareItem.id)) {
      existingCompare.push(compareItem)
      localStorage.setItem("compare", JSON.stringify(existingCompare))
      alert("Product added to compare list!")
    } else {
      alert("Product is already in the compare list!")
    }
  }

  const handleAddReview = () => {
    if (!product) return
    const updatedProduct = {
      ...product,
      reviews: [...(product.reviews || []), newReview],
    }
    setProduct(updatedProduct)
    setNewReview({ rating: 5, comment: "" })
    // In a real application, you would send this to your backend
    alert("Review added successfully!")
  }

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-red-500 mb-4">{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    )
  }

  if (!product) {
    return <div className="flex justify-center items-center h-screen">Product not found.</div>
  }

  return (
    <>
      <div className="relative w-full h-[300px] md:h-[410px] bg-black">
        <Image src="/menubg.png" alt="Menu Background" fill priority className="object-cover" />

        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">Shopping Details</h1>

          <p className="text-sm sm:text-base text-white flex items-center space-x-2 group">
            <Link href={"/"}>
              <span className="transition-colors duration-300">Home</span>
            </Link>
            <ChevronRight size={16} className="text-white transition-colors duration-300 group-hover:text-orange-500" />
            <span className="transition-colors duration-300 text-orange-500">Shopping Details</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="flex gap-4">
              <div className="flex-1">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={491}
                  height={596}
                  className="rounded-md w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-[#FF9F0D] text-white px-4 py-1 rounded-md text-sm">In stock</span>
              <div className="flex gap-4 text-gray-500">
                <Link href={"/shop"}>
                  <button className="hover:text-gray-700">Prev</button>
                </Link>
                <Link href={"/shoppingCart"}>
                  {" "}
                  <button className="hover:text-gray-700">Next</button>
                </Link>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Description</h2>
              <p className="text-gray-600">{product.description || "No description available."}</p>
            </div>

            <div className="border-t border-b border-gray-200 py-4 mb-6">
              <span className="text-3xl font-bold text-gray-800">${product.price.toFixed(2)}</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FF9F0D] text-[#FF9F0D]" />
                ))}
              </div>
              <div className="text-gray-500 text-sm flex items-center gap-2">
                <span>5.0 Rating</span>
                <span className="h-4 w-px bg-gray-300" />
                <span>22 Review</span>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <Card className="flex items-center border border-gray-300">
                <Button variant="ghost" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </Card>

              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300 ease-in-out"
              >
                Add to Cart
              </Button>
            </div>

            <div className="flex gap-6 mb-6">
              <Button
                onClick={handleAddToWishlist}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Heart className="w-5 h-5" />
                Add to Wishlist
              </Button>
              <Button onClick={handleCompare} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <GitDiff className="w-5 h-5" />
                Add to Compare
              </Button>
            </div>

            <div className="flex gap-4">
              <Link href={"#"}>
                <FaFacebookF size={20} />
              </Link>
              <Link href={"#"}>
                <FaInstagram size={20} />
              </Link>
              <Link href={"#"}>
                <FaVk size={20} />
              </Link>
              <Link href={"#"}>
                <FiYoutube size={20} />
              </Link>
              <Link href={"#"}>
                <FaTwitter size={20} />
              </Link>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Reviews</h2>
              {product.reviews && product.reviews.length > 0 ? (
                product.reviews.map((review, index) => (
                  <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < review.rating ? "fill-[#FF9F0D] text-[#FF9F0D]" : "fill-gray-300 text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <p>{review.comment}</p>
                  </div>
                ))
              ) : (
                <p>No reviews yet.</p>
              )}
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-2">Add a Review</h3>
                <div className="mb-4">
                  <Label htmlFor="rating">Rating</Label>
                  <Select
                    value={newReview.rating.toString()}
                    onValueChange={(value) => setNewReview({ ...newReview, rating: Number.parseInt(value) })}
                  >
                    <SelectTrigger id="rating">
                      <SelectValue placeholder="Select a rating" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <SelectItem key={rating} value={rating.toString()}>
                          {rating} Star{rating !== 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="mb-4">
                  <Label htmlFor="comment">Comment</Label>
                  <Textarea
                    id="comment"
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    placeholder="Write your review here..."
                  />
                </div>
                <Button 
  onClick={handleAddReview} 
  className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
>
  Submit Review
</Button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

