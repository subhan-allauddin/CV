import AOS from "aos";

function Portfolio() {
  return (
    <main className="text-white bg-black mt-[-64px] h-auto">
      <div className="flex flex-col items-center justify-center gap-5 px-6 py-12 sm:py-24 md:py-[150px] hero-container md:px-12 sm:px-6 md:flex-row sxl:px-5">
        {/* Image Section */}
        <div className="flex items-center justify-center w-full image-container md:w-1/2" data-aos="fade-right">
          <img
            src="/Images/Professional Image.jpg"
            alt="Subhan Image"
            className="h-[150px] sm:h-[200px] md:h-[250px] rounded-full shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center w-full gap-3 text-center md:w-1/2 md:text-left md:items-start" data-aos="fade-left">
          <h1 className="text-[20px] sm:text-[24px] tracking-wide font-raleway">
            Muhammad Subhan Allauddin
          </h1>
          <p className="font-ibm-plex-mono text-sm sm:text-base leading-5 sm:leading-6 tracking-wide sm:w-[80%]">
            Hi! I'm a Front-End Web Developer who loves turning ideas into
            clean, responsive websites. I work with HTML, CSS, JavaScript,
            React.js, Next.js, and Tailwind CSS to build smooth and modern user
            interfaces.
          </p>
          <div className="pt-4 sm:pt-5">
            <button className="bg-[#3f8e00] font-ibm-plex-mono text-white font-bold text-sm sm:text-base px-10 sm:px-16 py-3 sm:py-4 rounded-md shadow-[0px_0px_13px_2px_rgb(98,186,27)]">
              Let's Get Started <span className="inline-block">&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Portfolio;
