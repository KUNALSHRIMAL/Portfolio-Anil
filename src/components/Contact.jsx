export default function Contact() {
  return (
    <section id="contact" className="w-full bg-[#111111] text-white py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-[32px] font-semibold mb-2">Contact me</h2>
          <p className="text-gray-400 text-sm">
            Cultivating Connections: Reach Out And Connect With Me
          </p>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            className="bg-[#1A1A1A] text-gray-300 px-4 py-3 rounded-md outline-none focus:ring-1 focus:ring-orange-500"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="bg-[#1A1A1A] text-gray-300 px-4 py-3 rounded-md outline-none focus:ring-1 focus:ring-orange-500"
          />

          {/* Phone */}
          <input
            type="text"
            placeholder="Phone Number"
            className="bg-[#1A1A1A] text-gray-300 px-4 py-3 rounded-md outline-none focus:ring-1 focus:ring-orange-500"
          />

          {/* Service */}
          <select
            className="bg-[#1A1A1A] text-gray-400 px-4 py-3 rounded-md outline-none focus:ring-1 focus:ring-orange-500"
          >
            <option>Service Of Interest</option>
            <option>UI/UX Design</option>
            <option>Web Design</option>
            <option>App Design</option>
            <option>Product Design</option>
          </select>

          {/* Timeline */}
          <input
            type="text"
            placeholder="Timeline"
            className="bg-[#1A1A1A] text-gray-300 px-4 py-3 rounded-md outline-none focus:ring-1 focus:ring-orange-500"
          />

          {/* Project Details */}
          <textarea
            placeholder="Project Details..."
            rows="5"
            className="bg-[#1A1A1A] text-gray-300 px-4 py-3 rounded-md outline-none focus:ring-1 focus:ring-orange-500 resize-none"
          ></textarea>

          {/* Button */}
          <div className="md:col-span-2 flex justify-end mt-4">
            <button
              type="submit"
              className="border border-gray-400 px-8 py-2 rounded-md hover:bg-orange-500 hover:border-orange-500 transition"
            >
              Send
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
