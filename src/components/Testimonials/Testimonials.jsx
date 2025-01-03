import React from "react";
import {
  AiFillStar,
  AiOutlineStar,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

function TestimonialPage() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      review:
        "This product changed my life! Highly recommended if you want to improve your workflow. The support team was very attentive and helped me with all my questions.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Jane Doe",
      review:
        "Incredible results after using this product for just a week! It has been a game-changer in my daily routine, allowing me to focus on what really matters.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 3,
      name: "Steve Smith",
      review:
        "The customer service was fantastic! Plus, the product works wonders. I am truly amazed by how much my productivity has increased since I started using this.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 4,
      name: "Emily Davis",
      review:
        "Fantastic experience with this product! It streamlined my workflow and saved me a lot of time.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  ];

  return (
    <div className="font-sans mt-[140px] p-[20px] bg-gray-600 overflow-hidden">
      <section className="my-10 text-center">
        <h1 className="my-2 text-4xl font-bold text-white">Hear From Our Clients</h1>
        <h2 className="text-xl font-semibold text-white">Real Stories, Real People</h2>
        <p className="my-4 text-white">
          Discover how our products have transformed the lives of our customers.
          Each story is a testament to the impact of our services, showcasing
          the diverse ways our solutions can enhance daily life and efficiency.
        </p>
      </section>

      {/* Infinite Scrolling Testimonials */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll">
          {testimonials.concat(testimonials).map(({ id, name, review, rating, avatar }, index) => (
            <div
              key={id}
              className="flex-none w-80 p-6 bg-gray-100 rounded-lg shadow-lg m-4"
            >
              <img
                src={avatar}
                alt={name}
                className="w-16 h-16 mx-auto rounded-full"
              />
              <div className="mt-4">
                <h5 className="mb-2 text-xl font-bold">{name}</h5>
                <p className="mb-4 text-gray-700">{review}</p>
                <div className="flex justify-center mb-4">
                  {Array.from({ length: rating }, (_, i) => (
                    <AiFillStar key={i} className="text-yellow-500" />
                  ))}
                  {Array.from({ length: 5 - rating }, (_, i) => (
                    <AiOutlineStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <div className="flex justify-center space-x-4">
                  <AiFillFacebook className="text-2xl text-blue-600" />
                  <AiFillTwitterSquare className="text-2xl text-blue-400" />
                  <AiFillInstagram className="text-2xl text-pink-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialPage;
