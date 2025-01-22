//src\app\faq\page.tsx
'use client'

import { Disclosure, Transition } from '@headlessui/react'
import { Plus, Minus, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const faqs = [
  {
    question: "How we serve food?",
    answer: "Use clean and stylish plates, bowls, or food packaging. Arrange food attractively, balancing colors, textures, and portions Garnish dishes with fresh herbs, sauces, or edible flowers for an elegant touch"
  },
  {
    question: "How can we get in touch with you?",
    answer: "We are here to help with any questions, concerns, or feedback you may have! Whether you are looking for product information, need assistance with an order, or want to collaborate, feel free to reach out. Email: support@foodtuck.com, Phone: +92 343 390000"
  },
  {
    question: "How is our food quality?",
    answer: "At FoodTuck, we pride ourselves on delivering food that stands out in taste, freshness, and presentation."
  },
  {
    question: "What will be delivered? And When?",
    answer: "We understand the importance of timely delivery. Here's our delivery timeline. Local Deliveries: Orders typically arrive within 24-48 hours.Special Orders/Custom Products: Delivered within 3-5 business days, depending on the customization.Delivery Zones: We deliver to all zones within our coverage area. Use our delivery zone checker at checkout for specific timelines."
  },
  {
    question: "How do we give home delivery?",
    answer: "Enjoy fresh, high-quality food and restaurant supplies delivered straight to your doorstep! At FoodTuck,"
  },
  {
    question: "Is this restaurant 24 hours open?",
    answer: "At FoodTuck, we strive to meet your needs with convenient operating hours. While we’re not open 24 hours, we ensure our services are available during prime times:"
  }
]

export default function FAQ() {
  return (
<>
<div className="relative w-full h-[410px] bg-black m-auto">
        {/* Background Image */}
        <Image
          src={'/menubg.png'}
          alt={'Menu Background'}
        //   width={1920}
        //   height={410}
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
        />

        {/* Heading on Top of Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4 sm:px-6 md:px-8">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
            Faq Page
          </h1>

          {/* Paragraph with Hover Effect */}
          <p className="text-sm sm:text-base text-white flex items-center space-x-2 group">
          <Link href={"/"} ><span className="transition-colors duration-300">Home</span></Link>  
            <ChevronRight
              size={16}
              className="text-white transition-colors duration-300 group-hover:text-orange-500"
            />
            <span className="transition-colors duration-300 text-orange-500">Faq</span>
          </p>
        </div>
      </div>

    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-[48px] font-bold text-[#333333] mb-4 font-helvetica">
          Questions Looks Here
        </h2>
        <p className="text-[#4F4F4F] max-w-3xl mx-auto">
        FoodTuck is an online platform offering high-quality food and restaurant supplies, tailored for chefs, restaurants, and home-based food entrepreneurs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <div className="bg-[#FAF7F2] rounded-lg">
                <Disclosure.Button className="w-full px-6 py-6 flex justify-between items-center">
                  <span className="text-lg font-bold text-[#333333] text-left">
                    {faq.question}
                  </span>
                  {open ? (
                    <Minus className="h-6 w-6 text-[#333333]" />
                  ) : (
                    <Plus className="h-6 w-6 text-[#333333]" />
                  )}
                </Disclosure.Button>

                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-6 pb-6 text-[#4F4F4F]">
                    {faq.answer}
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  
  </>
  )
}

