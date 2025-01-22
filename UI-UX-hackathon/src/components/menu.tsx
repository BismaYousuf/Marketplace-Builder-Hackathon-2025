import { Coffee } from 'lucide-react';
import Image from 'next/image';

export default function MenuSection() {
  const menuItems = [
    {
      name: "Optic Big Breakfast Combo Menu",
      description: "Toasted French bread topped with romano, cheddar",
      calories: "560 CAL",
      price: "32$"
    },
    {
      name: "Cashew Chicken With Stir-Fry",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      calories: "700 CAL",
      price: "43$"
    },
    {
      name: "Vegetables & Green Salad",
      description: "Ground cumin, avocados, peeled and cubed",
      calories: "1000 CAL",
      price: "14$"
    },
    {
      name: "Spicy Vegan Potato Curry",
      description: "Spreadable cream cheese, crumbled blue cheese",
      calories: "560 CAL",
      price: "35$"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-[1320px]">
      <div className="flex items-center gap-2 mb-8">
        <Coffee className="w-6 h-6 text-[#FF9F0D]" />
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Main Course</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Menu Items */}
        <div className="space-y-8">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b border-dashed border-gray-200 pb-8">
              <div className="flex justify-between items-start">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
                <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">{item.price}</span>
              </div>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <span className="text-gray-400 text-sm">{item.calories}</span>
            </div>
          ))}
        </div>
        
        {/* Image Section */}
        <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden mb-8 lg:mb-0">
  <Image 
    src="/menupic2.png" 
    alt="Featured dish" 
    layout="responsive"
    width={448}
    height={626}
    className="object-cover w-full h-auto sm:w-[50px] sm:h-[50px] lg:w-full lg:h-auto"
  />
</div>

      </div>
    </div>
  );
}
