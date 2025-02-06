import Image from "next/image"
import { Coffee, GraduationCap, User } from 'lucide-react'

export default function WhyChooseUs() {
  return (
    <section className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Why Choose us
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum.
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-96 mb-16">
        <Image
          src="/choosepic.png"
          alt="Delicious salmon salad"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Best Chef */}
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-gray-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Best Chef</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
            pellentesque bibendum non dui volutpat
          </p>
        </div>

        {/* 120 Item Food */}
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 flex items-center justify-center">
              <Coffee className="w-8 h-8 text-gray-800" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">120 Item food</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
            pellentesque bibendum non dui volutpat
          </p>
        </div>

        {/* Clean Environment */}
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 flex items-center justify-center">
              <User className="w-8 h-8 text-gray-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Clean Environment
          </h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
            pellentesque bibendum non dui volutpat
          </p>
        </div>
      </div>
    </section>
  )
}

