import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Apa saja layanan yang ditawarkan ConsCode?",
      answer:
        "ConsCode menawarkan berbagai layanan pengembangan web seperti pembuatan website responsif, aplikasi web full-stack, e-commerce, landing pages, dan sistem manajemen konten. Kami juga menyediakan layanan UI/UX design dan maintenance website.",
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan proyek?",
      answer:
        "Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Landing page sederhana bisa selesai dalam 1-2 minggu, website company profile 2-4 minggu, sedangkan aplikasi web kompleks bisa memakan waktu 2-6 bulan. Kami akan memberikan timeline yang jelas di awal proyek.",
    },
    {
      question: "Teknologi apa saja yang digunakan ConsCode?",
      answer:
        "Kami menggunakan teknologi modern seperti React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Tailwind CSS, dan berbagai tools development terkini. Kami selalu mengikuti best practices dan teknologi terbaru di industri.",
    },
    {
      question: "Apakah website yang dibuat mobile-friendly?",
      answer:
        "Tentu saja! Semua website yang kami buat menggunakan responsive design yang memastikan tampilan optimal di semua perangkat - desktop, tablet, dan smartphone. Kami juga memperhatikan performance dan user experience di mobile.",
    },
    {
      question: "Bagaimana sistem pembayaran dan harga untuk proyek?",
      answer:
        "Sistem pembayaran biasanya dibagi menjadi beberapa tahap: 30% di awal, 40% saat development selesai, dan 30% saat website live. Harga bervariasi mulai dari 2 juta untuk landing page hingga 50 juta+ untuk aplikasi kompleks. Konsultasi gratis untuk estimasi harga!",
    },
    {
      question: "Apakah ada garansi dan maintenance setelah website selesai?",
      answer:
        "Ya! Kami memberikan garansi 3 bulan untuk bug fixing dan maintenance gratis. Setelah itu, tersedia paket maintenance bulanan yang mencakup backup, security updates, dan minor modifications. Kami juga menyediakan hosting dan domain management.",
    },
    {
      question: "Bisakah client ikut terlibat dalam proses development?",
      answer:
        "Sangat bisa! Kami menerapkan agile development dimana client dapat melihat progress secara real-time, memberikan feedback, dan request perubahan di setiap milestone. Communication is key untuk hasil yang memuaskan.",
    },
    {
      question: "Apakah ConsCode bisa handle proyek skala besar?",
      answer:
        "Absolutely! Tim kami berpengalaman menangani proyek dari startup hingga enterprise. Kami memiliki sistem project management yang solid, tim developer yang scalable, dan partnership dengan berbagai technology providers.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#09032A] via-[#0f0544] to-[#1a0b5e] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <AnimatedSection animation="slide-in-bottom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
              Frequently Asked Questions
              <i class="fa-solid fa-question"></i>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Got </span>
              <span className="gradient-text">Questions?</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Temukan jawaban untuk pertanyaan yang sering diajukan tentang
              layanan dan proses kerja ConsCode
            </p>
          </div>
        </AnimatedSection>

        {/* FAQ Items */}
        <AnimatedSection animation="slide-in-bottom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors duration-300"
                  >
                    <h3 className="text-lg font-semibold text-white pr-8">
                      {faq.question}
                    </h3>
                    <div
                      className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-500/20 border border-blue-500/30 transition-all duration-300 ${openIndex === index
                          ? "rotate-180 bg-blue-500/40 scale-110"
                          : "hover:scale-110 hover:bg-blue-500/30"
                        }`}
                    >
                      <svg
                        className="w-4 h-4 text-blue-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-500 ease-in-out ${openIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                      } overflow-hidden`}
                  >
                    <div className="px-8 pb-6">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-6"></div>
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Masih Ada Pertanyaan Lain? 🤔
                </h3>
                <p className="text-gray-300 mb-6">
                  Jangan ragu untuk menghubungi kami! Tim ConsCode siap membantu
                  menjawab pertanyaan dan kebutuhan proyek Anda.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://wa.me/6285189339423?text=Halo%20Admin,%20saya%20ingin%20bertanya%20tentang%20jasa%20pembuatan%20website%20ConsCode."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-green-500/20 border border-green-500/30 text-green-300 font-semibold rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    <i class="fa-brands fa-whatsapp"></i> Whatsapp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Statistics */}
        <AnimatedSection animation="scale-up">
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  number: "50+",
                  label: "Pertanyaan Terjawab",
                  icon: "❓",
                  color: "text-blue-400",
                },
                {
                  number: "100%",
                  label: "Kepuasan Client",
                  icon: "😊",
                  color: "text-green-400",
                },
                {
                  number: "24/7",
                  label: "Support Available",
                  icon: "🔧",
                  color: "text-purple-400",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="glass-effect p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;
