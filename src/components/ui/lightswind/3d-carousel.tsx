"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

interface CarouselItem {
  id: number;
  title: string;
  brand: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

interface ImageConfig {
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
}

interface Carousel3DProps {
  items: CarouselItem[];
  cardHeight?: number;
  imageConfig?: ImageConfig;
  autoSlide?: boolean;
  autoSlideDelay?: number;
}

const Carousel3D: React.FC<Carousel3DProps> = ({
  items,
  cardHeight = 500,
  imageConfig,
  autoSlide = true,
  autoSlideDelay = 3000,
}) => {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!autoSlide || isHovering) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, autoSlideDelay);
    return () => clearInterval(interval);
  }, [items.length, autoSlide, autoSlideDelay, isHovering]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setActive((prev) => (prev + 1) % items.length);
    } else if (isRightSwipe) {
      setActive((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  const getCardAnimationClass = (index: number) => {
    if (index === active) return "scale-100 opacity-100 z-20";
    if (index === (active + 1) % items.length)
      return "translate-x-[40%] scale-95 opacity-60 z-10";
    if (index === (active - 1 + items.length) % items.length)
      return "translate-x-[-40%] scale-95 opacity-60 z-10";
    return "scale-90 opacity-0";
  };

  return (
    <section
      id="carousel3d"
      className="bg-transparent min-w-full mx-auto flex items-center justify-center"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 min-w-[350px] md:min-w-[1000px] max-w-7xl">
        <div
          className="relative overflow-hidden h-[550px]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          ref={carouselRef}
        >
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`absolute top-0 w-full max-w-md transform transition-all duration-500 ${getCardAnimationClass(
                  index
                )}`}
              >
                <Card
                  className={`overflow-hidden bg-card border-border h-[${cardHeight}px] border shadow-lg 
                hover:shadow-xl flex flex-col transition-all duration-300`}
                >
                  <div
                    className="relative bg-black p-0 flex items-center justify-center h-60 overflow-hidden"
                    style={{
                      backgroundImage: `url(${item.imageUrl})`,
                      backgroundSize: imageConfig?.backgroundSize || "cover",
                      backgroundPosition: imageConfig?.backgroundPosition || "center",
                      backgroundRepeat: imageConfig?.backgroundRepeat || "no-repeat",
                    }}
                  />

                  <CardContent className="p-6 flex flex-col flex-grow bg-card">
                    <h3 className="text-xl font-bold mb-1 text-card-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-medium mb-2">
                      {item.brand}
                    </p>
                    <p className="text-muted-foreground text-sm flex-grow">
                      {item.description}
                    </p>

                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs animate-pulse-slow border border-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={item.link}
                        className="text-muted-foreground flex items-center hover:text-card-foreground transition-colors relative group"
                        onClick={() => {
                          if (item.link.startsWith("/")) {
                            window.scrollTo(0, 0);
                          }
                        }}
                      >
                        <span className="relative z-10">Learn more</span>
                        <ArrowRight className="ml-2 w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-muted-foreground transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {!isMobile && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center text-muted-foreground hover:bg-card hover:text-card-foreground z-30 shadow-lg transition-all hover:scale-110 border border-border"
                onClick={() =>
                  setActive((prev) => (prev - 1 + items.length) % items.length)
                }
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center text-muted-foreground hover:bg-card hover:text-card-foreground z-30 shadow-lg transition-all hover:scale-110 border border-border"
                onClick={() => setActive((prev) => (prev + 1) % items.length)}
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-30">
            {items.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 border border-border ${
                  active === idx
                    ? "bg-card-foreground w-5"
                    : "bg-muted hover:bg-muted-foreground"
                }`}
                onClick={() => setActive(idx)}
                aria-label={`Go to item ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel3D;