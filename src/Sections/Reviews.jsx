import { useState, useEffect } from 'react';

import photo1 from "../assets/images/cewe1.jpeg";
import photo2 from "../assets/images/cowo1.jpeg";
import photo3 from "../assets/images/cowo2.jpeg";

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const reviews = [
    {
      name: "Ina Zohana",
      role: "CEO TechStart",
      image: photo1,
      text: "ConsCode telah membantu kami membangun website yang luar biasa. Tim mereka sangat profesional dan hasil kerjanya melampaui ekspektasi kami.",
      rating: 5
    },
    {
      name: "David Nur",
      role: "Founder Fashion Store",
      image: photo2,
      text: "Sangat puas dengan layanan ConsCode. E-commerce kami menjadi lebih menarik dan penjualan meningkat signifikan.",
      rating: 5
    },
    {
      name: "Afif Bagus",
      role: "Marketing Director",
      image: photo3,
      text: "Tim ConsCode sangat responsif dan memahami kebutuhan bisnis kami. Website yang mereka buat sangat user-friendly dan modern.",
      rating: 5
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-tr from-[#09032A] via-[#0f0544] to-[#2d1b69] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 right-16 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply animate-float"></div>
        <div className="absolute bottom-16 left-16 w-32 h-32 bg-cyan-500 rounded-full mix-blend-multiply animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-indigo-500 rounded-full mix-blend-multiply animate-float-slow"></div>
      </div>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Apa Kata Mereka?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Dengarkan pengalaman langsung dari klien kami yang telah merasakan layanan ConsCode
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-[#0D0832] p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-6">
                      <img 
                        src={review.image} 
                        alt={review.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-white">{review.name}</h3>
                        <p className="text-blue-400">{review.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">{review.text}</p>
                    <div className="flex text-yellow-400 text-xl">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-blue-600/10 hover:bg-blue-600/20 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-blue-600/10 hover:bg-blue-600/20 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-blue-500 w-6' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
