import AOS from "aos";

function Footer() {
  return (
    <footer className="py-12 text-gray-400 bg-emerald-950" data-aos="fade-up-right">
      <div className="grid max-w-6xl grid-cols-1 gap-10 px-4 mx-auto sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">About Us</h2>
          <p className="mb-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-white"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Facebook
            </a>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Twitter
            </a>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">Contact Us</h2>
          <p>New Delhi, India</p>
          <p>Delhi 10001</p>
          <p>Email: info@musicschool.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <p className="pt-8 text-2xl text-center">
        © 2024 Music School. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
