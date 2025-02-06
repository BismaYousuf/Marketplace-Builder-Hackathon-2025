import { Coffee } from 'lucide-react';
import Image from 'next/image';

export default function StarterMenu() {
  const menuItems = [
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      calories: "560 CAL",
      price: "32"
    },
    {
      name: "Berries and creme tart",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      calories: "700 CAL",
      price: "43"
    },
    {
      name: "Tormentoso Bush Pizza Pintoage",
      description: "Ground cumin, avocados, peeled and cubed",
      calories: "1000 CAL",
      price: "14"
    },
    {
      name: "Spicy Vegan Potato Curry",
      description: "Spreadable cream cheese, crumbled blue cheese",
      calories: "560 CAL",
      price: "35"
    }
  ];

  return (
    <div className="bg-white min-h-screen p-8 text-black mt-[120px]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Coffee className="w-6 h-6 text-[#FF9F0D]" />
          <h1 className="text-3xl sm:text-4xl font-bold text-black">Starter Menu</h1>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <Image
              src="/menupic.png"
              alt="Starter menu dish"
              width={400}
              height={400}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
          <div className="md:w-2/3 space-y-8">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-dashed border-gray-700 pb-8">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">{item.name}</h2>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">{item.price}$</span>
                </div>
                <p className="text-gray-400 mb-2">{item.description}</p>
                <span className="text-gray-500 text-sm">{item.calories}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
