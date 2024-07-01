"use client"
import React from 'react';
import { Tabs, Image } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';

const services = [
  {
    key: '1',
    label: 'Ship Agency Services',
    image: '/inComponents/offshore.jpg',
    description: 'We support ship owners, managers, operators, and traders in achieving operational efficiency, cost optimization, and profitability through prompt services and live reporting. Our cargo vessel handling capabilities ensure precise and careful management of diverse cargo requirements, including tanker vessels, bulk/break bulk vessels, offshore vessels, LNG/LPG vessels, and container vessels. We also offer comprehensive husbandry services such as Owners Protecting Agency, bunkering coordination and supply, ship-to-ship transfer operations, crew change services, and Cash to Master. Our team of industry experts understands the complexities and challenges of vessel port calls and the need for quick turnarounds. Leveraging our extensive experience and deep local knowledge, we deliver specialized and customized services to meet the unique needs of each vessel.'
  },
  {
    key: '2',
    label: 'Logistics & Clearance',
    image: '/inComponents/logistics.jpg',
    description: 'We offer extensive logistics and clearance services to meet the varied needs of our clients, including clearing and forwarding, project cargo logistics, customs clearance, inland transportation, warehousing, and inventory management. Our expertise in customs clearance allows us to navigate the complexities and stay up-to-date with the latest procedures, ensuring smooth and efficient clearance of goods to minimize delays and avoid penalties. By leveraging advanced technologies and industry best practices, we ensure seamless operations throughout the supply chain.'
  },
  {
    key: '3',
    label: 'Marine Services & Offshore Supply',
    image: '/inComponents/ports.jpg',
    description: 'Leveraging our wide network of trusted suppliers and operators, we offer wide-ranging and comprehensive shipping and offshore supply services, which contribute to enhanced vessel performance, increased operational efficiency, environmental compliance, and time and cost savings. Our supply boat and marine product delivery ensure that you have all the essential supplies and spare parts you need, when you need them, so that you can focus on core operations. All our services are customised for different types of vessels and logistical requirements.'
  },
  {
    key: '4',
    label: 'Broking & Chartering',
    image: '/inComponents/broking.jpg',
    description: 'Our consultancy services provide expert guidance to help you make informed business decisions.'
  },
  {
    key: '5',
    label: 'Vessel Inspection',
    image: '/inComponents/inspec.jpg',
    description: 'Our skilled team of surveyors specializes in a range of surveys, including on-hire and off-hire surveys, bunker surveys, cargo supervision surveys, and damage surveys. These surveys offer valuable insights and reliable documentation, aiding informed decision-making, effective risk management, and compliance. Additionally, we provide inspection services on behalf of Protection and Indemnity (P&I) clubs. Our inspections ensure vessels meet essential safety and regulatory standards, thereby reducing the risk of incidents and enhancing the vessels overall safety record.'
  },
  {
    key: '6',
    label: 'Marine Products',
    image: '/inComponents/products.jpg',
    description: 'Dedicated to the marine industry and committed to excellence, we are your trusted partner in distributing and selling Lankhorst Ropes. Our carefully curated range of marine products caters to all types of vessels, from critical spare parts to urgent stores. Sourced from industry-leading manufacturers, our inventory meets the highest standards of quality and innovation. Customer satisfaction is our top priority. Our knowledgeable team is ready to assist with product selection and technical support, offering competitive prices and timely deliveries to ensure your vessels operate smoothly. Explore our extensive marine product range and discover why vessel owners and managers worldwide prefer us. '
  }
];

const ServicesTab = () => {
  return (
    <div className='pb-20'>
      <Tabs
        defaultActiveKey="1"
        centered
        items={services.map(service => ({
          label: service.label,
          key: service.key,
          children: (
            <div className='w-full flex md:flex-row flex-col justify-evenly items-center'>
              <AnimatePresence>
                <motion.div
                  initial={{ x:-200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Image src={service.image} alt={service.label} width={500} height={400} className='object-cover'/>
                </motion.div>
              </AnimatePresence>
              <p className='text-base text-black/80 max-w-md'>{service.description}</p>
            </div>
          ),
        }))}
        className="custom-tabs "  // Add custom class for styling
      />
    </div>
  )
}

export default ServicesTab;
