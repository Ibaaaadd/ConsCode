import Img1 from "../../assets/images/marquee/1.jfif";
import Img2 from "../../assets/images/marquee/2.jfif";
import Img3 from "../../assets/images/marquee/1.jfif";
import Img4 from "../../assets/images/marquee/2.jfif";
import Img5 from "../../assets/images/marquee/1.jfif";

const images = [
  { src: Img1, title: "Haqqul Amal jiddan", desc: "QA Engineer" },
  { src: Img2, title: "Iffo Elsande", desc: "AI Engineer" },
  { src: Img3, title: "Syahril Caesa Mahira", desc: "Frontend Engineer" },
  { src: Img4, title: "Choirul Ainul Ibad", desc: "Backend Engineer" },
  { src: Img5, title: "Jahfal Azzuhri Subroto", desc: "UI/UX Designer" },
];

export default function ImageMarquee() {
  const duplicated = images.concat(images);

  return (
    <div className="relative w-full overflow-hidden mt-10">
      {/* Gradient fade kiri */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#09032A]/20 to-transparent z-20" />

      {/* Gradient fade kanan */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#09032A]/20 to-transparent z-20" />

      <div className="relative w-full overflow-hidden">
        <div className="flex items-center gap-2 animate-marquee whitespace-nowrap">
          {duplicated.map((item, i) => (
            <div
              key={i}
              className="relative group rounded-xl overflow-hidden shrink-0 animate-marquee"
            >
              {/* Gambar */}
              <img
                src={item.src}
                alt={`img-${i}`}
                className="w-auto h-44 object-cover drop-shadow-md transition duration-700 group-hover:scale-105"
              />

              {/* Overlay bawah */}
              <div
                className="absolute bottom-0 left-0 w-full 
                bg-gradient-to-t from-black to-transparent 
                px-3 py-2 
                opacity-0 group-hover:opacity-100 
                transition duration-300"
              >
                <h4 className="text-white text-sm font-semibold">
                  {item.title}
                </h4>
                <p className="text-white/80 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
