"use client"; // Ensures it's treated as a client component

import Link from "next/link";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function CaseStudyCard({ category, color, bgColor, title, description, image, reverse }) {
  // Animation Controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation only triggers once
    threshold: 0.2,   // Trigger animation when 20% visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation Variants
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
      className={`flex flex-col md:flex-row w-full gap-8 ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      {/* Text Section */}
      <div className="w-full md:w-2/4 flex flex-col gap-5 p-4">
        <Link href="#">
          <span className={`p-2 text-${color} bg-${bgColor} w-[65px] rounded-2xl`}>
            {category}
          </span>
        </Link>
        <h1 className="text-2xl font-bold tracking-wide text-black font-raleway">
          {title}
        </h1>
        <p className="font-thin tracking-wide text-left text-gray-600 font-ibm-plex-mono">
          {description}
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-2/4 flex items-center justify-center p-4">
        <motion.img
          src={image}
          alt={`${title} image`}
          className="h-56 w-80 object-cover rounded-lg shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
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
