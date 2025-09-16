import React from 'react';
import { Users } from 'lucide-react';
import {  Linkedin, Instagram ,PhoneCallIcon, PhoneCall} from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Discover",
      links: ["Features", "Communities", "Events"]
    },
    {
      title: "Legal",
      links: ["Guidelines", "Privacy", "Terms Of Service"]
    },
    {
      title: "About Cracked",
      links: ["About", "Contact Us", "Branding Guidelines", "Community Values"]
    }
  ];

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Cracked</span>
            </div>
            <p className="text-gray-400">Building communities that matter.</p>
          </div>

          {/* Other Footer Sections */}
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

        {/* Bottom Section with Copyright + Socials */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
  <p className="text-gray-400 text-center md:text-left">
    &copy; 2025 Cracked. All rights reserved.
  </p>

  <div className="flex flex-col md:flex-row items-center md:space-x-6 mt-4 md:mt-0">
    {/* Phone number */}
    <a href="tel:+91 7697637149" className="text-gray-400 hover:text-white">
      <span>
    <PhoneCall className='inline mr-[10px]' / >+91 76976 37149
      </span>
    </a>

    {/* Social Icons */}
    <div className="flex space-x-4 mt-2 md:mt-0">
      <a href="https://www.linkedin.com/company/cracked-digital/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
        <Linkedin size={30} />
      </a>
      <a href="https://www.instagram.com/cracked.digital?igsh=MWllcHN5OHExbmFnag==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
        <Instagram size={30} />
      </a>
    </div>
  </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;
