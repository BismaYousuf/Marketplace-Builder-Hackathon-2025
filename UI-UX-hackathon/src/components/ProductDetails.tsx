// 'use client'

// import { useState, useEffect } from "react"
// import { Star, Heart, GitCompareIcon as GitDiff, ShoppingBag, Minus, Plus, ChevronRight } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import Image from "next/image"
// import { FaFacebookF, FaInstagram, FaTwitter, FaVk } from "react-icons/fa"
// import { FiYoutube } from "react-icons/fi"
// import ProductDescription from "@/components/productDescription"
// import SimilarProducts from "@/components/similarProducts"
// import Link from "next/link"
// import { useRouter } from 'next/navigation'

// // Mock data for products (same as in ShopPage)
// const products = [
//   { id: 1, name: "Fresh Lime", price: 38.00, oldPrice: 45.00, image: "/Mask Group.png" },
//   { id: 2, name: "Chicken Burger", price: 42.00, oldPrice: 50.00, image: "/Mask Group (1).png" },
//   { id: 3, name: "Veg Pizza", price: 35.00, oldPrice: 40.00, image: "/Mask Group (3).png" },
//   { id: 4, name: "Fruit Salad", price: 28.00, oldPrice: 32.00, image: "/Salad.png" },
//   { id: 5, name: "Cheese Sandwiches", price: 30.00, oldPrice: 36.00, image: "/bread.png" },
//   { id: 6, name: "Iced Coffee", price: 25.00, oldPrice: 30.00, image: "/iced.jpg" },
//   { id: 7, name: "Grilled Chicken", price: 45.00, oldPrice: 52.00, image: "/Mask Group (6).png" },
//   { id: 8, name: "Veggie Wrap", price: 32.00, oldPrice: 38.00, image: "/veggi.jpg" },
//   { id: 9, name: "Chocolate Cake", price: 40.00, oldPrice: 48.00, image: "/Mask Group (4).png" },
//   { id: 10, name: "Strawberry Smoothie", price: 22.00, oldPrice: 26.00, image: "/Mask Group (2).png" },
//   { id: 11, name: "Beef Steak", price: 55.00, oldPrice: 65.00, image: "/Mask Group (5).png" },
//   { id: 12, name: "Caesar Salad", price: 30.00, oldPrice: 35.00, image: "/sd2.jpg" },
//   { id: 13, name: "Mushroom Risotto", price: 38.00, oldPrice: 45.00, image: "/mashroom.jpg" },
//   { id: 14, name: "Shrimp Pasta", price: 42.00, oldPrice: 50.00, image: "/shrim.jpg" },
//   { id: 15, name: "Mango Lassi / Drink", price: 20.00, oldPrice: 24.00, image: "/mango.jpg" },

//   // Add remaining products here...
// ]

// interface ProductDetailProps {
//   id: string
// }

// export default function ProductDetail({ id }: ProductDetailProps) {
//   const [quantity, setQuantity] = useState(1)
//   const [product, setProduct] = useState<typeof products[0] | null>(null)
//   const router = useRouter()

//   useEffect(() => {
//     const foundProduct = products.find(p => p.id.toString() === id)
//     setProduct(foundProduct || null)
//   }, [id])

//   if (!product) {
//     return <div>Product not found</div>
//   }

//   const handleAddToCart = () => {
//     if (!product) return
//     const cartItem = {
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       rating: 5,
//       image: product.image,
//       quantity: quantity
//     }

//     const existingCart = JSON.parse(localStorage.getItem('cart') || '[]')
//     const existingItemIndex = existingCart.findIndex((item: any) => item.id === cartItem.id)

//     if (existingItemIndex > -1) {
//       existingCart[existingItemIndex].quantity += quantity
//     } else {
//       existingCart.push(cartItem)
//     }

//     localStorage.setItem('cart', JSON.stringify(existingCart))
//     alert('Product added to cart!')
//     router.push('/shoppingCart')
//   }

//   const handleAddToWishlist = () => {
//     if (!product) return
//     const wishlistItem = {
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       image: product.image
//     }

//     const existingWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')
//     if (!existingWishlist.some((item: any) => item.id === wishlistItem.id)) {
//       existingWishlist.push(wishlistItem)
//       localStorage.setItem('wishlist', JSON.stringify(existingWishlist))
//       alert('Product added to wishlist!')
//     } else {
//       alert('Product is already in the wishlist!')
//     }
//   }

//   const handleCompare = () => {
//     if (!product) return
//     const compareItem = {
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       image: product.image
//     }

//     const existingCompare = JSON.parse(localStorage.getItem('compare') || '[]')
//     if (!existingCompare.some((item: any) => item.id === compareItem.id)) {
//       existingCompare.push(compareItem)
//       localStorage.setItem('compare', JSON.stringify(existingCompare))
//       alert('Product added to compare list!')
//     } else {
//       alert('Product is already in the compare list!')
//     }
//   }

//   return (
//     <>
//       <div className="relative w-full h-[300px] md:h-[410px] bg-black">
//         <Image
//           src='/menubg.png'
//           alt='Menu Background'
//           fill
//           priority
//           className="object-cover"
//         />

//         <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4 sm:px-6 md:px-8">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
//             Shopping Details
//           </h1>

//           <p className="text-sm sm:text-base text-white flex items-center space-x-2 group">
//             <Link href={"/"} ><span className="transition-colors duration-300">Home</span></Link>  
//             <ChevronRight
//               size={16}
//               className="text-white transition-colors duration-300 group-hover:text-orange-500"
//             />
//             <span className="transition-colors duration-300 text-orange-500">Shopping Details</span>
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8">
//         <div className="flex flex-col lg:flex-row gap-8">
//           <div className="lg:w-1/2">
//             <div className="flex gap-4">
//               <div className="flex-1">
//                 <Image
//                   src={product.image || "/placeholder.svg"}
//                   alt={product.name}
//                   width={491}
//                   height={596}
//                   className="rounded-md w-full h-auto object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="lg:w-1/2">
//             <div className="flex justify-between items-center mb-4">
//               <span className="bg-[#FF9F0D] text-white px-4 py-1 rounded-md text-sm">
//                 In stock
//               </span>
//               <div className="flex gap-4 text-gray-500">
//                 <Link href={"/shop"}><button className="hover:text-gray-700">Prev</button></Link>   
//                 <Link href={"/shoppingCart"} > <button className="hover:text-gray-700">Next</button></Link>
//               </div>
//             </div>

//             <h1 className="text-4xl font-bold text-gray-800 mb-4">
//               {product.name}
//             </h1>

//             <p className="text-gray-600 mb-8">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
//               pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna,
//               vitae feugiat pretium donec id elementum.
//             </p>

//             <div className="border-t border-b border-gray-200 py-4 mb-6">
//               <span className="text-3xl font-bold text-gray-800">${product.price.toFixed(2)}</span>
//             </div>

//             <div className="flex items-center gap-4 mb-6">
//               <div className="flex">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 fill-[#FF9F0D] text-[#FF9F0D]" />
//                 ))}
//               </div>
//               <div className="text-gray-500 text-sm flex items-center gap-2">
//                 <span>5.0 Rating</span>
//                 <span className="h-4 w-px bg-gray-300" />
//                 <span>22 Review</span>
//               </div>
//             </div>

//             <div className="flex gap-4 mb-6">
//               <Card className="flex items-center border border-gray-300">
//                 <Button 
//                   variant="ghost" 
//                   size="icon"
//                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                 >
//                   <Minus className="h-4 w-4" />
//                 </Button>
//                 <span className="w-12 text-center font-bold">{quantity}</span>
//                 <Button 
//                   variant="ghost" 
//                   size="icon"
//                   onClick={() => setQuantity(quantity + 1)}
//                 >
//                   <Plus className="h-4 w-4" />
//                 </Button>
//               </Card>

//               <Button 
//   onClick={handleAddToCart} 
//   className="flex-1 bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300 ease-in-out"
// >
//   Add to Cart
// </Button>

//             </div>

//             <div className="flex gap-6 mb-6">
//               <Button 
//                 onClick={handleAddToWishlist} 
//                 className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
//               >
//                 <Heart className="w-5 h-5" />
//                 Add to Wishlist
//               </Button>
//               <Button 
//                 onClick={handleCompare} 
//                 className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
//               >
//                 <GitDiff className="w-5 h-5" />
//                 Add to Compare
//               </Button>
//             </div>

//             <div className="flex gap-4">
//               <Link href={"#"}><FaFacebookF size={20} /></Link>
//               <Link href={"#"}><FaInstagram size={20} /></Link>
//               <Link href={"#"}><FaVk size={20} /></Link>
//               <Link href={"#"}><FiYoutube size={20} /></Link>
//               <Link href={"#"}><FaTwitter size={20} /></Link>
//             </div>
//           </div>
//         </div>

//         <ProductDescription productId={""} />
      
//       </div>
//     </>
//   )
// }
