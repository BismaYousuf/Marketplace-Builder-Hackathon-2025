'use client'

import { useEffect, useState } from 'react'
import { Star, Plus, Minus, ChevronRight, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
// import CheckOut from '@/components/CheckOut'
import { useRouter } from 'next/navigation'

interface Product {
  id: number
  name: string
  price: number
  rating: number
  image: string
  quantity: number
}

export default function ShoppingCart() {
  const [products, setProducts] = useState<Product[]>([])
  const router = useRouter()

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart)
      if (Array.isArray(parsedCart) && parsedCart.length > 0) {
        setProducts(parsedCart)
      }
    }
  }, [])

  const updateQuantity = (id: number, change: number) => {
    setProducts(products.map(product => {
      if (product.id === id) {
        const newQuantity = Math.max(1, product.quantity + change)
        return { ...product, quantity: newQuantity }
      }
      return product
    }))
  }

  const removeProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id))
  }

  const calculateTotal = (price: number, quantity: number) => {
    return (price * quantity).toFixed(2)
  }

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products))
  }, [products])

  const handleProceedToCheckout = () => {
    router.push('/checkout')
  }

  return (
    <>
      <div className="relative w-full h-[410px] bg-black m-auto">
        <Image
          src={'/menubg.png'}
          alt={'Menu Background'}
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
            Shopping Cart
          </h1>
          <p className="text-sm sm:text-base text-white flex items-center space-x-2 group">
            <Link href={"/"}><span className="transition-colors duration-300">Home</span></Link>
            <ChevronRight
              size={16}
              className="text-white transition-colors duration-300 group-hover:text-orange-500"
            />
            <span className="transition-colors duration-300 text-orange-500">Shopping Cart</span>
          </p>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto p-4">
        {products.length === 0 ? (
          <p className="text-center text-gray-500 my-8">Your shopping cart is empty.</p>
        ) : (
          <>
            <div className="grid grid-cols-12 gap-4 mb-4 text-sm font-bold text-gray-700">
              <div className="col-span-6 md:col-span-6">Product</div>
              <div className="col-span-2 text-center hidden md:block">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-center">Total</div>
            </div>
            <div className="space-y-4">
              {products.map((product) => (
                <div key={product.id} className="relative grid grid-cols-12 gap-4 items-center p-4 bg-white rounded-lg border border-b border-gray-200">
                  <div className="col-span-6 md:col-span-6 flex gap-4 items-center">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-gray-700 text-lg">{product.name}</h3>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < product.rating ? "fill-[#FF9F0D] stroke-[#FF9F0D]" : "fill-gray-200 stroke-gray-200"}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 text-center hidden md:block">
                    ${product.price.toFixed(2)}
                  </div>
                  <div className="col-span-4 md:col-span-2">
                    <div className="flex items-center justify-center gap-2 border rounded-full p-1">
                      <button
                        onClick={() => updateQuantity(product.id, -1)}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} className="text-gray-600" />
                      </button>
                      <span className="w-8 text-center font-semibold">{product.quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, 1)}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} className="text-gray-600" />
                      </button>
                    </div>
                  </div>
                  <div className="col-span-2 text-center font-bold">
                    ${calculateTotal(product.price, product.quantity)}
                  </div>
                  <button
                    onClick={() => removeProduct(product.id)}
                    className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 size={20} className="text-gray-400" />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-end">
              <Link href={'/order-success'} >
              <button
                onClick={handleProceedToCheckout}
                className="bg-[#FF9F0D] hover:bg-[#FF9F0D]/90 text-white px-6 py-2 rounded-md"
              >
                Proceed to Checkout
              </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  )
}

