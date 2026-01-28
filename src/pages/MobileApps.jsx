import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MobileBanner from '../assets/mobile-page-banner.png'

const MobileApps = () => {
  return (
    <>
      <Navbar />
      <section className="w-full min-h-screen bg-[#111111] text-white pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* TITLE */}
          <h2 className="text-[26px] sm:text-[32px] font-semibold italic mb-6">
            Project Title:-
          </h2>

          {/* SUBTITLE */}
          <p className="text-gray-300 text-[15px] sm:text-[17px] leading-relaxed mb-12">
            Designing Intuitive, Modern Mobile Experiences Across Entertainment, Travel, And Fitness
          </p>

          {/* MAIN IMAGE */}
          <div className="w-full overflow-hidden rounded-lg mb-16 ">
            <img
              src={MobileBanner} // <-- replace with your actual image
              alt="Mobile App UI"
              className="w-full object-cover opacity-14 sm:h-40 md:h-52"
            />
          </div>

          {/* OVERVIEW TITLE */}
          <h3 className="text-[24px] sm:text-[28px] italic font-semibold mb-6">
            Project Overview:-
          </h3>

          {/* OVERVIEW TEXT */}
          <p className="text-gray-300 leading-relaxed text-[15px] sm:text-[16px] mb-6">
            This Project Is A Collection Of Three Mobile Application UI Designs Created To Explore
            Different Product Domains And User Experiences. The Goal Was To Design Visually Appealing,
            User-Friendly Interfaces While Maintaining Strong Usability, Clear User Flows, And
            Consistent Design Systems.
          </p>

          <p className="text-gray-300 leading-relaxed text-[15px] sm:text-[16px] mb-4">
            The Project Includes:
          </p>

          {/* BULLET POINTS */}
          <ul className="text-gray-300 leading-relaxed text-[15px] sm:text-[16px] space-y-3 pl-4 list-disc">
            <li>
              A Movie Streaming Application Focused On Immersive Content Discovery And Viewing.
            </li>
            <li>
              A Travel And Timeline Application Designed For Route Navigation And Activity Tracking.
            </li>
            <li>
              A Fitness And Gym Application Featuring A Complete Onboarding Flow And Personalized
              Workout Planning.
            </li>
          </ul>

          <p className="text-gray-300 leading-relaxed text-[15px] sm:text-[16px] mt-6">
            Each App Was Designed With A Dark-Mode Aesthetic, Modern Typography, And Intuitive Layouts
            To Reflect Real-World, Production-Ready Mobile Applications.
          </p>
          {/* APP 1 SECTION */}
          <div className="mt-20">

            {/* Heading */}
            <h3 className="text-[18px] sm:text-[20px] text-orange-400 font-semibold tracking-wide mb-10">
              APP 1 — MOVIE STREAMING APPLICATION
            </h3>

            {/* BLOCK 1 — IMAGE LEFT / TEXT RIGHT */}
            <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">

              {/* IMAGE LEFT */}
              <img
                src="/images/m-app-1.png"
                alt="App 1 Screen"
                className="w-[260px] sm:w-[300px] rounded-xl shadow-lg"
              />

              {/* TEXT RIGHT */}
              <p className="text-gray-300 leading-relaxed text-[15px] sm:text-[16px] max-w-xl">
                This screen introduces the movie streaming app with a visually immersive concept
                focused on virtual reality entertainment. The bold headline and minimal
                call-to-action guide users toward signing up while immediately communicating
                the app’s core value.
              </p>
            </div>

            {/* BLOCK 2 — TEXT LEFT / IMAGE RIGHT */}
            <div className="flex flex-col lg:flex-row items-center gap-10">

              {/* TEXT LEFT */}
              <p className="text-gray-300 leading-relaxed text-[15px] sm:text-[16px] max-w-xl order-2 lg:order-1 letter-spacing-wide">
                This screen allows users to explore movies through a clean discovery layout.
                Categories, search functionality, and featured content are arranged to
                make browsing fast, intuitive, and enjoyable.
              </p>

              {/* IMAGE RIGHT */}
              <img
                src="/images/m-app-2.png"
                alt="App 1 Screen 2"
                className="w-[260px] sm:w-[300px] rounded-xl shadow-lg order-1 lg:order-2"
              />
            </div>
            {/* BLOCK 3 — IMAGE LEFT / TEXT RIGHT */}
            <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">

              {/* IMAGE LEFT */}
              <img
                src="/images/m-app-3.png"
                alt="App 1 Screen"
                className="w-[260px] sm:w-[300px] rounded-xl shadow-lg"
              />

              {/* TEXT RIGHT */}
              <p className="text-gray-300 leading-relaxed text-[15px] sm:text-[16px] max-w-xl">
                The movie details screen provides users with in-depth information including ratings, genres, duration, and cast. The layout emphasizes readability and engagement while maintaining a cinematic visual experience.
              </p>
            </div>

          </div>
          {/* APP 2 SECTION */}
          <div className="mt-20">

            {/* Heading */}
            <h3 className="text-[18px] sm:text-[20px] text-orange-400 font-semibold tracking-wide mb-10">
               APP 2 — TRAVEL & TIMELINE APPLICATION
            </h3>

            {/* BLOCK 1 — IMAGE LEFT / TEXT RIGHT */}
            <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">

              {/* IMAGE LEFT */}
              <img
                src="/images/m-app-21.png"
                alt="App 1 Screen"
                className="w-[260px] sm:w-[300px] rounded-xl shadow-lg"
              />

              {/* TEXT RIGHT */}
              <p className="text-gray-300 leading-relaxed text-[15px] sm:text-[16px] max-w-xl">
                This screen displays real-time navigation with route details such as distance, estimated time, and directions. The dark map interface reduces visual strain while keeping navigation data clear and accessible.
              </p>
            </div>

            {/* BLOCK 2 — TEXT LEFT / IMAGE RIGHT */}
            <div className="flex flex-col lg:flex-row items-center gap-10">

              {/* TEXT LEFT */}
              <p className="text-gray-300 leading-relaxed text-[15px] sm:text-[16px] max-w-xl order-2 lg:order-1 letter-spacing-wide">
                The timeline screen visualizes user activity data using charts and date filters. It helps users track movement patterns over time with a clean, minimal data-driven interface.
              </p>

              {/* IMAGE RIGHT */}
              <img
                src="/images/m-app-22.png"
                alt="App 1 Screen 2"
                className="w-[260px] sm:w-[300px] rounded-xl shadow-lg order-1 lg:order-2"
              />
            </div>

          </div>
           {/* APP 3 SECTION */}
          <div className="mt-20">

            {/* Heading */}
            <h3 className="text-[18px] sm:text-[20px] text-orange-400 font-semibold tracking-wide mb-10">
              APP 3 — FITNESS & GYM APPLICATION
            </h3>

            {/* BLOCK 1 — IMAGE LEFT / TEXT RIGHT */}
            <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">

              {/* IMAGE LEFT */}
              <img
                src="/images/m-app-31.png"
                alt="App 1 Screen"
                className="w-[260px] sm:w-[300px] rounded-xl shadow-lg"
              />

              {/* TEXT RIGHT */}
              <p className="text-gray-300 leading-relaxed text-[15px] sm:text-[16px] max-w-xl">
                This onboarding screen introduces the fitness app with motivational visuals and clear branding. The primary call-to-action encourages users to begin their fitness journey immediately.
              </p>
            </div>

            {/* BLOCK 2 — TEXT LEFT / IMAGE RIGHT */}
            <div className="flex flex-col lg:flex-row items-center gap-10">

              {/* TEXT LEFT */}
              <p className="text-gray-300 leading-relaxed text-[15px] sm:text-[16px] max-w-xl order-2 lg:order-1 letter-spacing-wide">
                The login screen provides a simple and secure way for users to access their accounts, featuring email login and social authentication options for convenience.
              </p>

              {/* IMAGE RIGHT */}
              <img
                src="/images/m-app-32.png"
                alt="App 1 Screen 2"
                className="w-[260px] sm:w-[300px] rounded-xl shadow-lg order-1 lg:order-2"
              />
            </div>
            {/* BLOCK 3 — IMAGE LEFT / TEXT RIGHT */}
            <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">

              {/* IMAGE LEFT */}
              <img
                src="/images/m-app-33.png"
                alt="App 1 Screen"
                className="w-[260px] sm:w-[300px] rounded-xl shadow-lg"
              />

              {/* TEXT RIGHT */}
              <p className="text-gray-300 leading-relaxed text-[15px] sm:text-[16px] max-w-xl">
                This screen personalizes the fitness experience by allowing users to select their gender. The interface is minimal and focused, making the selection process quick and intuitive.
              </p>
            </div>
            {/* BLOCK 4 — TEXT LEFT / IMAGE RIGHT */}
            <div className="flex flex-col lg:flex-row items-center gap-10">

              {/* TEXT LEFT */}
              <p className="text-gray-300 leading-relaxed text-[15px] sm:text-[16px] max-w-xl order-2 lg:order-1 letter-spacing-wide">
                Users select their age through a scroll-based picker designed for ease of use. The highlighted selection improves clarity while keeping the interface clean and distraction-free.
              </p>

              {/* IMAGE RIGHT */}
              <img
                src="/images/m-app-34.png"
                alt="App 1 Screen 2"
                className="w-[260px] sm:w-[300px] rounded-xl shadow-lg order-1 lg:order-2"
              />
            </div>
            {/* BLOCK 5 — IMAGE LEFT / TEXT RIGHT */}
            <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">

              {/* IMAGE LEFT */}
              <img
                src="/images/m-app-35.png"
                alt="App 1 Screen"
                className="w-[260px] sm:w-[300px] rounded-xl shadow-lg"
              />

              {/* TEXT RIGHT */}
              <p className="text-gray-300 leading-relaxed text-[15px] sm:text-[16px] max-w-xl">
                This screen collects weight information to personalize workout plans. The consistent design language ensures a smooth continuation of the onboarding experience.
              </p>
            </div>
             {/* BLOCK 6 — TEXT LEFT / IMAGE RIGHT */}
            <div className="flex flex-col lg:flex-row items-center gap-10">

              {/* TEXT LEFT */}
              <p className="text-gray-300 leading-relaxed text-[15px] sm:text-[16px] max-w-xl order-2 lg:order-1 letter-spacing-wide">
                The main dashboard displays personalized workout plans, daily routines, and exercise categories. The layout prioritizes clarity and motivation, helping users stay focused on their fitness goals.
              </p>

              {/* IMAGE RIGHT */}
              <img
                src="/images/m-app-36.png"
                alt="App 1 Screen 2"
                className="w-[260px] sm:w-[300px] rounded-xl shadow-lg order-1 lg:order-2"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default MobileApps

