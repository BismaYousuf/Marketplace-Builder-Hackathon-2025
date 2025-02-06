"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";

interface Review {
  name: string;
  review: string;
}

interface ProductDescriptionProps {
  productId: string; // Unique ID for each product
}

export default function ProductDescription({ productId }: ProductDescriptionProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState("");
  const [customerName, setCustomerName] = useState("");

  // Load reviews for the specific product from localStorage
  useEffect(() => {
    const storedReviews = localStorage.getItem(`reviews_${productId}`);
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, [productId]);

  // Save reviews for the specific product to localStorage
  useEffect(() => {
    if (reviews.length > 0) {
      localStorage.setItem(`reviews_${productId}`, JSON.stringify(reviews));
    }
  }, [reviews, productId]);

  const handleAddReview = () => {
    if (customerName.trim() && newReview.trim()) {
      const updatedReviews = [...reviews, { name: customerName, review: newReview }];
      setReviews(updatedReviews);
      setCustomerName("");
      setNewReview("");
    } else {
      alert("Both name and review are required!");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-[1320px]">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="h-[50px]">
          <TabsTrigger
            value="description"
            className="px-6 data-[state=active]:bg-[#FF9F0D] data-[state=active]:text-white"
          >
            Description
          </TabsTrigger>
          <TabsTrigger value="reviews" className="px-6">
            Reviews ({reviews.length})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-8 space-y-8">
          <div className="space-y-6">
            <p className="text-gray-500 leading-relaxed">
              Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed
              purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis.
              Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor
              auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis
              dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem
              hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam,
              lacinia eu aliquam ac, aliquam in nisl.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="reviews">
          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Customer Reviews</h3>
            <ul className="space-y-3">
              {reviews.map((review, index) => (
                <li
                  key={index}
                  className="p-4 border rounded-md bg-gray-50 text-gray-700"
                >
                  <strong className="block text-gray-800">{review.name}</strong>
                  <span className="block">{review.review}</span>
                </li>
              ))}
              {reviews.length === 0 && (
                <li className="text-gray-500">No reviews yet. Be the first to add one!</li>
              )}
            </ul>

            <div className="space-y-4">
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Your Name"
                className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
              />
              <textarea
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                placeholder="Write your review here..."
                className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
                rows={4}
              />
              <button
                onClick={handleAddReview}
                className="bg-[#FF9F0D] hover:bg-[#FF9F0D]/90 text-white px-6 py-2 rounded-md"
              >
                Submit Review
              </button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
