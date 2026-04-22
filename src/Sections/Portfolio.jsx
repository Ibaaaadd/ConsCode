import { useState } from 'react';

import porto1 from "../assets/images/porto1.jpeg";
import porto2 from "../assets/images/porto2.jpeg";
import porto3 from "../assets/images/porto3.jpeg";
import porto4 from "../assets/images/porto4.jpeg";
import porto5 from "../assets/images/porto5.jpeg";
import porto6 from "../assets/images/porto6.jpeg";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "E-Commerce Fashion",
      category: "e-commerce",
      image: porto1,
      description: "Website toko fashion online dengan sistem pembayaran terintegrasi"
    },
    {
      title: "E-Commerce Fashion",
      category: "e-commerce",
      image: porto2,
      description: "Website toko fashion online dengan sistem pembayaran terintegrasi"
    },
    {
      title: "E-Commerce Fashion",
      category: "e-commerce",
      image: porto3,
      description: "Website toko fashion online dengan sistem pembayaran terintegrasi"
    },
    {
      title: "E-Commerce Fashion",
      category: "e-commerce",
      image: porto4,
      description: "Website toko fashion online dengan sistem pembayaran terintegrasi"
    },
    {
      title: "E-Commerce Fashion",
      category: "e-commerce",
      image: porto5,
      description: "Website toko fashion online dengan sistem pembayaran terintegrasi"
    },
    {
      title: "E-Commerce Fashion",
      category: "e-commerce",
      image: porto6,
      description: "Website toko fashion online dengan sistem pembayaran terintegrasi"
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-bl from-[#2d1b69] via-[#1a0b5e] to-[#09032A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 right-10 w-48 h-48 bg-indigo-500 rounded-full mix-blend-multiply animate-float"></div>
        <div className="absolute bottom-1/3 left-10 w-36 h-36 bg-violet-500 rounded-full mix-blend-multiply animate-float-delayed"></div>
        <div className="absolute top-3/4 right-1/3 w-28 h-28 bg-blue-500 rounded-full mix-blend-multiply animate-float-slow"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Portfolio Kami</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Beberapa contoh website yang telah kami kembangkan untuk klien
          </p>


        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-[#09032A] hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-[#09032A] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                  
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
