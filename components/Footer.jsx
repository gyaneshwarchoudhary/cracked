import React from 'react';
import { Users } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "connectHub",
      links: ["Features", "Communities", "Events"]
    },
    {
      title: "Support",
      links: [ "Guidelines", "Privacy", "Terms Of Serivice"]
    },{
      title:"About Cracked",
      links:["About", "Contact Us", "Branding Guidlines", "Community Values"]
    }
  ];

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ConnectHub</span>
            </div>
            <p className="text-gray-400">Building communities that matter.</p>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ConnectHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;