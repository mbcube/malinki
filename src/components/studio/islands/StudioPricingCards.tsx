import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Cal from "@/components/studio/islands/cal"

interface PricingCard {
  title: string
  price?: string
  description?: string
  ctaLabel: string
  ctaHref?: string
}

interface Props {
  cards: PricingCard[]
}

function CarouselNavigation() {
  const { scrollPrev, scrollNext } = useCarousel()

  return (
    <div className="flex items-center justify-center gap-2 mt-6 md:hidden">
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

function PriceCard({ card }: { card: PricingCard }) {
  return (
    <div className="bg-white rounded-[2rem] p-4 md:p-8 flex flex-col gap-8 h-[20rem] md:h-[25rem]">
      <h3 className="text-[1.5rem] md:text-[2rem] font-bold leading-none uppercase text-[#083D45]">
        {card.title}
      </h3>
      <div className="flex-1" />
      <div className="flex flex-col gap-8 items-end">
        <div className="w-full border-t border-[#083D45]/20" />
        {card.price ? (
          <p className="text-[2rem] md:text-[4rem] font-medium leading-none uppercase text-[#083D45] text-right w-full">
            {card.price}
          </p>
        ) : (
          <p className="text-[1.125rem] md:text-[1.25rem] font-medium leading-[1.2] text-[#083D45] text-right w-full">
            {card.description}
          </p>
        )}
      </div>
      {card.ctaHref ? (
        <a
          href={card.ctaHref}
          className="text-[1rem] font-semibold leading-none text-white bg-[#083D45] px-8 py-5 rounded-lg text-center hover:bg-[#083D45]/80 transition-colors"
        >
          {card.ctaLabel}
        </a>
      ) : (
        <Cal
          className="text-[1rem] font-semibold leading-none text-white bg-[#083D45] px-8 py-5 rounded-lg text-center hover:bg-[#083D45]/80 transition-colors"
        >
          {card.ctaLabel}
        </Cal>
      )}
    </div>
  )
}

export default function StudioPricingCards({ cards }: Props) {
  return (
    <Carousel
      opts={{ align: "start", loop: false }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {cards.map((card, index) => (
          <CarouselItem
            key={index}
            className="pl-4 basis-[82%] md:basis-1/3  "
          >
            <PriceCard card={card}  />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNavigation />
    </Carousel>
  )
}
