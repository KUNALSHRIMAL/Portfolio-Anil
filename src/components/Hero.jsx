import { motion } from "framer-motion";
import heroImg from "../assets/Hero.png";

export default function Hero() {

  // Smooth scrolling for Portfolio button
  const scrollToSection = (id) => {
    const sec = document.getElementById(id);
    if (sec) sec.scrollIntoView({ behavior: "smooth" });
  };

  // Framer Motion animation variants
  const iconContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const iconItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // List of icons inside public/icons/
  const icons = ["instagram", "linkedin", "twitter", "behance"];

  return (
    <section className="w-full bg-[#111111] text-white py-24" id="home">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <p className="text-gray-400 text-[16px] mb-1">Hi I am</p>

          <h2 className="text-[28px] font-semibold mb-2">Anil Kumar</h2>

          <h1 className="text-[56px] font-extrabold leading-tight mb-6">
            <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              UI/UX designer
            </span>
          </h1>

          {/* SOCIAL ICONS WITH STAGGER & HOVER EFFECTS */}
          <motion.div
            variants={iconContainer}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-4 mb-8"
          >
            {icons.map((icon, i) => (
              <motion.div
                key={i}
                variants={iconItem}
                whileHover={{
                  scale: 1.2,
                  rotate: 12,
                  boxShadow: "0 0 12px rgba(255,128,0,0.7)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:border-white transition cursor-pointer"
              >
                <img
                  src={`/icons/${icon}.png`}
                  alt={icon}
                  className="w-5"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* BUTTONS */}
          <div className="flex items-center gap-4 mb-10">

            {/* Portfolio scroll button */}
            <button
              onClick={() => scrollToSection("portfolio")}
              className="bg-orange-500 hover:bg-orange-600 transition px-6 py-2.5 rounded-md font-medium"
            >
              Portfolio
            </button>

            {/* Download CV button */}
            <a
              href="/Anil_Kumar_CV.pdf"   // Place your CV in public/
              download
              className="border border-gray-500 hover:border-white transition px-6 py-2.5 rounded-md font-medium"
            >
              Download CV
            </a>
          </div>

          {/* TAGS */}
          <div className="bg-[#1A1A1A] w-fit px-6 py-4 rounded-lg flex items-center gap-6 text-gray-300 text-[15px]">
            <span>UI designer</span>
            <span className="text-gray-500">|</span>
            <span>3D designer</span>
            <span className="text-gray-500">|</span>
            <span>Product designer</span>
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 relative flex justify-center"
        >
          {/* Circle Background */}
          <div className="w-[450px] h-[450px] rounded-full bg-[#1A1A1A] absolute top-1"></div>

          <img
            src={heroImg}
            alt="hero"
            className="relative w-[350px] md:w-[430px] object-cover z-10"
          />
        </motion.div>

      </div>
    </section>
  );
}
