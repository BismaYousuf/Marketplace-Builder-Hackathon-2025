import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function RestaurantProcess() {
  return (
    <section className="relative w-full min-h-[558px] bg-[#1A1A1A]">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-[458px] bg-cover bg-center"
        style={{
          backgroundImage: `url('/midbg.png')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 py-16 flex flex-col justify-center items-center lg:items-end lg:text-right">
        {/* Decorative heading */}
        <span className="font-['Great_Vibes'] text-xl sm:text-3xl text-[#FF9F0D] mb-4">
          Restaurant Active Process
        </span>

        {/* Main heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl text-center lg:text-right">
          <span className="text-[#FF9F0D]">We</span> Document Every Food Bean Process until it is saved
        </h2>

        {/* Description */}
        <p className="text-white/90 max-w-xl sm:max-w-2xl mb-8 text-center lg:text-right">
        We meticulously document every step of our food preparation process, from sourcing the finest ingredients to the final dish served on your table. Each food item is carefully tracked and maintained to ensure the highest quality, freshness, and consistency in every meal. We take pride in the attention to detail, ensuring every ingredient is handled with care until its perfectly served and saved for your enjoyment.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:justify-end">
          <Button
            variant="outline"
            className="border-[#FF9F0D] bg-transparent text-white hover:bg-[#FF9F0D] hover:text-white rounded-full px-6 py-3"
          >
            Read More
          </Button>

          <button className="flex items-center gap-4 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF9F0D] flex items-center justify-center group-hover:bg-[#FF9F0D]/90 transition-colors">
              <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white" />
            </div>
            <span className="text-white font-bold text-sm sm:text-base">
              Play Video
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
