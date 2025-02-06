import {  GitCompareIcon as GitDiff, Heart, ShoppingBag } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: "Fresh Lime",
    price: 38.0,
    originalPrice: 45.0,
    image: "/Mask Group.png",
  },
  {
    id: 2,
    name: "Chocolate Muffin",
    price: 28.0,
    image: "/butter.png",
  },
  {
    id: 3,
    name: "Burger",
    price: 21.0,
    image: "/menupic2.png",
  },
  {
    id: 4,
    name: "Fresh Lime",
    price: 38.0,
    originalPrice: 45.0,
    image: "/sd3.png",
  },
];

export default function SimilarProducts() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-[1320px]">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Similar Products</h2>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <div className="flex gap-2 mb-4">
          <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 h-10 w-10 border-none bg-[#FAF7F2] hover:bg-[#FAF7F2]/80" />
          <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 h-10 w-10 border-none bg-[#FF9F0D] hover:bg-[#FF9F0D]/80 text-white" />
        </div>
        <CarouselContent className="-ml-4">
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
              <Card className="border-none">
                <CardContent className="p-0">
                  <div className="relative group">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={312}
                      height={330}
                      className="w-full aspect-[312/267] object-cover rounded-md"
                    />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="icon" variant="secondary" className="h-8 w-8 bg-white hover:bg-white/90">
                        <GitDiff className="h-4 w-4 text-[#FF9F0D]" />
                      </Button>
                      <Button size="icon" variant="secondary" className="h-8 w-8 bg-[#FF9F0D] hover:bg-[#FF9F0D]/90">
                        <ShoppingBag className="h-4 w-4 text-white" />
                      </Button>
                      <Button size="icon" variant="secondary" className="h-8 w-8 bg-white hover:bg-white/90">
                        <Heart className="h-4 w-4 text-[#FF9F0D]" />
                      </Button>
                    </div>
                  </div>
                  <div className="pt-4">
                    <h3 className="font-bold text-gray-800 mb-2">{product.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[#FF9F0D]">${product.price.toFixed(2)}</span>
                      {product.originalPrice && (
                        <>
                          <span className="w-px h-4 bg-gray-300" />
                          <span className="text-gray-400 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
