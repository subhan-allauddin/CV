"use client";

import Link from "next/link";
import clsx from "clsx";
import AOS from "aos";

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
  color,
  bgColor,
  title,
  description,
  image,
  reverse = false,
}: CaseStudyCardProps) {
  return (
    <div
      className={clsx(
        "flex flex-col sm:flex-row w-full gap-4",
        reverse && "sm:flex-row-reverse"
      )}
    >
      {/* Text Section */}
      <div className="flex flex-col w-full gap-4 p-2 sm:w-1/2 sm:p-4" data-aos="fade-up-left">
        <Link href="#">
          <span
            className={clsx(
              `p-1 w-20 text-center rounded-2xl text-xs sm:text-sm`,
              `text-${color}`,
              `bg-${bgColor}`
            )}
          >
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
      <div className="flex items-center justify-center w-full p-2 sm:w-1/2 sm:p-4" data-aos="fade-up-right">
        <img
          src={image}
          alt={`${title} image`}
          className="object-cover h-40 rounded-lg shadow-lg w-60 sm:h-56 sm:w-80"
        />
      </div>
    </div>
  );
}

export default CaseStudyCard;
