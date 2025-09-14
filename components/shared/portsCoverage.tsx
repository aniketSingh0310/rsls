import React from 'react';
import { Ship, Anchor } from 'lucide-react';
import Image from 'next/image';

const PortsCoverageDisplay = () => {
  const portsData = [
    { country: "India", code: "IN", coverage: "All ports", color: "from-orange-400 to-green-500" },
    { country: "Indonesia", code: "ID", coverage: "All ports", color: "from-red-500 to-white" },
    { country: "USA", code: "US", coverage: "All ports", color: "from-blue-600 to-red-500" },
    { country: "UAE", code: "AE", coverage: "All ports", color: "from-green-500 to-red-500" },
    { country: "Vietnam", code: "VN", coverage: "All ports", color: "from-red-500 to-yellow-400" },
    { country: "Europe", code: "EU", coverage: "All ports", color: "from-blue-600 to-yellow-400" },
    { country: "Bangladesh", code: "BD", coverage: "Chittagong, Mongla", color: "from-green-500 to-red-500" },
    { country: "Singapore", code: "SG", coverage: "All ports", color: "from-red-500 to-white" },
    { country: "Africa", code: "ZA", coverage: "All ports", color: "from-green-500 to-yellow-400" },
    { country: "Maldives", code: "MV", coverage: "Kulhudhuffushi", color: "from-red-500 to-green-500" },
    { country: "China", code: "CN", coverage: "All ports", color: "from-red-500 to-yellow-400" },
    { country: "Brazil", code: "BR", coverage: "All ports", color: "from-green-500 to-yellow-400" },
    { country: "Egypt", code: "EG", coverage: "All ports", color: "from-red-500 to-black" },
    { country: "Korea", code: "KR", coverage: "All ports", color: "from-blue-500 to-red-500" },
    { country: "Sri Lanka", code: "LK", coverage: "All ports", color: "from-orange-500 to-green-500" },
    { country: "Malaysia", code: "MY", coverage: "All ports", color: "from-red-500 to-blue-600" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Ship className="text-white w-12 h-12" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-black drop-shadow-lg">
            Ports We Cover
          </h1>
        </div>

        {/* Ports Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {portsData.map((location, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-4 bg-blue-400 rounded-xl hover:bg-white/20 transition-all duration-300 shadow-sm"
            >
              {/* Flag */}
              <div className="relative">
                <div className="w-14 h-14 rounded-full overflow-hidden shadow-md ring-2 ring-white/20 group-hover:ring-white/40 transition-all">
                  <Image
                    width={200}
                    height={200}
                    src={`https://flagsapi.com/${location.code}/flat/64.png`}
                    alt={`${location.country} flag`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                  <Anchor className="w-3 h-3 text-white" />
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors">
                  {location.country}
                </h3>
                <p className="text-blue-200 text-sm">{location.coverage}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">16+</div>
              <div className="text-blue-200 text-xs sm:text-sm uppercase tracking-wide">Countries</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-blue-200 text-xs sm:text-sm uppercase tracking-wide">Major Ports</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-blue-200 text-xs sm:text-sm uppercase tracking-wide">Operations</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-white text-blue-700 px-8 sm:px-4 py-3 sm:py-4 rounded-md font-bold text-md sm:text-xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Explore Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortsCoverageDisplay;
