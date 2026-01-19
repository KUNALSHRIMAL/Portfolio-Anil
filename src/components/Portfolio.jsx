import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const filters = [
    "All",
    "Website Design",
    "App Mobile Design",
    "Dashboards",
    "Buttons/Gradients",
  ];

  const projects = [
    {
      id: 1,
      img: "/portfolio/p1.png",
      title: "Mobile App UI Collection",
      category: "Mobile App",
      filter: "App Mobile Design",
    },
    {
      id: 2,
      img: "/portfolio/p2.png",
      title: "E-Commerce Website",
      category: "Website Design",
      filter: "Website Design",
    },
    {
      id: 3,
      img: "/portfolio/p3.png",
      title: "Dashboards",
      category: "Dashboards",
      filter: "Dashboards",
    },
    {
      id: 4,
      img: "/portfolio/p4.png",
      title: "High Fidelity UI Designs",
      category: "Buttons/Gradients",
      filter: "Buttons/Gradients",
    },
    {
      id: 5,
      img: "/portfolio/p5.png",
      title: "Advertisement/Design",
      category: "Product design",
      filter: "Website Design",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.filter === activeFilter);

  return (
    <section id="portfolio" className="w-full bg-[#111111] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-[32px] font-semibold mb-10">Portfolio</h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-md text-sm transition ${
                activeFilter === filter
                  ? "bg-orange-500 text-white"
                  : "bg-[#1A1A1A] text-gray-300 hover:bg-[#2A2A2A]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-[#1A1A1A] rounded-xl p-3 hover:shadow-[0_0_15px_rgba(255,128,0,0.25)] transition cursor-pointer"
              >
                {/* IMAGE */}
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full rounded-lg mb-4"
                />

                {/* TEXTS */}
                <h3 className="text-[16px] font-semibold">{project.title}</h3>
                <p className="text-gray-400 text-[14px]">{project.category}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
