"use client"
import React from 'react';
import { Users, MessageCircle, Calendar,Bolt, LaptopIcon, Handshake, Globe } from 'lucide-react';

// const features = [
//   {
//     icon: Users,
//     title: "Connect & Network",
//     description: "Build meaningful relationships with like-minded individuals in our vibrant community."
//   },
//   {
//     icon: MessageCircle,
//     title: "Discussion Forums",
//     description: "Engage in thoughtful conversations and share knowledge across various topics."
//   },
//   {
//     icon: Calendar,
//     title: "Events & Meetups",
//     description: "Join exciting events, workshops, and meetups both online and in-person."
//   }
// ];
const features = [
  {
    icon: <Bolt className="text-pink-400" size={24} />,
    title: "Action-Oriented Learning",
    description: "We focus on doing, not just listening. Students build real projects from day one — no fluff, no filler.",
  },
  {
    icon: <Users className="text-purple-400" size={24} />,
    title: "Tight-Knit Community",
    description: "We foster deep connections, where mentors, peers, and professionals collaborate across disciplines.",
  },
  {
    icon: <LaptopIcon className="text-pink-400" size={24} />,
    title: "Real-World Integration",
    description: "From open-source to client work, our students engage in practical, impactful experiences — not simulations.",
  },
  {
    icon: <Handshake className="text-purple-400" size={24} />,
    title: "Industry Partnerships",
    description: "We bridge the gap between learning and employment, with direct pipelines to internships and jobs.",
  },
  {
    icon: <Globe className="text-pink-400" size={24} />,
    title: "Cross-Domain Access",
    description: "Designers, developers, marketers, and AI/ML enthusiasts thrive together — innovation knows no boundaries.",
  },
];

const FeaturesSection = () => {

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* <section className=""> */}
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            What <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Makes Us Different</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We’re not just another learning platform. Our approach is bold, practical, and deeply human — blending skill-building, real-world impact, and community.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-gray-300 hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;