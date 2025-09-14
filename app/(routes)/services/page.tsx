"use client";
import React from 'react';
import { 
  Ship, 
  Anchor, 
  Package, 
  Truck, 
  Plane, 
  Warehouse, 
  Users, 
  Settings,
  FileCheck,
  Zap,
  Globe,
  Shield,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Parallax } from 'react-parallax';
import { cn } from '@/lib/utils';

const ServicesPage = () => {
  const mainServices = [
    {
      icon: <Anchor className="w-10 h-10" />,
      title: "Port Agency",
      subtitle: "Full/Protective/Husbandry",
      color: "bg-blue-700",
      services: [
        "Crew Change",
        "Cargo Supervision", 
        "CTM (Cash to Master)",
        "Sludge Discharge",
        "Vessel Port Clearance",
        "Pre-Arrival Documentation",
        "Provisions",
        "Garbage Disposal",
        "Bunkering",
        "Surveyors",
        "Spare Parts Delivery & Clearance"
      ]
    },
    {
      icon: <Ship className="w-10 h-10" />,
      title: "Liner Agency",
      subtitle: "Comprehensive vessel operations",
      color: "bg-blue-600",
      services: [
        "Vessel Operations",
        "Sales Import/Exports",
        "Documentation Imports/Exports/Transshipments",
        "Special Cargo Handling (OOG/Dangerous Goods/Reefer)",
        "Transportation Rail and Trucking",
        "Transshipment Arrangements",
        "Feedering Arrangements",
        "Equipment Control"
      ]
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: "Logistics",
      subtitle: "End-to-end supply chain solutions",
      color: "bg-blue-500",
      services: [
        "Ocean & Air Freight",
        "Land Transport",
        "Door to Door services",
        "Warehousing",
        "Customs clearance",
        "Chartering & Broking",
        "Offshore oil & gas project services",
        "End to End logistics"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Ship Spare Parts",
      description: "Clearance & Purchase services for all vessel requirements",
      color: "bg-gray-600"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Dry Docking Digitalisation",
      description: "Modern digital solutions for dry docking operations",
      color: "bg-gray-700"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Husbandry Agency",
      description: "Crew Change & Vessel Support Services",
      color: "bg-gray-500"
    }
  ];

  const serviceHighlights = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Operations",
      description: "Round-the-clock support for all your maritime needs",
      color: "bg-blue-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Coverage",
      description: "Services available across major ports worldwide",
      color: "bg-blue-400"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trusted Expertise",
      description: "Experienced professionals with local knowledge",
      color: "bg-blue-300"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Response",
      description: "3-hour average inquiry response time",
      color: "bg-gray-600"
    }
  ];

  const image = "/services.jpg";
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Parallax
       bgImage={image} strength={-250}>
              <div style={{ height: 500 }} className='bg-black/12 relative'>
                <div className="absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-1">
                  <p className={cn("text-white text-3xl")}>Services</p>
                  <p
                    className={cn(
                      "text-white font-extrabold md:text-[35px] text-[30px] tracking-[0.03em]",
                      
                    )}
                  >
                    Explore our wide range of services
                  </p>
                  <p className={cn("text-white text-sm ")}>
                    Comprehensive solutions for all your maritime and logistics needs
                  </p>
                  
                </div>
              </div>
            </Parallax>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className={`${service.color} p-6 text-white`}>
                  <div className="flex items-center mb-4">
                    <div className="bg-white/20 rounded-full p-3 mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="text-blue-100 font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Additional Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className={`${service.color} rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceHighlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className={`${highlight.color} rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center text-white hover:scale-105 transition-transform duration-300`}>
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability & Innovation */}
      <section className="py-16 bg-blue-500 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-12">Sustainability & Innovation</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="bg-white/20 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Eco-Friendly Practices</h3>
                <p className="text-blue-100 leading-relaxed">
                  Our commitment to sustainability ensures we adopt eco-friendly practices, 
                  minimizing environmental impact while optimizing efficiency.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="bg-white/20 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Innovative Approaches</h3>
                <p className="text-blue-100 leading-relaxed">
                  We leverage our expertise and innovative approaches to overcome 
                  any logistical challenges and provide cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold shadow-lg">1</div>
              <h3 className="text-lg font-bold mb-2">Initial Inquiry</h3>
              <p className="text-gray-600 text-sm">Contact us with your requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-400 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold shadow-lg">2</div>
              <h3 className="text-lg font-bold mb-2">Quick Response</h3>
              <p className="text-gray-600 text-sm">3-hour average response time</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-300 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold shadow-lg">3</div>
              <h3 className="text-lg font-bold mb-2">Service Execution</h3>
              <p className="text-gray-600 text-sm">Professional service delivery</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold shadow-lg">4</div>
              <h3 className="text-lg font-bold mb-2">Follow-up</h3>
              <p className="text-gray-600 text-sm">Ensuring complete satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto">
            Experience first-class shipping and logistics services with our expert team. 
            Contact us today for a customized solution.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="tel:+918291573141" className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300">
              Call Now: +91 8291573141
            </a>
            <a href="mailto:info@realityshipping.com" className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Email Us
            </a>
          </div>
          <div className="mt-8 text-gray-400">
            <p>24/7 Operations Team Available</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;