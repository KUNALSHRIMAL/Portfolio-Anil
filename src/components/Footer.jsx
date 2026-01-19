export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-gray-400 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* NAV LINKS */}
        <nav className="flex flex-wrap justify-center gap-8 text-sm mb-8">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#about" className="hover:text-white transition">About me</a>
          <a href="#portfolio" className="hover:text-white transition">Portfolio</a>
          <a href="#contact" className="hover:text-white transition">Contact me</a>
        </nav>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-4 mb-8">
          {["instagram", "linkedin", "twitter", "behance"].map((icon) => (
            <a
              key={icon}
              href="#"
              className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition"
            >
              <img src={`/icons/${icon}.png`} alt={icon} className="w-4" />
            </a>
          ))}
        </div>

        {/* CONTACT INFO */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm mb-8">
          <div className="flex items-center gap-2">
            <span>✉</span>
            <span>anyadav813@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span>+91 98960 29969</span>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-gray-700 mb-6"></div>

        {/* COPYRIGHT */}
        <p className="text-xs">
          Designed by © Anil UI/UX designer
        </p>
      </div>
    </footer>
  );
}
