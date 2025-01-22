'use client'

import { useEffect, useState } from 'react'
import {  Plus, Minus, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

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
  const [coupon, setCoupon] = useState('')
  const [discount, setDiscount] = useState(0)

  const updateQuantity = (id: number, change: number) => {
    setProducts(prevProducts => {
      const updatedProducts = prevProducts.map(product => {
        if (product.id === id) {
          const newQuantity = Math.max(1, product.quantity + change)
          return { ...product, quantity: newQuantity }
        }
        return product
      })
      return updatedProducts
    })
  }

  const removeProduct = (id: number) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id))
  }

  const calculateTotal = (price: number, quantity: number) => (price * quantity).toFixed(2)

  const handleApplyCoupon = () => {
    // Apply discount based on coupon logic (Example: 10% discount)
    if (coupon === 'DISCOUNT10') {
      setDiscount(10)
    } else {
      alert('Invalid Coupon Code')
    }
  }

  const handleProceedToCheckout = () => {
    // Logic for proceeding to checkout
    alert('Proceeding to Checkout...')
  }

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart)
      if (Array.isArray(parsedCart) && parsedCart.length > 0) {
        setProducts(parsedCart)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products))
  }, [products])

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
            {products.map((product) => (
              <div key={product.id} className="relative grid grid-cols-12 gap-4 items-center p-4 bg-white rounded-lg border border-b border-gray-200">
                <div className="col-span-6 md:col-span-6 flex gap-4 items-center">
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      layout="fill"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{product.name}</p>
                    <p className="text-sm text-gray-500">${product.price}</p>
                  </div>
                </div>

                <div className="col-span-2 text-center">${product.price}</div>
                <div className="col-span-2 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button onClick={() => updateQuantity(product.id, -1)}>
                      <Minus className="h-5 w-5" />
                    </button>
                    <span className="font-bold">{product.quantity}</span>
                    <button onClick={() => updateQuantity(product.id, 1)}>
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="col-span-2 text-center">
                  ${calculateTotal(product.price, product.quantity)}
                  <button onClick={() => removeProduct(product.id)} className="text-red-500 ml-2">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Apply Coupon Section */}
      <div className="w-full max-w-7xl mx-auto p-4">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Coupon Code</h2>
          <div className="flex space-x-2">
            <input 
              type="text"
              placeholder="Enter Coupon Code"
              className="flex-1 p-3 border border-gray-300 rounded-md"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <button
              onClick={handleApplyCoupon}
              className="bg-[#FF9F0D] text-white p-3 rounded-md"
            >
              Apply
            </button>
          </div>
          {discount > 0 && (
            <div className="text-green-500">Coupon Applied! You get {discount}% off.</div>
          )}
        </div>

        {/* Total Bill Section */}
        <div className="space-y-4 mt-8">
          <h2 className="text-3xl font-bold text-gray-800">Total Bill</h2>
          <div className="p-6 space-y-4 border rounded-md bg-white">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-gray-800">Subtotal</span>
              <span className="text-xl font-bold text-gray-800">${calculateTotal(products.reduce((sum, product) => sum + product.price * product.quantity, 0), 1)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between items-center">
                <span className="text-lg text-gray-600">Discount</span>
                <span className="text-lg text-gray-600">-${(discount / 100 * products.reduce((sum, product) => sum + product.price * product.quantity, 0)).toFixed(2)}</span>
              </div>
            )}
            <div className="h-px bg-gray-300 my-4" />
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-gray-800">Total Amount</span>
              <span className="text-xl font-bold text-gray-800">
                ${(products.reduce((sum, product) => sum + product.price * product.quantity, 0) - (discount / 100 * products.reduce((sum, product) => sum + product.price * product.quantity, 0))).toFixed(2)}
              </span>
            </div>
          </div>

          {/* Proceed to Checkout */}
          {/* <Link href="/CheckOutform">
            <button
              onClick={handleProceedToCheckout}
              className="w-full py-3 bg-[#FF9F0D] text-white text-lg rounded-md mt-4"
            >
              Proceed to Checkout
            </button>
          </Link> */}

            
<Link href="/checkout">
  <button onClick={handleProceedToCheckout} className="w-full py-3 bg-[#FF9F0D] text-white text-lg rounded-md mt-4">
    Proceed to Checkout
  </button>
</Link>

        </div>
      </div>
    </>
  )
}


