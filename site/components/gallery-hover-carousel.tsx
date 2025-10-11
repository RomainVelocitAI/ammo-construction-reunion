"use client";

import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface GalleryHoverCarouselItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

export default function GalleryHoverCarousel({
  heading = "Featured Projects",
  subtitle,
  items = [],
}: {
  heading?: string;
  subtitle?: string;
  items?: GalleryHoverCarouselItem[];
}) {

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-12 md:mb-16 lg:mb-20 text-center">
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-amber-600/10 to-yellow-600/10 backdrop-blur-sm border border-amber-600/40 rounded-full text-amber-600 text-sm font-bold mb-6 uppercase tracking-wider">
            Notre Méthodologie
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4 max-w-3xl mx-auto">
            {heading}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Grid 2x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {items.slice(0, 4).map((item) => (
            <Link key={item.id} href={item.url} className="group block relative w-full h-[300px] md:h-[400px]">
              <Card className="overflow-hidden rounded-xl h-full w-full rounded-3xl">
                {/* Image */}
                <div className="relative h-full w-full transition-all duration-500 group-hover:h-1/2">
                  <Image
                    width={600}
                    height={400}
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center"
                  />
                  {/* Fade overlay at bottom */}
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Text Section */}
                <div className="absolute bottom-0 left-0 w-full px-6 py-4 transition-all duration-500 group-hover:h-1/2 group-hover:flex flex-col justify-center bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100">
                  <h3 className="text-xl font-semibold md:text-2xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base line-clamp-3">
                    {item.summary}
                  </p>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute bottom-4 right-4 border border-gray-200 dark:border-gray-800 hover:-rotate-45 transition-all duration-500 rounded-full mt-2 px-0 flex items-center gap-1 text-primary hover:text-primary/80"
                  >
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
