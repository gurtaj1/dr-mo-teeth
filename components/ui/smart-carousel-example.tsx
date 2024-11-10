"use client";

import SmartCarousel from "./smart-carousel";

export function SmartCarouselExample() {
  const imageUrls = [
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
  ];

  const cardContents = [
    <div key="1" className="p-4">
      <h3 className="text-lg font-semibold">Card 1</h3>
      <p>This is the content of card 1.</p>
    </div>,
    <div key="2" className="p-4">
      <h3 className="text-lg font-semibold">Card 2</h3>
      <p>This is the content of card 2.</p>
    </div>,
    <div key="3" className="p-4">
      <h3 className="text-lg font-semibold">Card 3</h3>
      <p>This is the content of card 3.</p>
    </div>,
    <div key="4" className="p-4">
      <h3 className="text-lg font-semibold">Card 4</h3>
      <p>This is the content of card 4.</p>
    </div>,
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Image Carousel</h2>
      <SmartCarousel items={imageUrls} slidesToShow={3} autoplay={true} />

      <h2 className="text-2xl font-bold">Custom Card Carousel</h2>
      <SmartCarousel items={cardContents} slidesToShow={2} />
    </div>
  );
}
