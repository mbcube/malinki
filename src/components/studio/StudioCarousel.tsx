import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"

import carousel1 from "@/images/studio/carousel/carousel-1.jpg"
import carousel2 from "@/images/studio/carousel/carousel-2.jpg"
import carousel3 from "@/images/studio/carousel/carousel-3.jpg"
import Autoplay from "embla-carousel-autoplay"

const images = [
  { src: carousel1.src, alt: "Studio Malinki - 1" },
  { src: carousel2.src, alt: "Studio Malinki - 2" },
  { src: carousel3.src, alt: "Studio Malinki - 3" },
]

function CarouselNavigation() {
  const { scrollPrev, scrollNext } = useCarousel()

  return (
    <div className="flex items-center justify-center gap-3 mt-6">
      <button
        onClick={scrollPrev}
        className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-[#083D45] hover:bg-white/90 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        onClick={scrollNext}
        className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-[#083D45] hover:bg-white/90 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  )
}

export default function StudioCarousel() {
  return (
    <section id="galerie-photo" className="w-full py-8 md:py-12 ">
      <Carousel
        opts={{ align: "center", loop: true }}
        plugins={[Autoplay({
          delay: 4000,
        })]}
        className="w-full "
      >
        <CarouselContent className="-ml-4">
          {images.map((image, index) => (
            <CarouselItem
              key={index}

              className="pl-4 basis-[85%] md:basis-[80%] lg:basis-[75%]  "
            >
              <div className="overflow-hidden rounded-3xl ">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover aspect-[16/9]"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation />
      </Carousel>
    </section>
  )
}
