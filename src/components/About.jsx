import { motion } from "framer-motion";
import aboutImg from "../assets/Hero.png";


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

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-[32px] font-semibold">About Me</h2>
          <p className="text-gray-400 text-[14px] mt-2">
            User Interface And User Experience And 3D Blender Artist
          </p>
        </div>

        {/* MAIN SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* LEFT IMAGE WITH HALF CIRCLE BACKGROUND */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Half Circle Backdrop */}
            <div className="absolute 
                bg-[#1A1A1A]
                
                /* Mobile: circle behind image */
                w-[260px] h-[260px] rounded-full top-10 mx-auto
                sm:w-[300px] sm:h-[300px]
                
                /* Desktop: half-rounded vertical shape */
                lg:w-[380px] lg:h-[520px] 
                lg:rounded-tr-[260px] lg:rounded-br-[260px] lg:rounded-tl-none lg:rounded-bl-none
                lg:left-0">
            </div>

            {/* IMAGE */}
            <img
              src={aboutImg}
              alt="designer"
              className="relative z-10 w-[300px] md:w-[420px] object-cover
                rounded-bl-2xl rounded-br-2xl"
            />
          </motion.div>

          {/* RIGHT TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-xl"
          >
            <p className="text-gray-300 leading-relaxed tracking-wide mb-6 text-[15px]">
              I’m a creative UI/UX Designer who enjoys turning complex ideas
              into simple, meaningful, and engaging digital experiences. My work
              blends user research, thoughtful interaction design, and strong 
              visual aesthetics to create products that feel intuitive and 
              purposeful.
            </p>

            <p className="text-gray-300 leading-relaxed tracking-wide mb-10 text-[15px]">
              I’ve worked on real-world projects involving web interfaces,
              visual assets, and 3D elements, and I’m comfortable collaborating
              with designers, marketers, and developers to bring ideas to life. 
              With a foundation in Digital Society and Digital Marketing, I 
              design with both users and business impact in mind.
            </p>

            {/* Download CV Button */}
            <a
              href="/Anil_Kumar_CV.pdf"
              download
              className="flex items-center justify-center w-fit bg-orange-500
              hover:bg-orange-600 transition px-6 py-3 rounded-md font-medium"
            >
              ⬇ Download CV
            </a>
          </motion.div>
        </div>

        {/* SKILLS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 mt-20 justify-items-center"
        >
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-2">

              {/* PROGRESS CIRCLE */}
              <div
                className="relative w-24 h-24 rounded-full flex items-center justify-center"
                style={{
                  background: `conic-gradient(#f97316 ${
                    skill.percent * 3.6
                  }deg, #2a2a2a 0deg)`
                }}
              >
                <div className="w-20 h-20 bg-[#111111] rounded-full flex items-center justify-center">
                  <img src={skill.icon} alt={skill.name} className="w-7" />
                </div>
              </div>

              <p className="text-orange-400 font-semibold text-[16px]">
                {skill.percent}%
              </p>

              <p className="text-gray-300 text-sm">{skill.name}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
