"use client";
import React from "react";
import { useEffect } from "react";
import { cn } from "@/components/lib/utils";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import AOS from "aos";
import "aos/dist/aos.css";

// import {
//   IconArrowWaveRightUp,
//   IconBoxAlignRightFilled,
//   IconBoxAlignTopLeft,
//   IconClipboardCopy,
//   IconFileBroken,
//   IconSignature,
//   IconTableColumn,
// } from "@tabler/icons-react";

// Define the type for each item
interface GridItem {
  title: string;
  description: string;
  header: JSX.Element;
 
}

// Common image styling
const imageClass = "h-[173px] w-full object-cover rounded-xl";

// Image components
const TodoApp = () => (
  <img
    src="/Images/TodoApp.PNG"
    alt="Todo App"
    className={imageClass}
    data-aos="fade-up"
  />
);
// const TodoApp = () => <img src="/Images/TodoApp.PNG" alt="Todo App" className={imageClass} />;
const Calculator = () => (
  <img
    src="/Images/Calculator (1).png"
    alt="Calculator"
    className={imageClass}
    data-aos="fade-up"
  />
);
const Clock = () => (
  <img
    src="/Images/Clock.PNG"
    alt="Clock"
    className={imageClass}
    data-aos="fade-right"
  />
);
const MusicWebsite = () => (
  <img
    src="/Images/MusicWebsite.PNG"
    alt="Music Website"
    className={imageClass}
    data-aos="fade-down-right"
  />
);
const SnakeGame = () => (
  <img
    src="/Images/SnakeGame.PNG"
    alt="Snake Game"
    className={imageClass}
    data-aos="fade-up "
  />
);
const QuizGame = () => (
  <img
    src="/Images/QuizGame.PNG"
    alt="Quiz Game"
    className={imageClass}
    data-aos="fade-up"
  />
);
const CloneProject = () => (
  <img
    src="/Images/EcommerceCloneProject.PNG"
    alt="Ecommerce Clone"
    className={imageClass}
    data-aos="fade-up"
  />
);

// Item data
const items: GridItem[] = [
  {
    title: "Todo App",
    description: "When I Learn Javascript that's my first project",
    header: <TodoApp />,
  },
  {
    title: "Calculator",
    description: "This Is my secound project with made of javascript and amazing Style Using Css",
    header: <Calculator />
  },
  {
    title: "Clock",
    description: "This is my third project,it's project have amazing Css",
    header: <Clock  />,
  },
  {
    title: "Music Website",
    description:
      "This is fifth project when i learn NextJs and tailwind Css but this project have Wounderfull look and this component are very technology used",
    header: <MusicWebsite />,
  },
  {
    title: "Snake Game",
    description: "This is my forth project",
    header: <SnakeGame />,
    
  },
  {
    title: "Quiz Game",
    description: "This is sixth project when I make the School Exhibition project Then I make",
    header: <QuizGame />,
    
  },
  {
    title: "Ecommerce Website Clone",
    description: "This is sixth project when I make the School Exhibition Project Then I make the Ecommerce Website.",
    header: <CloneProject />,
    
  },
];

export function BentoGridDemo() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
        <BentoGrid className="max-w-full p-12 mx-auto bg-black">
      {items.map((item, index) => (
        <BentoGridItem
          key={index}
          title={item.title}
          description={item.description}
          header={item.header}
          
          className={index === 3 || index === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </>

  );
}
