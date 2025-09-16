import React from 'react';
import { Calendar, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const EventsSection = () => {
  const events = [
    {
      type: "Online",
      title: "Grow on LinkedIn",
      description: "A comprehensive session to help you build your personal brand, grow your network, and unlock career opportunities using LinkedIn.",
      date: "27, September 2025",
      time: "TBD",
      location: "Online",
      attendees: "500+ students",
      price: "Free",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-600/20 to-cyan-600/20",
      borderColor: "border-blue-500/30 hover:border-blue-500/50"
    },
    {
      type: "Offline",
      title: "October Community Meetup",
      description: "An in-person networking and engagement event tailored for student innovators and sponsors. Open for sponsor branding & collaboration.",
      date: "October 2025",
      time: "TBD",
      location: "TBD (Offline)",
      attendees: "Let’s Discuss!",
      price: "Free",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-600/20 to-red-600/20",
      borderColor: "border-orange-500/30 hover:border-orange-500/50"
    },
    {
      type: "Workshop",
      title: "Hands-on with Agentic AI Tools",
      description: "Dive into hands-on exploration of the latest agentic AI tools and how they can be applied to solve real-world problems.",
      date: "October 2025",
      time: "TBD",
      location: "In-Person",
      attendees: "50–70 students",
      price: "Free",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-600/20 to-emerald-600/20",
      borderColor: "border-green-500/30 hover:border-green-500/50"
    }
  ];
  

  return (
    <section id="events" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Upcoming
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Events</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join exciting events, workshops, and hackathons happening in our community
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Event */}
            { /*
          <div className="lg:col-span-2">
            <div className="relative bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl p-8 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-[1.02] overflow-hidden">
             
              <div className="absolute top-0 right-0 bg-gradient-to-l from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-bl-2xl font-semibold text-sm">
                FEATURED
              </div>
               <div className="grid md:grid-cols-2 gap-8 items-center"> 
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-2 bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                    <span>Live Event</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white">Annual Tech Summit 2025</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Join industry leaders, innovators, and community members for our biggest event of the year. 
                    Featuring keynotes, workshops, and networking opportunities.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-purple-300">
                      <Calendar className="w-4 h-4" />
                      <span>March 15-17, 2025</span>
                    </div>
                    <div className="flex items-center space-x-2 text-purple-300">
                      <Users className="w-4 h-4" />
                      <span>500+ Attendees</span>
                    </div>
                  </div>
                  <Link href="/register-event">
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold cursor-pointer hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg">
                    Register Now
                  </button>
                  </Link>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl p-8 backdrop-blur-sm">
                    <div className="text-center space-y-4">
                      <div className="text-4xl font-bold text-white">3</div>
                      <div className="text-purple-300">Days</div>
                      <div className="text-2xl font-semibold text-white">15+</div>
                      <div className="text-purple-300">Speakers</div>
                      <div className="text-2xl font-semibold text-white">20+</div>
                      <div className="text-purple-300">Sessions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            */}

          {/* Regular Events */}
          {events.map((event, index) => (
            <div key={index} className={`bg-gradient-to-r ${event.bgColor} rounded-2xl p-6 border ${event.borderColor} transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`bg-gradient-to-r ${event.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {event.type}
                  </span>
                  {/* <span className="text-gray-300 text-sm">{event.attendees} registered</span> */}
                </div>
                
                <h3 className="text-xl font-bold text-white">{event.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{event.description}</p>
                
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date} at {event.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>📍 {event.location}</span>
                    <span className="font-semibold text-white">{event.price}</span>
                  </div>
                </div>
                
                <Link href="/register-event">
                <button className={`w-full bg-gradient-to-r ${event.color} text-white py-3 rounded-full font-semibold hover:opacity-90 cursor-pointer transition-all transform hover:scale-105`} >
                  Register Now
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center">
          <button className="group border c border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm cursor-pointer">
            <span className="flex items-center space-x-2">
              <span>View All Events</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;