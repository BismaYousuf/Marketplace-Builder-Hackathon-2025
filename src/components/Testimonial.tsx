"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Alamin Hasan",
    role: "Food Specialist",
    image: "/man.png",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.",
    rating: 4,
  },
  {
    name: "Sarah Johnson",
    role: "Restaurant Owner",
    image: "/prince.png",
    quote:
      "Exceptional service and quality! The attention to detail in every dish is remarkable. Our customers always leave satisfied and eager to return.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Food Critic",
    image: "/Chef 1.png",
    quote:
      "A culinary delight that never disappoints. The fusion of flavors and innovative presentations make each visit a memorable experience.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full mx-auto px-4 py-12 sm:py-16 bg-black">
      {/* Decorative heading */}
      <span className="block font-['Great_Vibes'] text-xl sm:text-3xl text-[#FF9F0D] ml-[100px]">Testimonials</span>

      {/* Main heading */}
      <h2 className="text-2xl sm:text-4xl ml-[100px] md:text-5xl font-bold text-white mt-2 sm:mt-4 mb-10">
        What our clients are saying
      </h2>

      {/* Testimonial card */}
      <div className="relative mt-[120px]">
        <Card className="relative bg-white shadow-lg p-6 sm:p-8 pt-20 sm:pt-24 mx-auto max-w-md sm:max-w-4xl">
          {/* Profile image */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white">
              <Image
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={`Profile of ${testimonials[currentIndex].name}`}
                width={96}
                height={96}
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 96px"
              />
            </div>
          </div>

          {/* Quote icon */}
          <div className="absolute top-16 sm:top-20 left-1/2 transform -translate-x-1/2">
            <Image
              className="text-[#FF9F0D] text-4xl"
              src="/Quotes.png"
              alt="Quotes"
              width={40}
              height={40}
              sizes="40px"
            />
          </div>

          {/* Testimonial text */}
          <p className="text-[#4F4F4F] text-sm sm:text-base text-center leading-relaxed max-w-xs sm:max-w-2xl mx-auto mt-6 sm:mt-8 mb-6">
            {testimonials[currentIndex].quote}
          </p>

          {/* Rating stars */}
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-4 h-4 sm:w-6 sm:h-6 ${
                  star <= testimonials[currentIndex].rating
                    ? "fill-[#FF9F0D] text-[#FF9F0D]"
                    : "fill-[#E0E0E0] text-[#E0E0E0]"
                }`}
              />
            ))}
          </div>

          {/* Author info */}
          <div className="text-center">
            <h3 className="text-lg sm:text-2xl font-bold text-[#333333] mb-1 sm:mb-2">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-[#828282] text-xs sm:text-sm">{testimonials[currentIndex].role}</p>
          </div>
        </Card>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                i === currentIndex ? "bg-[#FF9F0D]" : "bg-[#FF9F0D]/30"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Decorative background image */}
        <div className="absolute right-0 bottom-0 w-24 h-24 sm:w-1/3 sm:h-1/2 opacity-20 pointer-events-none">
          <Image
            src="/flower.png"
            alt="Decorative"
            width={300}
            height={300}
            className="object-cover transform rotate-12"
          />
        </div>
      </div>
    </div>
  )
}

