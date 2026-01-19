import { motion } from "framer-motion";
import aboutImg from "../assets/Hero.png"; // same image or separate About image

export default function About() {
  const skills = [
    { name: "Figma", percent: 100, icon: "/icons/figma.png" },
    { name: "Adobe XD", percent: 100, icon: "/icons/xd.png" },
    { name: "Adobe Photoshop", percent: 85, icon: "/icons/photoshop.png" },
    { name: "Blender 3D", percent: 60, icon: "/icons/blender.png" },
    { name: "Framer", percent: 70, icon: "/icons/framer.png" },
  ];

  return (
    <section id="about" className="w-full bg-[#111111] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-semibold">About Me</h2>
          <p className="text-gray-400 text-[14px] mt-2">
            User Interface And User Experience And 3D Blender Artist
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-[420px] h-[520px] bg-[#1A1A1A] rounded-2xl absolute"></div>
            <img
              src={aboutImg}
              alt="about"
              className="relative z-10 w-[420px] object-cover rounded-2xl"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="text-gray-400 leading-relaxed mb-6">
              I’m a creative UI/UX Designer who enjoys turning complex ideas
              into simple, meaningful, and engaging digital experiences.
              My work blends user research, thoughtful interaction design,
              and strong visual aesthetics to create products that feel
              intuitive and purposeful.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              I’ve worked on real-world projects involving web interfaces,
              visual assets, and 3D elements, and I’m comfortable collaborating
              with designers, marketers, and developers to bring ideas to life.
              With a foundation in Digital Society and Digital Marketing,
              I design with both users and business impact in mind.
            </p>

            {/* DOWNLOAD CV */}
            <a
              href="/Anil_Kumar_CV.pdf"
              download
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-md font-medium"
            >
              ⬇ Download CV
            </a>
          </motion.div>
        </div>

        {/* SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 mt-20"
        >
          {skills.map((skill, i) => (
            <div key={i} className="flex flex-col items-center">
              
              {/* CIRCLE */}
              <div
                className="relative w-24 h-24 rounded-full flex items-center justify-center"
                style={{
                  background: `conic-gradient(#f97316 ${skill.percent * 3.6}deg, #2a2a2a 0deg)`,
                }}
              >
                <div className="w-20 h-20 bg-[#111111] rounded-full flex items-center justify-center">
                  <img src={skill.icon} alt={skill.name} className="w-8" />
                </div>
              </div>

              <p className="mt-4 text-orange-400 font-semibold">
                {skill.percent}%
              </p>

              <span className="text-gray-400 text-sm mt-1">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
