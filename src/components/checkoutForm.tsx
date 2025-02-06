//src\components\checkoutForm.tsx
'use client'

import { useState, useEffect } from 'react'
import {  ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Image from 'next/image'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Product {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export default function CheckoutForm() {
  const [sameAsShipping, setSameAsShipping] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const router = useRouter()

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setProducts(JSON.parse(savedCart))
    }
  }, [])

  const calculateSubtotal = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0)
  }

  const handlePlaceOrder = () => {
    // Here you would typically send the order to your backend
    // For this example, we'll just clear the cart and show a success message
    localStorage.removeItem("cart")
    router.push('/order-success')
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
            Checkout Page
          </h1>
          <p className="text-sm sm:text-base text-white flex items-center space-x-2 group">
            <Link href={"/"} ><span className="transition-colors duration-300">Home</span></Link>
            <ChevronRight
              size={16}
              className="text-white transition-colors duration-300 group-hover:text-orange-500"
            />
            <span className="transition-colors duration-300 text-orange-500">Checkout Page</span>
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Shipping Address Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" placeholder="Enter first name" required/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" placeholder="Enter last name" required/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type="email" placeholder="Enter email address" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" type="tel" placeholder="Enter phone number" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Enter company name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">Pakistan</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ny">Karachi</SelectItem>
                    <SelectItem value="la">Islamabad</SelectItem>
                    <SelectItem value="ch">Pindi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode">ZIP code</Label>
                <Input id="zipCode" placeholder="Enter ZIP code" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address1">Address 1</Label>
                <Input id="address1" placeholder="Enter address line 1" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address2">Address 2</Label>
                <Input id="address2" placeholder="Enter address line 2" />
              </div>
            </div>

            <div className="mt-6 flex items-center space-x-2">
              <Checkbox
                id="sameAddress"
                checked={sameAsShipping}
                onCheckedChange={(checked) => setSameAsShipping(checked as boolean)}
              />
              <Label htmlFor="sameAddress">Same as shipping address</Label>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <Link href={'/shoppingCart'} >
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to cart
                </Button>
              </Link>
              <Link href={"/order-success"}>
              <Button onClick={handlePlaceOrder} className="bg-[#FF9F0D] hover:bg-[#FF9F0D]/90 flex items-center gap-2">
                Proceed to Shipping
                <ArrowRight className="h-4 w-4" />
              </Button>
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Order Items */}
              {products.map((product) => (
                <div key={product.id} className="flex gap-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={80}
                    height={80}
                    className="object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">Quantity: {product.quantity}</p>
                    <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
              <Separator />
              {/* Order Calculations */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sub-total</span>
                  <span>${calculateSubtotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>${(calculateSubtotal() * 0.1).toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${(calculateSubtotal() * 1.1).toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handlePlaceOrder} className="w-full bg-[#FF9F0D] hover:bg-[#FF9F0D]/90">
                Place Order
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  )
}

