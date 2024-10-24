"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <Image
          src={images[selectedImage]}
          alt="Product image"
          fill
          className="object-cover"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={image}
              className={cn(
                "relative aspect-square overflow-hidden rounded-lg border-2",
                selectedImage === index
                  ? "border-primary"
                  : "border-transparent"
              )}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image}
                alt={`Product image ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}