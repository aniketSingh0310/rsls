import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export function NewServices() {
    return (
      <>
        <div id='title' className='w-full flex flex-col justify-center items-center text-center py-5'>
        <h4 className='text-[2.5em] font-bold'>Our Services</h4>
        <div className='bg-blue-400 p-1 w-[100px]'></div>
      </div>
        <div className="md:max-w-7xl w-[90%] flex justify-start mx-auto border-b py-5">
          Services
        </div>
        <Accordion type="single" collapsible className="md:max-w-7xl w-[90%] mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold text-lg">
              Container Sales & Leasing
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc ml-5 space-y-2">
                <li>Offers a wide range of containers for sale or lease.</li>
                <li>Flexible rental plans to suit short or long-term requirements.</li>
                <li>Available for dry cargo, refrigerated, and special containers.</li>
                <li>Reliable and timely delivery to various locations worldwide.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold text-lg">Husbanding</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc ml-5 space-y-2">
                <li>Comprehensive ship husbanding services for smooth port operations.</li>
                <li>Handling crew changes, ship provisions, and refueling.</li>
                <li>Efficient documentation management for customs and immigration.</li>
                <li>24/7 operational support ensuring timely and cost-effective services.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-bold text-lg space-y-2">Liner Services </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc ml-5">
                <li>Regular liner services connecting major global ports.</li>
                <li>Competitive rates with efficient routing and scheduling.</li>
                <li>Comprehensive cargo handling from loading to discharge.</li>
                <li>Container tracking and secure transport of goods.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-bold text-lg">
              Ship Spare Parts Digitalisation
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc ml-5 space-y-2">
                <li>Digital platform for tracking and ordering ship spare parts.</li>
                <li>Real-time updates on stock availability and delivery schedules.</li>
                <li>Improved efficiency in procurement and inventory management.</li>
                <li>Integration with global logistics networks for faster part delivery.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="item-5">
            <AccordionTrigger className="font-bold text-lg">Dry Docking</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc ml-5 space-y-2">
                <li>Full range of dry docking services for vessel maintenance and repair.</li>
                <li>Certified professionals ensuring compliance with industry standards.</li>
                <li>Quick turnaround times to minimize downtime.</li>
                <li>Cost-effective solutions for hull cleaning, painting, and repairs.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="item-6">
            <AccordionTrigger className="font-bold text-lg">Digitalisation</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc ml-5 space-y-2">
                <li>End-to-end digital transformation of shipping operations.</li>
                <li>Implementation of advanced technologies for process automation.</li>
                <li>Real-time data analytics for operational decision-making.</li>
                <li>Enhanced visibility and efficiency in logistics and supply chain management.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </>
    );
  }
  