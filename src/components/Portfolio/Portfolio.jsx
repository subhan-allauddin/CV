function Portfolio() {
    return (
      <main className="text-white bg-black mt-[-64px] h-[50rem]">
        <div className="flex flex-col items-center justify-center gap-5 px-24 py-24 md:py-[150px] sm:py-0 hero-container md:px-12 sm:px-6 md:flex-row sxl:px-5">
          {/* Image Section */}
          <div className="flex items-center justify-center w-full image-container md:w-1/2">
            <img
              src="/Images/Professional Image.jpg"
              alt="Subhan Image"
              className="h-[250px] rounded-full shadow-lg"
            />
          </div>
  
          {/* Text Section */}
          <div className="flex flex-col w-full gap-3 md:w-1/2 sxl:text-center ssm:items-center ssm:text-center sm:items-center sm:text-center md:items-start md:text-left lg:items-start lg:text-left">
            <h1 className="text-[24px] md:text-[20px] tracking-wide font-raleway">
              Muhammad Subhan Allauddin
            </h1>
            <p className="font-ibm-plex-mono text-base sm:w-[80%] sm:text-sm leading-6 tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae velit quia officiis. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos, magni? Lorem ipsum dolor,
              sit amet consectetur adipisicing elit.
            </p>
            <div className="pt-5">
              <button className="bg-[#3f8e00] font-ibm-plex-mono text-white font-bold text-base sm:text-sm px-16 py-4 rounded-md shadow-[0px_0px_13px_2px_rgb(98,186,27)]">
                Let's Get Started <span className="inline-block">&gt;</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }
  
  export default Portfolio;