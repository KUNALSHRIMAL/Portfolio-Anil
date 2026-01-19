import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "App Design",
      desc: "Intuitive mobile app interface design",
      icon: "/icons/service.png",
    },
    {
      title: "Web Design",
      desc: "Responsive and user-focused web design",
      icon: "/icons/service.png",
    },
    {
      title: "UI/UX Design",
      desc: "Research-driven user experience design",
      icon: "/icons/service.png",
    },
    {
      title: "Product Design",
      desc: "User-centered digital product design",
      icon: "/icons/service.png",
    },
    {
      title: "3D artist",
      desc: "Creative 3D modeling and visuals",
      icon: "/icons/service.png",
    },
    {
      title: "Visual Create",
      desc: "Engaging visuals for digital brands",
      icon: "/icons/service.png",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="w-full bg-[#111111] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-center text-[32px] font-semibold mb-12">
          Services
        </h2>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 12px rgba(255,128,0,0.3)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-[#1A1A1A] p-8 rounded-2xl flex flex-col items-center text-center cursor-pointer"
            >
              {/* ICON */}
              <img src={service.icon} alt={service.title} className="w-10 mb-4" />

              {/* TITLE */}
              <h3 className="text-[20px] font-semibold text-orange-400 mb-2">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-[15px] leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
