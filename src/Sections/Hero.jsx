import AnimatedSection from "../components/AnimatedSection";
import mobile from "../../public/mobile.png";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#09032A] via-[#0f0544] to-[#1a0b5e] flex items-center relative overflow-hidden">
      {/* Ultra Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-cyan-600/15 mesh-animate"></div>

        {/* Matrix-style Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid-bg"></div>
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <pattern
                id="hexPattern"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <polygon
                  points="30,5 50,20 50,40 30,55 10,40 10,20"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="0.5"
                />
                <circle cx="30" cy="30" r="2" fill="#8b5cf6" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexPattern)" />
          </svg>
        </div>

        {/* Dynamic Geometric Shapes */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-blue-500/40 to-cyan-500/20 rounded-xl rotate-45 animate-float shape-rotate mix-blend-screen"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-br from-purple-500/40 to-pink-500/20 rounded-full animate-float-delayed mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-indigo-500/40 to-violet-500/20 rounded-lg rotate-12 animate-float-slow shape-rotate mix-blend-screen"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-emerald-500/40 to-teal-500/20 rounded-full animate-float mix-blend-screen"></div>

        {/* Advanced Particle System */}
        <div
          className="particle"
          style={{
            top: "15%",
            left: "20%",
            animationDelay: "0s",
            backgroundColor: "#3b82f6",
          }}
        ></div>
        <div
          className="particle"
          style={{
            top: "70%",
            left: "80%",
            animationDelay: "2s",
            backgroundColor: "#8b5cf6",
          }}
        ></div>
        <div
          className="particle"
          style={{
            top: "40%",
            left: "70%",
            animationDelay: "4s",
            backgroundColor: "#06b6d4",
          }}
        ></div>
        <div
          className="particle"
          style={{
            top: "80%",
            left: "15%",
            animationDelay: "6s",
            backgroundColor: "#10b981",
          }}
        ></div>
        <div
          className="particle"
          style={{
            top: "25%",
            left: "60%",
            animationDelay: "3s",
            backgroundColor: "#f59e0b",
          }}
        ></div>
        <div
          className="particle"
          style={{
            top: "60%",
            left: "30%",
            animationDelay: "5s",
            backgroundColor: "#ef4444",
          }}
        ></div>

        {/* Glowing Light Rays */}
        <div className="absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-blue-400/50 via-blue-400/20 to-transparent light-beam"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-purple-400/50 via-purple-400/20 to-transparent light-beam delay-700"></div>
        <div className="absolute top-0 left-3/5 w-px h-full bg-gradient-to-b from-cyan-400/40 via-cyan-400/15 to-transparent light-beam delay-1400"></div>

        {/* Floating Code Elements with Glow */}
        <div className="absolute top-1/4 left-1/6 text-6xl text-blue-400/20 font-mono code-float drop-shadow-lg">
          &lt;/&gt;
        </div>
        <div className="absolute top-3/4 right-1/6 text-5xl text-purple-400/20 font-mono code-float drop-shadow-lg">
          {"{}"}
        </div>
        <div className="absolute bottom-1/3 left-1/2 text-4xl text-cyan-400/20 font-mono code-float drop-shadow-lg">
          ( )
        </div>
        <div className="absolute top-1/2 right-2/5 text-3xl text-emerald-400/20 font-mono code-float drop-shadow-lg">
          [ ]
        </div>
        <div className="absolute top-2/3 left-1/3 text-2xl text-pink-400/20 font-mono code-float drop-shadow-lg">
          &amp;&amp;
        </div>

        {/* Subtle Scan Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/10 to-transparent animate-pulse"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-300/10 to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <AnimatedSection
            animation="slide-in-left"
            className="space-y-6 stagger-child text-center md:text-left items-center md:items-start flex flex-col"
            threshold={0.1}
          >
            <h2 className="text-blue-400 font-bold text-xl md:text-2xl neon-text">
              Spesialis Jasa
            </h2>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight text-focus-in">
              Pembuatan Website
              <span className="text-blue-500"> Profesional</span>
            </h1>

            <p className="text-lg text-gray-300 slide-up max-w-md md:max-w-none">
              Cons Code siap bantu kamu bikin website yang profesional dan
              sesuai kebutuhan. Kami juga menyediakan layanan Machine Learning,
              Deep Learning, dan solusi digital lainnya.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="https://wa.me/6285189339423?text=Halo%20Admin,%20saya%20ingin%20bertanya%20tentang%20jasa%20pembuatan%20website%20ConsCode."
                target="_blank"
                rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                Mulai Konsultasi
              </a>

              <a href="#portfolio" className="border-2 border-blue-600 text-blue-400 px-8 py-3 rounded-full text-lg font-semibold glass-effect hover:bg-blue-600/10 transition-all duration-300 group">
                Lihat Portfolio
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </AnimatedSection>

          {/* Illustration */}
          <AnimatedSection
            animation="slide-in-right"
            className="relative hidden md:block"
            threshold={0.1}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>

              <img
                lazy="loading"
                src={mobile}
                alt="ConsCode Web Development"
                className="relative z-10 md:w-[16rem] lg:w-[30rem] mx-auto h-auto rounded-2xl duration-500 hover:scale-105 transition-transform"
              />

              <div className="absolute -right-8 top-1/4 space-y-4">
                <div className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover-lift">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover-lift">
                  <span className="text-2xl">💻</span>
                </div>
                <div className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover-lift">
                  <span className="text-2xl">🚀</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="scroll-indicator">
            <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-400 rounded-full mt-2"></div>
            </div>
            <p className="text-blue-400 text-sm mt-2 text-center">Scroll</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
