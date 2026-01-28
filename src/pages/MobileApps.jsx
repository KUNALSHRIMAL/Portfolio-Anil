import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileBanner from "../assets/mobile-page-banner.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25 } },
};

const MobileApps = () => {
  return (
    <>
      <Navbar />

      <section className="w-full min-h-screen bg-[#111111] text-white pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* PAGE TITLE */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-[26px] sm:text-[32px] font-semibold italic mb-6"
          >
            Project Title:-
          </motion.h2>

          {/* SUBTITLE */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-gray-300 text-[15px] sm:text-[17px] leading-relaxed mb-12"
          >
            Designing Intuitive, Modern Mobile Experiences Across Entertainment,
            Travel, And Fitness
          </motion.p>

          {/* MAIN BANNER */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="w-full overflow-hidden rounded-lg mb-16"
          >
            <img
              src={MobileBanner}
              alt="Mobile App UI"
              className="w-full opacity-45 h-40 object-cover"
            />
          </motion.div>

          {/* OVERVIEW */}
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-[24px] sm:text-[28px] italic font-semibold mb-6"
          >
            Project Overview:-
          </motion.h3>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <motion.p variants={fadeUp} className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
              This Project Is A Collection Of Three Mobile Application UI Designs Created To Explore
              Different Product Domains And User Experiences…
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
              The Project Includes:
            </motion.p>

            <motion.ul
              variants={fadeUp}
              className="space-y-3 text-gray-300 pl-5 list-disc text-[15px] sm:text-[16px]"
            >
              <li>A Movie Streaming Application Focused On Immersive Content Discovery</li>
              <li>A Travel And Timeline Application Designed For Route Navigation</li>
              <li>A Fitness And Gym Application Featuring Personalized Workout Planning</li>
            </motion.ul>

            <motion.p variants={fadeUp} className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
              Each App Was Designed With A Dark-Mode Aesthetic, Modern Typography…
            </motion.p>
          </motion.div>

          {/* APP SECTIONS */}
          {/* --------------------------------------------------------- */}
          {/* 🔥 REUSABLE BLOCK COMPONENT */}
          <AppSection
            title="APP 1 — MOVIE STREAMING APPLICATION"
            blocks={[
              {
                img: "/images/m-app-1.png",
                text: `This screen introduces the movie streaming app with a visually immersive concept focused on virtual reality entertainment. The bold headline and minimal call-to-action guide users toward signing up while immediately communicating the app’s core value.`,
              },
              {
                img: "/images/m-app-2.png",
                text: `This screen allows users to explore movies through a clean discovery layout. Categories, search functionality, and featured content are arranged to make browsing fast, intuitive, and enjoyable.`,
                reverse: true,
              },
              {
                img: "/images/m-app-3.png",
                text: `The movie details screen provides users with in-depth information including ratings, genres, duration, and cast. The layout emphasizes readability and engagement while maintaining a cinematic visual experience.`,
              },
            ]}
          />

          <AppSection
            title="APP 2 — TRAVEL & TIMELINE APPLICATION"
            blocks={[
              {
                img: "/images/m-app-21.png",
                text: `This screen displays real-time navigation with route details such as distance, estimated time, and directions. The dark map interface reduces visual strain while keeping navigation data clear and accessible.`,
              },
              {
                img: "/images/m-app-22.png",
                text: `The timeline screen visualizes user activity data using charts and date filters. It helps users track movement patterns over time with a clean, minimal data-driven interface.`,
                reverse: true,
              },
            ]}
          />

          <AppSection
            title="APP 3 — FITNESS & GYM APPLICATION"
            blocks={[
              {
                img: "/images/m-app-31.png",
                text: `This onboarding screen introduces the fitness app with motivational visuals and clear branding. The primary call-to-action encourages users to begin their fitness journey immediately.`,
              },
              {
                img: "/images/m-app-32.png",
                text: `The login screen provides a simple and secure way for users to access their accounts, featuring email login and social authentication options for convenience.`,
                reverse: true,
              },
              {
                img: "/images/m-app-33.png",
                text: `This screen personalizes the fitness experience by allowing users to select their gender. The interface is minimal and focused, making the selection process quick and intuitive.`,
              },
              {
                img: "/images/m-app-34.png",
                text: `Users select their age through a scroll-based picker designed for ease of use. The highlighted selection improves clarity while keeping the interface clean and distraction-free.`,
                reverse: true,
              },
              {
                img: "/images/m-app-35.png",
                text: `This screen collects weight information to personalize workout plans. The consistent design language ensures a smooth continuation of the onboarding experience.`,
              },
              {
                img: "/images/m-app-36.png",
                text: `The main dashboard displays personalized workout plans, daily routines, and exercise categories. The layout prioritizes clarity and motivation, helping users stay focused on their fitness goals.`,
                reverse: true,
              },
            ]}
          />

        </div>
      </section>

      <Footer />
    </>
  );
};

/* ---------------------------------------------------------------------- */
/* 🔥 REUSABLE COMPONENT FOR EACH APP SECTION (ANIMATED) */
/* ---------------------------------------------------------------------- */

const AppSection = ({ title, blocks }) => {
  return (
    <motion.div
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mt-20"
    >
      <motion.h3
        variants={fadeUp}
        className="text-[18px] sm:text-[20px] text-orange-400 font-semibold tracking-wide mb-10"
      >
        {title}
      </motion.h3>

      {blocks.map((block, index) => (
        <motion.div
          key={index}
          variants={fadeUp}
          className={`flex flex-col lg:flex-row items-center gap-10 mb-20 ${
            block.reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          <img
            src={block.img}
            alt="App Screen"
            className="w-[260px] sm:w-[300px] rounded-xl shadow-lg"
          />

          <p className=" text-[#d3d3d3]
                  text-[18px]
                  sm:text-[20px]
                  leading-[1.6]
                  tracking-[0.02em]
                  italic
                  font-normal
                  max-w-xl">
            {block.text}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MobileApps;
