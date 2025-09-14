import React from "react";

const Sponsors = () => {
  const premierSponsors = [
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    },
  ];

  const supportingSponsors = [
    {
      name: "OpenAI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    },
    {
      name: "GitHub",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    },
    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      name: "Vercel",
      logo: "https://assets.vercel.com/image/upload/v1662130559/front/vercel/dps.png",
    },
  ];

  const partners = [
    {
      name: "IIT Indore",
      logo: "https://upload.wikimedia.org/wikipedia/en/3/3c/IIT_Indore_Logo.png",
    },
    {
      name: "SVVV Indore",
      logo: "https://svvv.edu.in/images/logo.png",
    },
    {
      name: "Medicaps University",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/c1/Medicaps_University_logo.png",
    },
    {
      name: "DAVV Indore",
      logo: "https://upload.wikimedia.org/wikipedia/en/3/37/Devi_Ahilya_Vishwavidyalaya_logo.png",
    },
  ];

  return (
    <section id="sponsers" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sponsors
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We’re proud to be supported by leading companies, organizations, and institutions.
          </p>
        </div>

        {/* Premier Sponsors */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Premier Sponsors
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 items-center">
            {premierSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="flex justify-center items-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:scale-105 transition-transform shadow-xl"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-16 sm:h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Supporting Sponsors */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Supporting Sponsors
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
            {supportingSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="flex justify-center items-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-transform shadow-lg"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-12 sm:h-14 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Partners (Colleges from Indore)
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-transform shadow-md text-center space-y-4"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 sm:h-14 object-contain"
                />
                <span className="text-white font-medium">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
