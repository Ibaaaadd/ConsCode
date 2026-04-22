import AnimatedSection from "./AnimatedSection";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // === DATA DINAMIS ===
  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", target: "home" },
        { label: "About", target: "about" },
        { label: "Services", target: "services" },
        { label: "Portfolio", target: "portfolio" },
        { label: "Contact", target: "contact" },
      ],
    },
    {
      title: "Services",
      items: [
        "Website Development",
        "E-Commerce Solutions",
        "Web Applications",
        "UI/UX Design",
      ],
    },
    {
      title: "Contact",
      items: ["conscode2023@gmail.com", "(+62) 851-8933-9423", "Surabaya, Indonesia"],
      icons: ["fa-envelope", "fa-phone", "fa-location-dot"],
    },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-[#09032A] via-[#0f0544] to-[#1a0b5e] text-white">
      <AnimatedSection animation="slide-in-bottom">
        <div className="container mx-auto px-4 py-16">
          {/* GRID UTAMA */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-white">Cons</span>
                <span className="text-blue-400">Code</span>
              </h3>
              <p className="text-gray-300 text-sm">
                Transforming digital ideas into powerful web solutions.
              </p>
            </div>

            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-4 text-white">
                  {section.title}
                </h4>

                {/* Navigasi */}
                {section.links && (
                  <ul className="space-y-2">
                    {section.links.map((link, idx) => (
                      <li key={idx}>
                        <button
                          onClick={() => scrollToSection(link.target)}
                          className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center"
                        >
                          <i className="fa-solid fa-angle-right mr-2 text-xs"></i>
                          {link.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Contact */}
                {section.items && (
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-gray-300 text-sm flex items-center gap-2"
                      >
                        {section.icons && section.icons[idx] && (
                          <i
                            className={`fa-solid ${section.icons[idx]} text-gray-300`}
                          ></i>
                        )}
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm">
              {new Date().getFullYear()} ConsCode. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500 text-blue-300 hover:text-white rounded-lg transition-colors text-sm"
            >
              <i className="fa-solid fa-arrow-up"></i> Back to Top
            </button>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  );
};

export default Footer;
