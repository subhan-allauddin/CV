import CaseStudyCard from "./CaseStudiesCard";

function CaseStudies() {
  const caseStudies = [
    {
      category: "Fintech",
      color: "orange-500",
      bgColor: "orange-100",
      title: "Work name here",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas modi magnam quidem dicta at quasi molestias. Minus mollitia vitae modi, excepturi corrupti ipsam pariatur vel unde nemo fugit quia voluptatem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem recusandae dicta quaerat tempora esse pariatur ab vitae. Earum, ut nostrum?",
      image: "/Images/Laptop.PNG",
      reverse: false,
    },
    {
      category: "Edtech",
      color: "blue-500",
      bgColor: "blue-100",
      title: "Work name here",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas modi magnam quidem dicta at quasi molestias. Minus mollitia vitae modi, excepturi corrupti ipsam pariatur vel unde nemo fugit quia voluptatem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem recusandae dicta quaerat tempora esse pariatur ab vitae. Earum, ut nostrum?",
      image: "/Images/Laptop.PNG",
      reverse: true,
    },
    {
      category: "Pharma",
      color: "green-500",
      bgColor: "green-100",
      title: "Work name here",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas modi magnam quidem dicta at quasi molestias. Minus mollitia vitae modi, excepturi corrupti ipsam pariatur vel unde nemo fugit quia voluptatem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem recusandae dicta quaerat tempora esse pariatur ab vitae. Earum, ut nostrum?",
      image: "/Images/Laptop.PNG",
      reverse: false,
    },
  ];

  
  return (
  <main>
    <div className="flex flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-12" id="helloSubhan">
      <h1 className="mb-5 text-2xl font-bold leading-6 tracking-wide text-center text-black font-raleway sm:text-xl">
        Case Studies
      </h1>
      <p className="w-full text-sm font-thin tracking-wide text-center text-custom-gray font-ibm-plex-mono sm:w-4/5">
        Solving user & business problems for the last 15+ years. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div className="flex flex-col w-full gap-6 px-4 sm:px-6">
      {caseStudies.map((study, index) => (
        <CaseStudyCard key={index} {...study} />
      ))}
    </div>
  </main>
  );
}

export default CaseStudies;
