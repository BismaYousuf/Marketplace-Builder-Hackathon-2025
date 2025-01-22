//src\app\aboutSection\page.tsx
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Play, Star } from 'lucide-react'
import WhyChooseUs from "@/components/WhyChooseUs"
import { TeamMemberCard } from "@/components/teamMemberCards"
import { Card } from "@/components/ui/card"
import MenuSection from "@/components/menuSection"
import Link from "next/link"

export default function AboutSection() {
  return (
    <> 
      <div className="relative w-full h-[300px] sm:h-[410px] bg-black">
        <Image
          src={'/menubg.png'}
          alt={'Menu Background'}
          layout="fill"
          objectFit="cover"
          priority
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-white">About Us</h1>
          <p className="text-sm sm:text-base text-white flex items-center space-x-2 group">
          <Link href={"/"} ><span className="transition-colors duration-300">Home</span></Link>  
            <ChevronRight size={16} className="text-white transition-colors duration-300 group-hover:text-orange-500" />
            <span className="transition-colors duration-300 text-orange-500">About</span>
          </p>
        </div>
      </div>

      <section className="container mx-auto px-4 py-8 sm:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="col-span-1 space-y-4">
              <Image
                src="/blog1.png"
                alt="Fresh tacos"
                width={336}
                height={536}
                className="rounded-md object-cover h-[300px] sm:h-[536px] w-full"
              />
            </div>
            <div className="col-span-1 space-y-4">
              <Image
                src="/why 3.png"
                alt="Breaded food with dip"
                width={309}
                height={271}
                className="rounded-md object-cover h-[150px] sm:h-[271px] w-full"
              />
              <Image
                src="/Mask Group.png"
                alt="Fresh salad"
                width={309}
                height={382}
                className="rounded-md object-cover h-[200px] sm:h-[382px] w-full"
              />
            </div>
          </div>

          <div className="space-y-6 lg:pl-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[#FF9F0D] font-miniver text-base sm:text-lg">About us</span>
                <div className="w-8 h-[1px] bg-[#FF9F0D]" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                Food is an important part <br className="hidden sm:inline" />
                of a balanced Diet
              </h2>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
              pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
              augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
              vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-[#FF9F0D] hover:bg-[#FF9F0D]/90 text-white px-6 sm:px-12"
              >
                Show more
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-gray-800"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FF9F0D] flex items-center justify-center mr-2">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-current" />
                </div>
                Watch video
              </Button>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs/>

      <div className="flex flex-wrap justify-center gap-6 px-4 sm:px-8 lg:px-[300px] my-8">
        <TeamMemberCard name={"Mark Henry"} role={"Owner"} imageUrl={"/teampic.png"}/>
        <TeamMemberCard name={"Lucky Helen"} role={"Chef"} imageUrl={"/teampic.png"}/>
        <TeamMemberCard name={"Moon Henry"} role={"Founder"} imageUrl={"/teampic.png"}/>
        <TeamMemberCard name={"Tom Monrow"} role={"Specialist"} imageUrl={"/teampic.png"}/>
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 py-8 sm:py-16">
        <span className="font-['Great_Vibes'] text-2xl sm:text-3xl text-[#FF9F0D]">Testimonials</span>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mt-4 mb-8 sm:mb-16">
          What our client are saying
        </h2>

        <div className="relative">
          <Card className="relative bg-white shadow-lg p-4 sm:p-8 pt-20 sm:pt-24 max-w-4xl mx-auto">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white">
                <Image
                  src="/man.png"
                  alt="Profile"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute top-12 sm:top-16 left-1/2 transform -translate-x-1/2">
              <Image className="text-[#FF9F0D] text-3xl sm:text-4xl -mt-[10px]" src={"/Quotes.png"} alt={"number"} width={48} height={48} />
            </div>

            <p className="text-[#4F4F4F] text-base sm:text-lg text-center max-w-2xl mx-auto mb-6 sm:mb-8 mt-[31px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>

            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 sm:w-6 sm:h-6 fill-[#FF9F0D] text-[#FF9F0D]"
                />
              ))}
              <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-[#E0E0E0] text-[#E0E0E0]" />
            </div>

            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-[#333333] mb-2">
                Alamin Hasan
              </h3>
              <p className="text-sm sm:text-base text-[#828282]">Food Specialist</p>
            </div>
          </Card>

          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {[1, 2, 3, 4].map((dot, i) => (
              <div
                key={dot}
                className={`w-2 h-2 rounded-full ${
                  i === 1 ? "bg-[#FF9F0D]" : "bg-[#FF9F0D]/30"
                }`}
              />
            ))}
          </div>

          <div className="absolute right-0 bottom-0 w-1/4 sm:w-1/3 h-1/3 sm:h-1/2 opacity-20 pointer-events-none">
            <Image
              src="/flower.png"
              alt="Decorative"
              layout="fill"
              objectFit="cover"
              className="transform rotate-12"
            />
          </div>
        </div>
      </div>

      <MenuSection/>
    </>
  )
}

