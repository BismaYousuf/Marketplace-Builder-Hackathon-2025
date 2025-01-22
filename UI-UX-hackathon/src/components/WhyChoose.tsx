
import { SandwichIcon as Hamburger, Cookie, Wine } from 'lucide-react'
import Image from 'next/image'

export default async function WhyChooseUs() {
//   const res = await client.fetch(
//   "*[_type == 'landingpage'][0].section[1]{'orangefoodHeading': orangefoodHeading, 'foodHeading': foodHeading, 'foodsubhead': foodsubhead, 'foodcategorycards': foodcategorycards[]{'foodcardimg': foodcardimg.asset->url, 'fooddis': fooddis, 'foodtitle': foodtitle}}"
//  );
   
 
  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24 mt-0">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left Column - Image Grid */}
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="col-span-2 sm:col-span-1">
              <Image
                src="/why 1.png"
                alt="Food presentation"
                width={362}
                height={356}
                className="w-full h-[200px] sm:h-[356px] object-cover rounded-lg"
              />
            </div>
            <div className="hidden sm:block sm:mt-12 lg:mt-24">
              <Image
                src="/why 2.png"
                alt="Food presentation"
                width={281}
                height={231}
                className="w-full h-[150px] sm:h-[231px] object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1">
              <Image
                src="/why 3.png"
                alt="Food presentation"
                width={244}
                height={306}
                className="w-full h-[200px] sm:h-[306px] object-cover rounded-lg"
              />
            </div>
            <div className="grid gap-4">
              <Image
                src="/why 4.png"
                alt="Food presentation"
                width={221}
                height={226}
                className="w-full h-[150px] sm:h-[226px] object-cover rounded-lg"
              />
              <div className="hidden sm:grid grid-cols-2 sm:grid-cols-1 gap-4">
                <Image
                  src="/why 5.png"
                  alt="Food presentation"
                  width={161}
                  height={168}
                  className="w-full h-[100px] sm:h-[168px] object-cover rounded-lg"
                />
                <Image
                  src="/why 6.png"
                  alt="Food presentation"
                  width={161}
                  height={166}
                  className="w-full h-[100px] sm:h-[166px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <span className="font-['Great_Vibes'] text-[#FF9F0D] text-2xl sm:text-3xl">Why Choose us</span>
              <h2 className="text-[#FF9F0D] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Extra ordinary taste And Experienced
              </h2>
              <p className="text-white text-sm sm:text-base leading-relaxed">
              We stand out for our extraordinary taste and exceptional quality. With years of experience, our skilled team ensures every dish is crafted to perfection, delivering flavors that leave a lasting impression. We are committed to using the finest ingredients and serving meals that are fresh, fast, and always delicious, making your dining experience truly unforgettable.
              </p>
            </div>

            {/* Service Icons */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {[
                { icon: Hamburger, label: "Fast Food" },
                { icon: Cookie, label: "Lunch" },
                { icon: Wine, label: "Dinner" },
              ].map(({ icon: Icon, label }, index) => (
                <div
                  key={index}
                  className="bg-[#FF9F0D] p-3 sm:p-4 lg:p-6 rounded-lg flex flex-col items-center justify-center space-y-2 sm:space-y-4"
                >
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                  <span className="text-white text-xs sm:text-sm lg:text-lg text-center">{label}</span>
                </div>
              ))}
            </div>

            {/* Experience Box */}
            <div className="bg-white rounded-lg flex items-center p-4 sm:p-6 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#FF9F0D] rounded-l-lg" />
              <div className="flex items-baseline gap-2 sm:gap-4">
                <span className="text-[#FF9F0D] text-3xl sm:text-4xl lg:text-5xl font-bold">30+</span>
                <div className="space-y-0 sm:space-y-1">
                  <p className="text-sm sm:text-lg lg:text-xl text-black">Years of</p>
                  <p className="text-base sm:text-xl lg:text-2xl font-bold text-black">Experienced</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

