import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export async function HeroSection() {
 
  // const res = await client.fetch(
  //   "*[_type == 'landingpage'][0].section[0]{'herosubhead': herosubhead, 'heroorangeHeading': heroorangeHeading, 'heroHeading': heroHeading, 'heropara': heropara, 'heroImg': heroImg.asset->url}"
  // );
 
  // const { herosubhead, heroorangeHeading, heroHeading, heropara, heroImg } = res;
  
  return (
    <div className="relative bg-black min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-black/95 z-0">
        <Image
          src="/herobg.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-5"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side content */}
          <div className="w-full lg:w-1/2 text-white mb-12 lg:mb-0">
            <div className="relative">

              {/* Content */}
              <div className="pl-12">
                <p className="text-[#FF9F0D] font-['Great_Vibes'] text-3xl mb-4">Its Quick & Amusing!</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-[#FF9F0D]">The Art of speed</span><br />
                  food Quality
                </h1>
                <p className="mb-8 text-gray-300 max-w-md">
                At FoodTuck, we master the art of delivering delicious meals fast without compromising on quality. Enjoy fresh, flavorful dishes prepared with care, served in record time. Speed, taste, and excellence—every bite is a masterpiece!
                </p>
              <Link href={'/shop'}>
              <Button className="bg-[#FF9F0D] text-white px-8 py-3 rounded-full hover:bg-[#FF9F0D]/90 transition-colors">
                  See Menu
                </Button>
              </Link>
              </div>

              {/* Social icons */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-4">
               <Image src="/SC.png" alt="Facebook" width={24} height={500} />
              </div>
            </div>
          </div>

          {/* Right side image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-2xl mx-auto t-[102.49px] r-[355.99px]">
              <Image
                src="/food items.png"
                alt="Food plate"
                layout="fill"
                objectFit="contain"
                className="rounded-full"
              />
           
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

