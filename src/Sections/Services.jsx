import AnimatedSection from "../components/AnimatedSection";
import MarqueeIcon from "../components/ui/IconMarquee";

const services = [
  {
    title: "Website Company Profile",
    description:
      "Tampilkan bisnis Anda secara profesional dengan website company profile yang menarik dan informatif",

    features: [
      "Desain Modern",
      "Mobile Responsive",
      "SEO Friendly",
      "Sistem CMS",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=top",
  },
  {
    title: "E-Commerce Website",
    description:
      "Bangun toko online Anda dengan fitur lengkap untuk meningkatkan penjualan",

    features: [
      "Sistem Pembayaran",
      "Manajemen Produk",
      "Keranjang Belanja",
      "Tracking Order",
    ],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center",
  },
  {
    title: "Custom Web Application",
    description:
      "Kembangkan aplikasi web sesuai kebutuhan spesifik bisnis Anda",

    features: [
      "Sistem Custom",
      "Integrasi API",
      "Database Scalable",
      "Keamanan Tinggi",
    ],
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop&crop=center",
  },
  {
    title: "Website Maintenance",
    description:
      "Jaga performa dan keamanan website Anda dengan layanan maintenance berkala",

    features: [
      "Update Berkala",
      "Backup Data",
      "Monitoring 24/7",
      "Support Teknis",
    ],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop&crop=center",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-tr from-[#0f0544] via-[#09032A] to-[#2d1b69] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-500 rounded-full mix-blend-multiply animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection
          animation="slide-in-bottom"
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
            <i class="fa-solid fa-bolt"></i>
            Layanan Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Solusi <span className="gradient-text">Digital</span> Terpadu
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Dari konsep hingga implementasi, kami menyediakan layanan lengkap
            untuk kebutuhan digital bisnis Anda
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
            >
              {/* Image Side */}
              <AnimatedSection
                animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                className={`${index % 2 === 1 ? "lg:col-start-2" : ""
                  } relative`}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover rounded-xl mb-6"
                    />
                    <div className="text-center">
                      <div className="text-5xl mb-4">{service.icon}</div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Content Side */}
              <AnimatedSection
                animation={index % 2 === 0 ? "slide-in-right" : "slide-in-left"}
                className={`${index % 2 === 1 ? "lg:col-start-1" : ""
                  } space-y-6`}
              >
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-blue-300 mb-4">
                    Fitur Utama:
                  </h4>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>

        <div className="mt-20 md:p-6">
          <h1 className="text-center text-3xl">Tech Stack</h1>
          <MarqueeIcon />
        </div>

        {/* Call to Action */}
        <AnimatedSection animation="scale-up" className="mt-20 text-center">
          <div className="glass-effect p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Tidak Menemukan Layanan yang Anda Cari?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Kami siap mendiskusikan kebutuhan khusus Anda dan memberikan
              solusi yang tepat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <a
                href="https://wa.me/6285189339423?text=Halo%20Admin,%20saya%20ingin%20bertanya%20tentang%20jasa%20pembuatan%20website%20ConsCode."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-green-500/20 border border-green-500/30 text-green-300 font-semibold rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                <i class="fa-brands fa-whatsapp"></i> Whatsapp
              </a>
            </div>
          </div>

        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
