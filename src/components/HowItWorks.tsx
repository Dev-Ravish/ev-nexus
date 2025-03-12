
import React from 'react';
import { 
  Search, 
  BarChart, 
  Store, 
  Calendar, 
  LineChart 
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const features = [
    {
      icon: Search,
      title: "AI-Powered Site Selection",
      description: "Our algorithms analyze traffic patterns, grid capacity, land usage and demographics to identify optimal EV charger locations.",
      color: "bg-blue-500"
    },
    {
      icon: Store,
      title: "EV Charger Marketplace",
      description: "A platform connecting charger providers with property owners and businesses looking to host charging stations.",
      color: "bg-green-500"
    },
    {
      icon: Calendar,
      title: "Seamless Booking System",
      description: "EV users can find and reserve charging slots in real-time, reducing wait times and improving the charging experience.",
      color: "bg-purple-500"
    },
    {
      icon: LineChart,
      title: "Analytics & Insights",
      description: "Businesses gain valuable data on usage patterns, revenue generation, and infrastructure optimization opportunities.",
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">How <span className="gradient-text">Wattzy</span> Works</h2>
          <p className="text-lg text-wattzy-gray max-w-2xl mx-auto">
            Our integrated approach connects all stakeholders in the EV ecosystem through
            intelligent technology and streamlined processes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className={`inline-flex p-3 rounded-xl ${feature.color} bg-opacity-10 mb-4`}>
                    <feature.icon className={`h-8 w-8 text-${feature.color.substring(3)}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-wattzy-gray">{feature.description}</p>
                </div>
                
                {/* Feature visualization placeholder */}
                <div className="bg-slate-100 rounded-lg p-4 h-40 flex items-center justify-center">
                  <p className="text-wattzy-gray text-sm">Interactive visualization coming soon</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-wattzy-gray mb-6">
            Wattzy's platform ensures an optimal experience for all stakeholders in the EV ecosystem
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-wattzy-blue/5 p-6 rounded-xl">
              <h4 className="text-lg font-bold text-wattzy-blue mb-2">For EV Drivers</h4>
              <p className="text-sm text-wattzy-gray">
                Reliable access to charging stations with real-time availability and booking
              </p>
            </div>
            
            <div className="bg-wattzy-green/5 p-6 rounded-xl">
              <h4 className="text-lg font-bold text-wattzy-green mb-2">For Businesses</h4>
              <p className="text-sm text-wattzy-gray">
                New revenue streams and increased foot traffic from EV charging infrastructure
              </p>
            </div>
            
            <div className="bg-purple-500/5 p-6 rounded-xl">
              <h4 className="text-lg font-bold text-purple-500 mb-2">For Charge Providers</h4>
              <p className="text-sm text-wattzy-gray">
                Optimized placement decisions and higher utilization rates
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
