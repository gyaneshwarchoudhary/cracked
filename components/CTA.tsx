// "use client"
// import React, { useState, useEffect } from 'react';
// import { ChevronDown, Users, MessageCircle, Calendar, Star, ArrowRight, Menu, X } from 'lucide-react';

// export default function CommunityLanding() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const canvas = document.getElementById('particles-canvas');
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     let particles = [];
//     let animationId;

//     // Set canvas size
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resizeCanvas();
//     window.addEventListener('resize', resizeCanvas);

//     // Particle class
//     class Particle {
//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.vx = (Math.random() - 0.5) * 0.5;
//         this.vy = (Math.random() - 0.5) * 0.5;
//         this.radius = Math.random() * 2 + 1;
//         this.opacity = Math.random() * 0.5 + 0.2;
//         this.color = Math.random() > 0.5 ? '147, 51, 234' : '219, 39, 119'; // purple or pink
//       }

//       update() {
//         this.x += this.vx;
//         this.y += this.vy;

//         if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
//         if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
//       }

//       draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
//         ctx.fill();
//       }
//     }

//     // Create particles
//     for (let i = 0; i < 100; i++) {
//       particles.push(new Particle());
//     }

//     // Draw connections between nearby particles
//     const drawConnections = () => {
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < 100) {
//             ctx.strokeStyle = `rgba(147, 51, 234, ${0.1 * (1 - distance / 100)})`;
//             ctx.lineWidth = 0.5;
//             ctx.beginPath();
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.stroke();
//           }
//         }
//       }
//     };

//     // Animation loop
//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       particles.forEach(particle => {
//         particle.update();
//         particle.draw();
//       });

//       drawConnections();
//       animationId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener('resize', resizeCanvas);
//       if (animationId) {
//         cancelAnimationFrame(animationId);
//       }
//     };
//   }, []);

//   const features = [
//     {
//       icon: Users,
//       title: "Connect & Network",
//       description: "Build meaningful relationships with like-minded individuals in our vibrant community."
//     },
//     {
//       icon: MessageCircle,
//       title: "Discussion Forums",
//       description: "Engage in thoughtful conversations and share knowledge across various topics."
//     },
//     {
//       icon: Calendar,
//       title: "Events & Meetups",
//       description: "Join exciting events, workshops, and meetups both online and in-person."
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Sarah Chen",
//       role: "Community Member",
//       content: "This community has transformed my professional network and personal growth journey.",
//       rating: 5
//     },
//     {
//       name: "Alex Rodriguez",
//       role: "Event Organizer",
//       content: "The platform makes organizing and attending events incredibly seamless and enjoyable.",
//       rating: 5
//     },
//     {
//       name: "Maya Patel",
//       role: "Discussion Leader",
//       content: "I've found my tribe here. The discussions are insightful and the people are amazing.",
//       rating: 5
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       {/* Navigation */}
//       <nav className={`fixed w-full z-50 transition-all duration-300 ${
//         scrollY > 50 ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
//       }`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center space-x-2">
//               <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
//                 <Users className="w-5 h-5 text-white" />
//               </div>
//               <span className="text-xl font-bold text-white">ConnectHub</span>
//             </div>
            
//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
//               <a href="#community" className="text-gray-300 hover:text-white transition-colors">Community</a>
//               <a href="#events" className="text-gray-300 hover:text-white transition-colors">Events</a>
//               <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
//                 Join Now
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button 
//               className="md:hidden text-white"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {isMenuOpen && (
//             <div className="md:hidden bg-black/95 backdrop-blur-md rounded-lg mt-2 p-4 space-y-4">
//               <a href="#features" className="block text-gray-300 hover:text-white transition-colors">Features</a>
//               <a href="#community" className="block text-gray-300 hover:text-white transition-colors">Community</a>
//               <a href="#events" className="block text-gray-300 hover:text-white transition-colors">Events</a>
//               <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all">
//                 Join Now
//               </button>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Particles Canvas */}
//         <canvas 
//           id="particles-canvas"
//           className="absolute inset-0 z-0"
//           style={{ background: 'transparent' }}
//         />
        
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 z-1">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
//         </div>

//         <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
//           <div className="space-y-8">
//             <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-gray-300">
//               <Star className="w-4 h-4 text-yellow-400" />
//               <span>Join 50,000+ active community members</span>
//             </div>
            
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
//               Where
//               <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
//                 {" "}Communities{" "}
//               </span>
//               Thrive
//             </h1>
            
//             <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//               Connect with passionate individuals, share knowledge, and build lasting relationships in a space designed for meaningful interactions.
//             </p>
            
//             <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//               <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
//                 <span className="flex items-center space-x-2">
//                   <span>Get Started Free</span>
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </span>
//               </button>
              
//               <button className="border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm">
//                 Explore Communities
//               </button>
//             </div>
//           </div>
          
          
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-20 relative">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
//               Everything You Need to
//               <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Connect</span>
//             </h2>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//               Powerful features designed to foster genuine connections and meaningful conversations
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <div key={index} className="group relative">
//                 <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
//                   <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
//                     <feature.icon className="w-7 h-7 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
//                   <p className="text-gray-300 leading-relaxed">{feature.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             {[
//               { number: "50K+", label: "Active Members" },
//               { number: "500+", label: "Communities" },
//               { number: "10K+", label: "Events Hosted" },
//               { number: "98%", label: "Satisfaction Rate" }
//             ].map((stat, index) => (
//               <div key={index} className="space-y-2">
//                 <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-300 text-lg">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Events Section */}
//       <section id="events" className="py-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
//               Upcoming
//               <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Events</span>
//             </h2>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//               Join exciting events, workshops, and hackathons happening in our community
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-8 mb-12">
//             {/* Featured Event */}
//             <div className="lg:col-span-2">
//               <div className="relative bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl p-8 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-[1.02] overflow-hidden">
//                 <div className="absolute top-0 right-0 bg-gradient-to-l from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-bl-2xl font-semibold text-sm">
//                   FEATURED
//                 </div>
//                 <div className="grid md:grid-cols-2 gap-8 items-center">
//                   <div className="space-y-6">
//                     <div className="inline-flex items-center space-x-2 bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm">
//                       <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
//                       <span>Live Event</span>
//                     </div>
//                     <h3 className="text-3xl font-bold text-white">Annual Tech Summit 2025</h3>
//                     <p className="text-gray-300 text-lg leading-relaxed">
//                       Join industry leaders, innovators, and community members for our biggest event of the year. 
//                       Featuring keynotes, workshops, and networking opportunities.
//                     </p>
//                     <div className="flex flex-wrap gap-4 text-sm">
//                       <div className="flex items-center space-x-2 text-purple-300">
//                         <Calendar className="w-4 h-4" />
//                         <span>March 15-17, 2025</span>
//                       </div>
//                       <div className="flex items-center space-x-2 text-purple-300">
//                         <Users className="w-4 h-4" />
//                         <span>500+ Attendees</span>
//                       </div>
//                     </div>
//                     <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg">
//                       Register Now - $99
//                     </button>
//                   </div>
//                   <div className="relative">
//                     <div className="bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl p-8 backdrop-blur-sm">
//                       <div className="text-center space-y-4">
//                         <div className="text-4xl font-bold text-white">3</div>
//                         <div className="text-purple-300">Days</div>
//                         <div className="text-2xl font-semibold text-white">15+</div>
//                         <div className="text-purple-300">Speakers</div>
//                         <div className="text-2xl font-semibold text-white">20+</div>
//                         <div className="text-purple-300">Sessions</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Regular Events */}
//             {[
//               {
//                 type: "Meetup",
//                 title: "React Developers Meetup",
//                 description: "Monthly meetup for React developers to share knowledge, discuss latest trends, and network.",
//                 date: "Feb 28, 2025",
//                 time: "6:00 PM EST",
//                 location: "Virtual",
//                 attendees: "150+",
//                 price: "Free",
//                 color: "from-blue-500 to-cyan-500",
//                 bgColor: "from-blue-600/20 to-cyan-600/20",
//                 borderColor: "border-blue-500/30 hover:border-blue-500/50"
//               },
//               {
//                 type: "Hackathon",
//                 title: "AI Innovation Hackathon",
//                 description: "48-hour hackathon focused on building innovative AI solutions for real-world problems.",
//                 date: "Mar 8-10, 2025",
//                 time: "9:00 AM EST",
//                 location: "Hybrid",
//                 attendees: "200+",
//                 price: "Free",
//                 color: "from-green-500 to-emerald-500",
//                 bgColor: "from-green-600/20 to-emerald-600/20",
//                 borderColor: "border-green-500/30 hover:border-green-500/50"
//               },
//               {
//                 type: "Workshop",
//                 title: "UX/UI Design Masterclass",
//                 description: "Learn advanced design principles and hands-on techniques from industry experts.",
//                 date: "Mar 5, 2025",
//                 time: "2:00 PM EST",
//                 location: "In-Person",
//                 attendees: "80+",
//                 price: "$25",
//                 color: "from-pink-500 to-rose-500",
//                 bgColor: "from-pink-600/20 to-rose-600/20",
//                 borderColor: "border-pink-500/30 hover:border-pink-500/50"
//               },
//               {
//                 type: "Meetup",
//                 title: "Startup Founders Circle",
//                 description: "Connect with fellow entrepreneurs, share experiences, and discuss challenges and solutions.",
//                 date: "Mar 12, 2025",
//                 time: "7:00 PM EST",
//                 location: "Virtual",
//                 attendees: "120+",
//                 price: "Free",
//                 color: "from-orange-500 to-red-500",
//                 bgColor: "from-orange-600/20 to-red-600/20",
//                 borderColor: "border-orange-500/30 hover:border-orange-500/50"
//               }
//             ].map((event, index) => (
//               <div key={index} className={`bg-gradient-to-r ${event.bgColor} rounded-2xl p-6 border ${event.borderColor} transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}>
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between">
//                     <span className={`bg-gradient-to-r ${event.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
//                       {event.type}
//                     </span>
//                     <span className="text-gray-300 text-sm">{event.attendees} registered</span>
//                   </div>
                  
//                   <h3 className="text-xl font-bold text-white">{event.title}</h3>
//                   <p className="text-gray-300 text-sm leading-relaxed">{event.description}</p>
                  
//                   <div className="space-y-2 text-sm text-gray-400">
//                     <div className="flex items-center space-x-2">
//                       <Calendar className="w-4 h-4" />
//                       <span>{event.date} at {event.time}</span>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span>📍 {event.location}</span>
//                       <span className="font-semibold text-white">{event.price}</span>
//                     </div>
//                   </div>
                  
//                   <button className={`w-full bg-gradient-to-r ${event.color} text-white py-3 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105`}>
//                     Register Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* View All Events Button */}
//           <div className="text-center">
//             <button className="group border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm">
//               <span className="flex items-center space-x-2">
//                 <span>View All Events</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </span>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
//               Loved by Our
//               <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Community</span>
//             </h2>
//             <p className="text-xl text-gray-300">Real stories from real people</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
//                 <div className="flex mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                   ))}
//                 </div>
//                 <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
//                 <div>
//                   <div className="font-semibold text-white">{testimonial.name}</div>
//                   <div className="text-purple-400 text-sm">{testimonial.role}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
//         <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
//             Ready to Join Our
//             <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Community?</span>
//           </h2>
//           <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//             Start building meaningful connections today. It's free to join and takes less than 2 minutes to get started.
//           </p>
//           <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//             <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
//               <span className="flex items-center space-x-2">
//                 <span>Join ConnectHub Free</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </span>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-white/10 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div className="space-y-4">
//               <div className="flex items-center space-x-2">
//                 <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
//                   <Users className="w-5 h-5 text-white" />
//                 </div>
//                 <span className="text-xl font-bold text-white">ConnectHub</span>
//               </div>
//               <p className="text-gray-400">Building communities that matter.</p>
//             </div>
            
//             {[
//               {
//                 title: "Product",
//                 links: ["Features", "Communities", "Events", "Pricing"]
//               },
//               {
//                 title: "Company",
//                 links: ["About", "Blog", "Careers", "Contact"]
//               },
//               {
//                 title: "Support",
//                 links: ["Help Center", "Guidelines", "Privacy", "Terms"]
//               }
//             ].map((section, index) => (
//               <div key={index} className="space-y-4">
//                 <h4 className="font-semibold text-white">{section.title}</h4>
//                 <ul className="space-y-2">
//                   {section.links.map((link, linkIndex) => (
//                     <li key={linkIndex}>
//                       <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
          
//           <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
//             <p>&copy; 2025 ConnectHub. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }