import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "About me", id: "about" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Contact me", id: "contact" },
  ];

  // Scroll to section
  const scrollToSection = (id) => {
    const sec = document.getElementById(id);
    if (sec) {
      sec.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  // Active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full fixed top-0 z-50 bg-transparent backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <h1
            onClick={() => scrollToSection("home")}
            className="text-2xl font-semibold cursor-pointer"
          >
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Anil’s
            </span>
            <span className="text-white ml-1">Portfolio</span>
          </h1>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10 text-[16px] font-medium">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer transition ${
                  active === item.id
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>

          {/* DESKTOP BUTTON */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:block bg-orange-500 hover:bg-orange-600 transition text-white px-5 py-2 rounded-md text-sm font-medium"
          >
            Hire Me
          </button>

          {/* HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className={`w-6 h-[2px] bg-white transition ${menuOpen && "rotate-45 translate-y-[6px]"}`} />
            <span className={`w-6 h-[2px] bg-white transition ${menuOpen && "opacity-0"}`} />
            <span className={`w-6 h-[2px] bg-white transition ${menuOpen && "-rotate-45 -translate-y-[6px]"}`} />
          </button>

        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-3/4 h-screen bg-[#111111] z-40 p-8 md:hidden"
          >
            <ul className="flex flex-col gap-6 text-lg mt-20">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`cursor-pointer transition ${
                    active === item.id
                      ? "text-orange-500 font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </li>
              ))}
            </ul>

            <button
              onClick={() => scrollToSection("contact")}
              className="mt-10 bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-md font-medium"
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
