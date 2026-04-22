import AnimatedSection from "../components/AnimatedSection";
import TeamCard from "../components/ui/TimCard";
import img1 from "../assets/images/marquee/haqul.jpeg";
import img2 from "../assets/images/marquee/syahril.png";
import img3 from "../assets/images/marquee/iffo.jpg";
import img4 from "../assets/images/marquee/ibad.jpeg";
import img5 from "../assets/images/marquee/jahfal.jpeg";

/* ------------------------------------
   🎨 Dynamic Configurations
-------------------------------------*/

// Background Orbs
const orbs = [
  {
    pos: "top-20 left-10",
    size: "w-32 h-32",
    gradient: "from-blue-400/30 to-cyan-400/10",
    anim: "animate-float",
  },
  {
    pos: "top-40 right-20",
    size: "w-24 h-24",
    gradient: "from-purple-400/30 to-pink-400/10",
    anim: "animate-float-delayed",
  },
  {
    pos: "bottom-32 left-1/4",
    size: "w-40 h-40",
    gradient: "from-indigo-400/30 to-blue-400/10",
    anim: "animate-float-slow",
  },
  {
    pos: "bottom-20 right-1/3",
    size: "w-28 h-28",
    gradient: "from-violet-400/30 to-purple-400/10",
    anim: "animate-float",
  },
];

// Digital Rain (Binary Text)
const digitalRain = [
  {
    text: [
      "01001000",
      "01100101",
      "01101100",
      "01101100",
      "01101111",
      "00100000",
      "01010111",
      "01101111",
      "01110010",
      "01101100",
      "01100100",
    ],
    pos: "top-0 left-1/6",
    delay: "delay-1000",
  },
  {
    text: [
      "01000011",
      "01101111",
      "01101110",
      "01110011",
      "01000011",
      "01101111",
      "01100100",
      "01100101",
    ],
    pos: "top-0 right-1/6",
    delay: "delay-1000",
  },
];

// Floating Icons
const techIcons = [
  {
    icon: "⚛️",
    pos: "top-1/3 left-1/5",
    size: "text-4xl",
    anim: "animate-float",
    color: "text-blue-400/20",
  },
  {
    icon: "💻",
    pos: "top-2/3 right-1/5",
    size: "text-3xl",
    anim: "animate-float-delayed",
    color: "text-purple-400/20",
  },
  {
    icon: "🚀",
    pos: "bottom-1/4 left-1/3",
    size: "text-3xl",
    anim: "animate-float-slow",
    color: "text-cyan-400/20",
  },
  {
    icon: "⚙️",
    pos: "top-1/2 right-1/4",
    size: "text-2xl",
    anim: "animate-float",
    color: "text-emerald-400/20",
  },
];

// Features List
const features = [
  {
    icon: "⚡",
    title: "Performa Tinggi",
    desc: "Website cepat dengan optimasi SEO terbaik",
    color: "text-yellow-400",
  },
  {
    icon: "🛡️",
    title: "Keamanan Terjamin",
    desc: "Sistem keamanan berlapis & terenkripsi",
    color: "text-green-400",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    desc: "Tampil sempurna di semua perangkat",
    color: "text-blue-400",
  },
  {
    icon: "🎨",
    title: "UI/UX Modern",
    desc: "Desain yang menaikkan engagement",
    color: "text-purple-400",
  },
];

// Stats
const stats = [
  { number: "50+", label: "Project Selesai", color: "text-blue-400" },
  { number: "100%", label: "Client Puas", color: "text-purple-400" },
];

// Advantage Cards
const advantages = [
  {
    icon: "💡",
    title: "Inovatif & Kreatif",
    desc: "Solusi kreatif untuk tiap project",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
  },
  {
    icon: "⚡",
    title: "Teknologi Terkini",
    desc: "Menggunakan teknologi modern",
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
  },
  {
    icon: "🤝",
    title: "Support 24/7",
    desc: "Selalu siap membantu kapan saja",
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
  },
];

const teamData = [
  {
    name: "Haqqul Amal",
    role: "AI Engineer",
    photo: img1,
  },
  {
    name: "Syahril Caesa",
    role: "Frontend Developer",
    photo: img2,
  },
  {
    name: "Iffo Elsande",
    role: "AI Engineer",
    photo: img3,
  },
  {
    name: "Choirul Ibad",
    role: "Backend Developer",
    photo: img4,
  },
  {
    name: "Jahfal Azzuhri",
    role: "UI/UX Designer",
    photo: img5,
  },
];

// ---------------------------
// MAIN COMPONENT
// ---------------------------
const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-[#0a0118] via-[#1a0b5e] to-[#2d1b69] relative overflow-hidden"
    >
      {/* 🔵 DYNAMIC BACKGROUND ORBS */}
      {orbs.map((o, i) => (
        <div
          key={i}
          className={`absolute ${o.pos} ${o.size} rounded-full blur-sm mix-blend-screen bg-gradient-to-br ${o.gradient} ${o.anim}`}
        ></div>
      ))}

      {/* 🟢 DYNAMIC DIGITAL RAIN */}
      {digitalRain.map((rain, i) => (
        <div
          key={i}
          className={`absolute text-xs text-blue-300/10 font-mono leading-tight animate-pulse ${rain.pos} ${rain.delay}`}
        >
          <div className="flex flex-col space-y-1">
            {rain.text.map((code, j) => (
              <span key={j}>{code}</span>
            ))}
          </div>
        </div>
      ))}

      {/* 🟣 FLOATING EMOJI ICONS */}
      {techIcons.map((t, i) => (
        <div
          key={i}
          className={`absolute ${t.pos} ${t.size} ${t.color} ${t.anim}`}
        >
          {t.icon}
        </div>
      ))}

      {/* 🌐 LIGHT BEAMS */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
      <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse delay-1000"></div>

      {/* VERTICAL */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse delay-700"></div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-4 relative z-10">
        {/* HEADER */}
        <AnimatedSection
          animation="slide-in-bottom"
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-8 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-white text-sm font-medium mb-6">
            Tentang Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Kenapa Memilih <span className="gradient-text">ConsCode?</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Tim developer berpengalaman yang siap mewujudkan visi digital Anda.
          </p>
        </AnimatedSection>

        {/* IMAGE + FEATURES */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* IMAGE */}
          <AnimatedSection animation="slide-in-left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
              <img
                src="whyUs.png"
                alt="Web Development"
                className="relative z-10 w-full rounded-2xl shadow-2xl"
              />
            </div>
          </AnimatedSection>

          {/* FEATURES LIST */}
          <AnimatedSection animation="slide-in-right" className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-2">
              Mengapa ConsCode Pilihan Terbaik?
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Kami memahami setiap bisnis itu unik. Kami hadir untuk memberikan
              solusi yang tepat sasaran.
            </p>

            <div className="space-y-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 glass-effect p-4 rounded-xl hover:scale-105 transition-all duration-300"
                >
                  <div className={`text-2xl ${f.color}`}>{f.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {f.title}
                    </h4>
                    <p className="text-gray-300 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="glass-effect p-6 rounded-xl text-center"
                >
                  <div className={`text-3xl font-bold ${s.color}`}>
                    {s.number}
                  </div>
                  <div className="text-gray-300 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* ADVANTAGE SECTION */}
        <AnimatedSection animation="slide-in-bottom" className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white">Keunggulan Kami</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Kombinasi teknologi & kreativitas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((adv, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${adv.gradient} border ${adv.border} 
                p-8 rounded-2xl hover:scale-105 transition-all`}
              >
                <div className="text-4xl mb-6">{adv.icon}</div>
                <h4 className="text-xl font-semibold text-white">
                  {adv.title}
                </h4>
                <p className="text-gray-300">{adv.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="scale-up" className="mt-20 text-center">
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Siap Memulai Project?
            </h3>
            <p className="text-gray-300 mb-6">
              Konsultasi gratis untuk kebutuhan website Anda
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6285189339423?text=Halo%20Admin,%20saya%20ingin%20bertanya%20tentang%20jasa%20pembuatan%20website%20ConsCode."
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:scale-105 transition"
              >
                <i class="fa-regular fa-envelope"></i> Konsultasi
              </a>
              <a
                href="#portfolio"
                className="px-8 py-3 bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20"
              >
                <i class="fa-solid fa-laptop-code"></i> Portfolio
              </a>
            </div>
          </div>
        </AnimatedSection>
        <div className="mt-12">
          <h3 className="text-2xl text-center font-bold text-white mb-4">
            Tim Profesional
          </h3>
          <div className="
  mt-10 team-container
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-3
  xl:grid-cols-5
  gap-6
  justify-items-center
">
            {teamData.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                role={member.role}
                photo={member.photo}
              />
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default About;
