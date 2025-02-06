// 'use client'

// import { ArrowRight } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent } from "@/components/ui/card"
// import Link from 'next/link'

// export default function CheckOut() {
//   // const router = useRouter()

//   return (
//     <div className="w-full max-w-7xl mx-auto p-4 mt-[120px] mb-[120px]">
//       <div className="grid gap-8 md:grid-cols-2">
//         {/* Coupon Code Section */}
//         <div className="space-y-4">
//           <h2 className="text-3xl font-bold text-gray-800">Coupon Code</h2>
//           <Card>
//             <CardContent className="p-6 space-y-4">
//               <p className="text-lg text-gray-500">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non
//               </p>
//               <div className="flex space-x-2">
//                 <Input 
//                   placeholder="Enter Here code" 
//                   className="flex-1"
//                 />
//                 <Button className="bg-[#FF9F0D] hover:bg-[#FF9F0D]/90 text-lg px-8">
//                   Apply
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Total Bill Section */}
//         <div className="space-y-4">
//           <h2 className="text-3xl font-bold text-gray-800">Total Bill</h2>
//           <Card>
//             <CardContent className="p-6">
//               <div className="space-y-4">
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-xl font-bold text-gray-800">Cart Subtotal</h3>
//                   <span className="text-lg font-bold text-gray-800">$120.00</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-lg text-gray-600">Shipping Charge</h3>
//                   <span className="text-lg text-gray-600">$00.00</span>
//                 </div>
//                 <div className="h-px bg-gray-300 my-4" />
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-xl font-bold text-gray-800">Total Amount</h3>
//                   <span className="text-lg font-bold text-gray-800">$205.00</span>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//           <Link href={'/CheckOutform'} >
//           <Button className="w-full h-16 text-lg bg-[#FF9F0D] hover:bg-[#FF9F0D]/90">
//             Proceed to Checkout
//             <ArrowRight className="ml-2 h-5 w-5" />
//           </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }


