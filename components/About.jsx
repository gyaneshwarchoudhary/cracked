// About.jsx
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/10"></div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
                alt="CRACKED Community"
                className="rounded-3xl transform transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500/20 to-pink-500/20"></div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-5xl font-extrabold tracking-tight text-white">
              About{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                CRACKED
              </span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="font-semibold text-white">CRACKED</span> is a
              student-driven community that empowers learners across{" "}
              <span className="text-white">technology, digital marketing, AI/ML</span>,
              and more. We bring students together through{" "}
              <span className="text-white">workshops, hackathons, and real-world projects</span>,
              creating an environment where skills are built by{" "}
              <span className="italic">doing, not just studying</span>. 
              Beyond learning, we act as a{" "}
              <span className="text-white font-semibold">service hub</span>,
              connecting companies with our talented student pool for projects,
              internships, and hiring. Our vision is to build an ecosystem where{" "}
              <span className="text-white">every student can learn, build, and earn</span>.
              From hands-on events to open-source contributions and career opportunities,
              we prepare students to be{" "}
              <span className="text-white font-semibold">industry-ready</span> while
              fostering collaboration and innovation.{" "}
              <span className="font-semibold text-pink-400">
                CRACKED is more than a community — it’s a launchpad for future-ready talent 🚀
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
