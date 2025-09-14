import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
              alt="Community Vision"
              className="rounded-3xl shadow-xl hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500/20 to-pink-500/20"></div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Vision</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              At <span className="font-semibold text-white">ConnectHub</span>, our vision is to create a thriving ecosystem
              where passionate individuals, innovators, and learners come together
              to share knowledge, collaborate, and grow.  
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We believe in building meaningful relationships, supporting creativity,
              and empowering communities to shape the future. By fostering inclusivity,
              collaboration, and learning, we aim to be the go-to platform for 
              connecting people across industries and interests.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Together, we’re not just building a community — we’re building a movement. 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
