
import React from 'react';
import { 
  MapPin, 
  AlertTriangle, 
  Users, 
  ArrowRight, 
  Zap, 
  Store, 
  Calendar 
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const ProblemSolution = () => {
  const problems = [
    {
      icon: MapPin,
      title: "Poor Distribution",
      description: "Uneven placement of charging stations leads to coverage gaps and underutilized infrastructure."
    },
    {
      icon: AlertTriangle,
      title: "Location Challenges",
      description: "Finding optimal spots that balance grid capacity, traffic, and business viability is complex."
    },
    {
      icon: Users,
      title: "User Frustration",
      description: "EV owners face range anxiety and unreliable access to charging infrastructure."
    }
  ];

  const solutions = [
    {
      icon: Zap,
      title: "AI-Driven Placement",
      description: "Data-driven algorithms identify optimal charging station locations based on multiple factors."
    },
    {
      icon: Store,
      title: "Charger Marketplace",
      description: "Platform connecting EV infrastructure providers with high-value location owners."
    },
    {
      icon: Calendar,
      title: "Seamless Booking",
      description: "Real-time reservation system for EV owners ensures charging availability."
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">The <span className="gradient-text">Problem</span> & Our <span className="gradient-text">Solution</span></h2>
          <p className="text-lg text-wattzy-gray max-w-2xl mx-auto">
            India's EV infrastructure faces critical challenges that Wattzy addresses through innovative technology and marketplace dynamics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Problems Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-wattzy-dark">Current Challenges</h3>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex gap-4 items-start">
                      <div className="bg-red-100 p-3 rounded-full">
                        <problem.icon className="h-6 w-6 text-red-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{problem.title}</h4>
                        <p className="text-wattzy-gray">{problem.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Solutions Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-wattzy-dark">Wattzy's Approach</h3>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex gap-4 items-start">
                      <div className="bg-green-100 p-3 rounded-full">
                        <solution.icon className="h-6 w-6 text-wattzy-green" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{solution.title}</h4>
                        <p className="text-wattzy-gray">{solution.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Visual flow */}
        <div className="mt-16 flex justify-center">
          <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-8">
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center w-48 h-20">
              <p className="text-center font-medium">Problem Identification</p>
            </div>
            <ArrowRight className="text-wattzy-blue rotate-90 md:rotate-0" />
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center w-48 h-20">
              <p className="text-center font-medium">AI Data Analysis</p>
            </div>
            <ArrowRight className="text-wattzy-blue rotate-90 md:rotate-0" />
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center w-48 h-20">
              <p className="text-center font-medium">Marketplace Connection</p>
            </div>
            <ArrowRight className="text-wattzy-blue rotate-90 md:rotate-0" />
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center w-48 h-20">
              <p className="text-center font-medium">EV Infrastructure Growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
