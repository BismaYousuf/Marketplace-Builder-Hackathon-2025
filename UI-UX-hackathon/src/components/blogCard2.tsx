import { ArrowUpRight, Calendar, MessageCircle, UserCircle } from 'lucide-react'
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function BlogCard2() {
  return (
    <Card className="relative w-full overflow-hidden bg-white mt-8 ">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src="/pizza.png"
          alt="Blog featured image"
          className="object-cover"
          fill
          priority
        />
        <div className="absolute left-3 top-3 sm:left-4 sm:top-4 bg-[#FF9F0D] p-1.5 sm:p-2 text-center text-white rounded-md">
          <div className="text-base sm:text-lg font-bold">14</div>
          <div className="text-xs sm:text-sm">Feb</div>
        </div>
      </div>
      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-[#4F4F4F] text-sm sm:text-base">
          <div className="flex items-center gap-1 sm:gap-2">
            <Calendar className="w-4 h-4 sm:w-6 sm:h-6 text-[#FF9F0D]" />
            <span>Feb 14, 2022</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <MessageCircle className="w-4 h-4 sm:w-6 sm:h-6 text-[#FF9F0D]" />
            <span>3</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <UserCircle className="w-4 h-4 sm:w-6 sm:h-6 text-[#FF9F0D]" />
            <span>Admin</span>
          </div>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#333333] font-helvetica">
          Traditional Soft Pretzels with Sweet Beer Cheese
        </h2>
        <p className="text-sm sm:text-base text-[#4F4F4F] leading-relaxed">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat
        </p>
        <button className="flex items-center justify-center w-full sm:w-auto gap-2 px-4 sm:px-8 py-2.5 sm:py-3.5 text-sm sm:text-base text-[#FF9F0D] border border-[#FF9F0D] rounded-md hover:bg-[#FF9F0D] hover:text-white transition-colors">
          Read More
          <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      </div>
    </Card>
  )
}

