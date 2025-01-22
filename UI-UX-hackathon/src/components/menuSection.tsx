"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MenuItem } from "./menuItem"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const menuCategories = ["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack"]

const menuItems = [
  {
    name: "Alder Grilled Chinook Salmon",
    description: "Toasted French bread topped with romano, cheddar",
    calories: 560,
    price: 32,
  },
  // Duplicate the item for demonstration
  {
    name: "Alder Grilled Chinook Salmon",
    description: "Toasted French bread topped with romano, cheddar",
    calories: 560,
    price: 32,
  },
  {
    name: "Alder Grilled Chinook Salmon",
    description: "Toasted French bread topped with romano, cheddar",
    calories: 560,
    price: 32,
  },
  {
    name: "Alder Grilled Chinook Salmon",
    description: "Toasted French bread topped with romano, cheddar",
    calories: 560,
    price: 32,
  },
  {
    name: "Alder Grilled Chinook Salmon",
    description: "Toasted French bread topped with romano, cheddar",
    calories: 560,
    price: 32,
  }, 
   {
    name: "Alder Grilled Chinook Salmon",
    description: "Toasted French bread topped with romano, cheddar",
    calories: 560,
    price: 32,
  },
]

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Breakfast")

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Food Menu
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Varius sed pharetra dictum neque massa congue
        </p>
      </div>

      <Tabs defaultValue="Breakfast" className="w-full mb-12">
        <TabsList className="w-full justify-center h-auto flex-wrap gap-2 bg-transparent">
          {menuCategories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="data-[state=active]:text-[#FF9F0D] data-[state=active]:border-b-2 data-[state=active]:border-[#FF9F0D] text-gray-600 text-lg px-4 py-2 rounded-none"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid md:grid-cols-2 gap-x-16">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            {...item}
            isHighlighted={index === 0 && activeCategory === "Breakfast"}
          />
        ))}
      </div>

      <div className="flex justify-center mt-12">
       <Link href={"/menu"}> <Button
          variant="outline"
          className="border-[#FF9F0D] text-[#FF9F0D] hover:bg-[#FF9F0D] hover:text-white"
        >
          View menu
        </Button> </Link>
      </div>
    </section>
  )
}

