import React from 'react';
import { Ship, Globe, Users, Award, Target, Eye } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Ship className="w-8 h-8" />,
      title: "Agility",
      description: "Swift response to market changes and customer needs"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Passion",
      description: "Dedicated commitment to excellence in every service"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Innovation",
      description: "Cutting-edge solutions for modern logistics challenges"
    }
  ];

  const whatDrivesUs = [
    { label: "High Quality Service", color: "bg-blue-500" },
    { label: "Local Expertise", color: "bg-blue-400" },
    { label: "Customer Focus", color: "bg-blue-300" },
    { label: "Speed & Flexibility", color: "bg-gray-600" },
    { label: "Innovation", color: "bg-gray-700" },
    { label: "Passion", color: "bg-gray-500" }
  ];

  const locations = [
    { region: "India", ports: "All ports (Tuticorin, Chennai, Ennore, Krishnapatnam)" },
    { region: "UAE", ports: "All ports" },
    { region: "Bangladesh", ports: "Chittagong, Mongla" },
    { region: "China", ports: "All ports" },
    { region: "Singapore", ports: "All ports" },
    { region: "Korea", ports: "All ports" },
    { region: "Malaysia", ports: "All ports" },
    { region: "Indonesia", ports: "All ports" },
    { region: "Vietnam", ports: "All ports" },
    { region: "Sri Lanka", ports: "All ports" },
    { region: "Maldives", ports: "All ports" },
    { region: "Egypt", ports: "All ports" },
    { region: "USA", ports: "All ports" },
    { region: "Europe", ports: "All ports" },
    { region: "Africa", ports: "All ports" },
    { region: "Brazil", ports: "All ports" }
  ];

  const stats = [
    { number: "3", unit: "hrs", label: "Average Inquiry Response Time" },
    { number: "27", unit: "days", label: "Average Time between Vessel Departure and FDA" },
    { number: "4", unit: "%", label: "Discrepancy between PDA and FDA amount" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-tr from-blue-500 via-blue-300 to-yellow-200 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 mt-4 leading-tight">
            Reality Shipping
            <span className="block text-3xl md:text-4xl font-normal text-blue-100 mt-2">
              & Logistics
            </span>
          </h1>
          <p className="text-xl font-medium mb-10 max-w-3xl mx-auto text-blue-50">
            Your Maritime Reality, Our Passion and Priority
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-lg font-medium leading-relaxed">
              A modern global shipping agency and logistics company providing 
              first-class end-to-end services across all ports where we operate.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-3xl p-8 border-l-4 border-blue-500">
              <div className="flex items-center mb-6">
                <div className="bg-blue-500 rounded-full p-3 mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Providing a unique international first-class service driven by our vast experience, 
                continuous training of our people, and commitment to innovation.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-3xl p-8 border-l-4 border-blue-400">
              <div className="flex items-center mb-6">
                <div className="bg-blue-400 rounded-full p-3 mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the customer&apos;s preferred shipping agency offering a first-class end-to-end 
                quality service at international standards throughout our geographical coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-blue-500 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            What Drives Us
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {whatDrivesUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className={`${item.color} rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center text-white font-semibold text-xs hover:scale-105 transition-transform duration-300`}>
                  {item.label.split(' ')[0]}
                </div>
                <p className="text-sm font-medium text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Coverage */}
      <section className="py-16 bg-gradient-to-tr from-blue-500 via-blue-400 to-blue-200 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="bg-white/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Globe className="w-10 h-10 text-blue-100" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Global Coverage</h2>
            <p className="text-xl text-blue-100">Serving ports worldwide with local expertise</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {locations.map((location, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors duration-300">
                <h3 className="text-lg font-semibold mb-2 text-white">{location.region}</h3>
                <p className="text-sm text-blue-100">{location.ports}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Performance Stats
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-5xl font-bold text-blue-500 mb-2">
                  {stat.number}
                  <span className="text-2xl text-blue-400 ml-1">{stat.unit}</span>
                </div>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      {/* Contact CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work with Us?</h2>
          <p className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto">
            Contact us now for first-class shipping and logistics services
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="tel:+918291573141" className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300">
              +91 8291573141
            </a>
            <a href="mailto:info@realityshipping.com" className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              info@realityshipping.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;