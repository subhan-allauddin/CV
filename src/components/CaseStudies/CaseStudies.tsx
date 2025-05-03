import CaseStudyCard from "./CaseStudiesCard";

function CaseStudies() {
  const caseStudies = [
    {
      category: "Education",
      color: "orange-500",
      bgColor: "orange-100",
      title: "Chiniot Islamia Public School (CIPS)",
      description:"knowledge, which I find both exciting and challenging. My favorite subject is Mathematics, as I enjoy solving problems and exploring logical concepts. I study at a school located near NED University Road, opposite Safari Park, which provides a great learning environment. I am dedicated to working hard and making the most of this important stage in my education.",
      image: "/Images/images.jpeg",
      reverse: false,
    },
    {
      category: "Skills",
      color: "blue-500",
      bgColor: "blue-100",
      title: "Learn Time",
      description:"Apart from my school studies, I have developed strong skills in web development. I am proficient in HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, and TypeScript. I specialize in creating fully responsive websites that work smoothly on all devices. I also work with Klaviyo for email marketing. Additionally, I study Artificial Intelligence.",
      image: "/Images/Laptop.PNG",
      reverse: true,
    },
    {
      category: "Internship",
      color: "green-500",
      bgColor: "green-100",
      title: "Best Time At Asra Soft",
      description:"I also had the opportunity to intern at Asra Soft Company, where I completed an 8-week internship program. During this time, I gained practical experience in a professional environment and improved my technical and communication skills. This internship helped me understand how real-world projects are managed and strengthened my confidence in web development.",
      image: "/Images/asrasoft_logo.jpeg",
      reverse: false,
    },
  ];

  return (
    <main id="helloSubhan">
      <div
        className="flex flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-12"
        id="helloSubhan"
      >
        {/* <h1 className="mb-5 text-2xl font-bold leading-6 tracking-wide text-center text-black font-raleway sm:text-xl">
          Case Studies
        </h1> */}
        {/* <p className="w-full text-sm font-thin tracking-wide text-center text-custom-gray font-ibm-plex-mono sm:w-4/5">
          My persnal information
        </p> */}
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
