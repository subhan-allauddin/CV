"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

// ✅ Type definition for props
type CaseStudyCardProps = {
  category: string;
  color?: string;
  bgColor?: string;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
};

function CaseStudyCard({
  category,
  color ,        // default text color
  bgColor,         // default background color
  title,
  description,
  image,
  reverse = false,                 // default layout direction
}: CaseStudyCardProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={clsx(
        "flex flex-col sm:flex-row w-full gap-4",
        reverse && "sm:flex-row-reverse"
      )}
    >
      {/* Text Section */}
      <div className="flex flex-col w-full gap-4 p-2 sm:w-1/2 sm:p-4">
        <Link href="#">
          <span className={clsx(`p-1 w-20 text-center text-${color} bg-${bgColor} rounded-2xl text-xs sm:text-sm`, color, bgColor)}>
            {category}
          </span>
        </Link>
        <h1 className="text-lg font-bold tracking-wide text-black sm:text-xl font-raleway">
          {title}
        </h1>
        <p className="text-xs font-thin tracking-wide text-left text-gray-600 sm:text-sm font-ibm-plex-mono">
          {description}
        </p>
      </div>

      {/* Image Section */}
      <div className="flex items-center justify-center w-full p-2 sm:w-1/2 sm:p-4">
        <motion.img
          src={image}
          alt={`${title} image`}
          className="object-cover h-40 rounded-lg shadow-lg w-60 sm:h-56 sm:w-80"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { delay: 0.2 } },
          }}
        />
      </div>
    </motion.div>
  );
}

export default CaseStudyCard;
