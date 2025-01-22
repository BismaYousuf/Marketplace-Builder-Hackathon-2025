import Image from 'next/image'

export default function StatsSection() {
  return (
    <section className="relative w-full bg-[url('/Clients (1).png')] bg-cover bg-center py-24">
     <div 
        className="absolute inset-0 bg-cover bg-center w-full h-full"
        style={{ backgroundImage: "url('/Clients (1).png')" }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <div className="absolute inset-0 bg-black/85" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Professional Chefs */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 rounded-full p-4">
              <Image src="/clients/Group.png" alt="Chef Hat" width={120} height={120} className="text-white" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">Professional Chefs</h3>
            <p className="text-4xl font-bold text-white">420</p>
          </div>

          {/* Items of Food */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 rounded-full p-4">
              <Image src="/clients/Group (1).png" alt="Food Items" width={120} height={120} className="text-white" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">Items Of Food</h3>
            <p className="text-4xl font-bold text-white">320</p>
          </div>

          {/* Years of Experience */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 rounded-full p-4">
              <Image src="/clients/Group (2).png" alt="Experience" width={120} height={120} className="text-white" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">Years Of Experienced</h3>
            <p className="text-4xl font-bold text-white">30+</p>
          </div>

          {/* Happy Customers */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 rounded-full p-4">
              <Image src="/clients/Group (3).png" alt="Happy Customers" width={120} height={120} className="text-white" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">Happy Customers</h3>
            <p className="text-4xl font-bold text-white">220</p>
          </div>
        </div>
      </div>
    </section>
  )
}


