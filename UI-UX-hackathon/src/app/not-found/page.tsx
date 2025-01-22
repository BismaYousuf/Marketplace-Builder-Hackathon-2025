import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function NotFound() {
  return (
    <>

    <div className="relative w-full h-[410px] bg-black m-auto">
        {/* Background Image */}
        <Image
          src={'/menubg.png'}
          alt={'Menu Background'}
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
        />

        {/* Heading on Top of Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4 sm:px-6 md:px-8">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
            404 Error
          </h1>

          {/* Paragraph with Hover Effect */}
          <p className="text-sm sm:text-base text-white flex items-center space-x-2 group">
          <Link href={"/"} ><span className="transition-colors duration-300">Home</span></Link>  
            <ChevronRight
              size={16}
              className="text-white transition-colors duration-300 group-hover:text-orange-500"
            />
            <span className="transition-colors duration-300 text-orange-500">404</span>
          </p>
        </div>
      </div>

    <main className="min-h-screen flex flex-col items-center justify-center px-4 -mt-[120px] -mb-[120px]">
      <div className="max-w-[630px] text-center">
        <h1 className="text-[96px] font-bold text-[#FF9F0D] leading-[104px] mb-6">
          404
        </h1>
        <h2 className="text-[32px] font-bold text-gray-800 leading-10 mb-6">
          Oops! Look likes something going wrong
        </h2>
        <p className="text-lg text-gray-600 leading-[26px] mb-8 max-w-[490px] mx-auto">
          Page Cannot be found! we&apos;ll have it figured out in no time.
          Meanwhile, check out these fresh ideas:
        </p>
        <Button
          asChild
          className="bg-[#FF9F0D] hover:bg-[#FF9F0D]/90 text-white font-bold px-12 py-4 h-[58px] text-lg"
        >
          <Link href="/">Go to home</Link>
        </Button>
      </div>
    </main>
    </>
  )
}

