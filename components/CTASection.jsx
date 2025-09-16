//CtaSection.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to Join Our
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Community?</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Start building meaningful connections today. It's free to join and takes less than 2 minutes to get started.
        </p>
        
        {/* Added Contact Line */}
        <p className="text-lg text-gray-400 mb-10">
          Reach out to us at <a href="mailto:Contactus@cracked.digital" className="text-pink-400 hover:underline">Contactus@cracked.digital</a>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
            <span className="flex items-center space-x-2">
              <span>Join Cracked Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTASection
