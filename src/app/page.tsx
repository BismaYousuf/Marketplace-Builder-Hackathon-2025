import AboutUs from "@/components/AboutUs";
import Clients from "@/components/Clients";
import FoodCategory from "@/components/FoodCategory";
import MenuSection from "@/components/OurMenu";
import WhyChooseUs from "@/components/WhyChoose";
import ChefCard from "@/components/ChefCards";
import Testimonials from "@/components/Testimonial";
import RestaurantProcess from "@/components/Resturent";
import BlogSection from "@/components/blog";
import { HeroSection } from "@/components/Hero";


export default function Home() {
  return (
   <div>
  <HeroSection/>
   <AboutUs/>
    <FoodCategory/>
   <WhyChooseUs/>
   <Clients/>
   <MenuSection/>
   <ChefCard/>
   <Testimonials/>
   <RestaurantProcess/>
   <BlogSection/> 
   </div>
  );
}
