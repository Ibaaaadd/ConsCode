import contactImg from "../assets/images/contact.svg";


const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-bl from-[#2d1b69] via-[#0f0544] to-[#09032A] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="flex justify-center items-center px-10 py-4">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Hubungi Kami
            </h2>
            <p className="text-gray-300 md:w-2/3 text-justify md:text-start">
              Diskusikan kebutuhan website Anda dengan tim kami. Kami siap
              membantu mewujudkan website impian Anda.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <h3 className="text-white font-semibold">Lokasi</h3>
                <p className="text-gray-400">Surabaya, Indonesia</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                <i class="fa-regular fa-envelope"></i>
              </div>
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-gray-400">conscode2023@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div>
                <h3 className="text-white font-semibold">Phone</h3>
                <p className="text-gray-400">(+62) 851-8933-9423</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block animate-float">
          <img src={contactImg} alt="Contact" />
        </div>
      </div>

    </section>
  );
};

export default Contact;
