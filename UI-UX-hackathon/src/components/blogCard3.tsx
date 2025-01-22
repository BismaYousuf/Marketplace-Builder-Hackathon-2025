import Image from "next/image"
import { Calendar, MessageCircle, UserCircle, ArrowUpRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function BlogCard3() {
  return (
    <Card className="relative w-full overflow-hidden bg-white">
      <div className="relative aspect-[16/9] sm:h-[520px]">
        <Image
          src="/blog2.png"
          alt="Blog featured image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute left-4 top-4 sm:left-6 sm:top-6 bg-[#FF9F0D] text-white p-2 rounded-md flex flex-col items-center justify-center">
          <span className="text-base sm:text-lg font-bold">14</span>
          <span className="text-xs sm:text-sm">Feb</span>
        </div>
      </div>
      <CardContent className="p-4 sm:p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-[#4F4F4F] mb-4">
          <div className="flex items-center gap-1 sm:gap-2">
            <Calendar className="w-4 h-4 sm:w-6 sm:h-6 text-[#FF9F0D]" />
            <span className="text-sm sm:text-base">Feb 14, 2022</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <MessageCircle className="w-4 h-4 sm:w-6 sm:h-6 text-[#FF9F0D]" />
            <span className="text-sm sm:text-base">3</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <UserCircle className="w-4 h-4 sm:w-6 sm:h-6 text-[#FF9F0D]" />
            <span className="text-sm sm:text-base">Admin</span>
          </div>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#333333] mb-3 sm:mb-4 font-helvetica">
          10 Reasons To Do A Digital Detox Challenge
        </h2>
        <p className="text-sm sm:text-base text-[#4F4F4F] mb-4 sm:mb-6 font-inter">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
        </p>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-8 py-2.5 sm:py-3.5 border border-[#FF9F0D] text-[#FF9F0D] rounded-md hover:bg-[#FF9F0D] hover:text-white transition-colors text-sm sm:text-base">
          <span>Read More</span>
          <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      </CardContent>
    </Card>
  )
}

