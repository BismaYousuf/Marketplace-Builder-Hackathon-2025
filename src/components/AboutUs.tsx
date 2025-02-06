import { Check } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  
  
  
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <span className="font-['Great_Vibes'] text-3xl text-[#FF9F0D]">About us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#FF9F0D] leading-tight">
              We Create the best foody product
            </h2>
            <p className="text-white text-lg leading-relaxed">
            We create exceptional food with the finest ingredients and unmatched flavor. Passionate about quality, we serve every dish with care, ensuring every bite is a delight. Enjoy the best in fast, flavorful dining!
            </p>
            <ul className="space-y-4">
              {[
                "Quality Ingredients: We use only the finest ingredients to craft every dish",
                "Passion for Flavor: Each meal is made with care, delivering exceptional taste in every bite.",
                "Fast and Fresh: Enjoy gourmet food quickly, without compromising on quality.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1">
                    <Check className="h-5 w-5 text-[#FF9F0D]" />
                  </span>
                  <span className="text-white text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-[#FF9F0D] text-white px-8 py-4 rounded-full hover:bg-[#e88f0c] transition-colors">
              Read More
            </button>
          </div>

          {/* Right Column - Image Grid */}
          <div className="space-y-4">
            <div className="w-full h-80 rounded-lg overflow-hidden">
              <Image
                src="/egg.png"
                alt="Featured dish"
                width={660}
                height={330}
                className="w-full h-full object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 660px"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-48 rounded-lg overflow-hidden">
                <Image
                  src="/kabab.png"
                  alt="Food presentation"
                  width={322}
                  height={149}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 322px"
                />
              </div>
              <div className="h-48 rounded-lg overflow-hidden">
                <Image
                  src="/bread.png"
                  alt="Delicious sandwich"
                  width={322}
                  height={149}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 322px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
