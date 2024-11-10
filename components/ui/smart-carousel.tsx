"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SmartCarouselProps {
  items: React.ReactNode[];
  slidesToShow?: number;
  autoplay?: boolean;
  autoplayInterval?: number;
}

export default function SmartCarousel({
  items,
  slidesToShow = 3,
  autoplay = false,
  autoplayInterval = 5000,
}: SmartCarouselProps) {
  const options: EmblaOptionsType = {
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
    loop: true,
    slidesToScroll: 1,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (autoplay && emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, autoplayInterval);
      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayInterval, emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_auto] min-w-0 pl-4 w-full sm:w-1/2 md:w-1/3"
              style={{ flex: `0 0 ${100 / slidesToShow}%` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 -left-12 -translate-y-1/2 rounded-lg bg-dental-teal/20 border-dental-teal hover:bg-dental-teal/40 hover:border-dental-teal"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 -right-12 -translate-y-1/2 rounded-lg bg-dental-teal/20 border-dental-teal hover:bg-dental-teal/40 hover:border-dental-teal"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      <div className="flex justify-center mt-4">
        {scrollSnaps.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className={`w-2 h-2 mx-1 p-0 rounded-full ${
              index === selectedIndex ? "bg-primary" : "bg-secondary"
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
