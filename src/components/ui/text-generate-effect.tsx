"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/components/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (scope.current) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration || 1,
          delay: stagger(0.1), // Plus rapide
        }
      );
    }
  }, [animate, filter, duration]);

  return (
    <div className={cn("font-medium", className)}>
      <div className="mt-2">
        <div className="text-white text-xl leading-snug tracking-wide">
          <motion.div ref={scope}>
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                className="text-white opacity-0"
                style={{
                  filter: filter ? "blur(8px)" : "none",
                  display: "inline-block", // Pour s'assurer que les mots sont alignés correctement
                  marginRight: "0.25rem", // Espace entre les mots
                }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
