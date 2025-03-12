
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: "Deeptansh",
      role: "Co-Founder & CEO",
      image: "https://res.cloudinary.com/doxoqdwpi/image/upload/v1741806431/co-founders/deeptansh_cr6dre.jpg",
      bio: "Revolutionizing the Indian EV sector with a bold vision and cutting-edge innovation for mass adoption.",
      social: {
        linkedin: "https://www.linkedin.com/in/deeptansh-nagrale-0645b9320/",
      }
    },
    {
      name: "Ravish",
      role: "Co-Founder & CTO",
      image: "https://res.cloudinary.com/doxoqdwpi/image/upload/v1741806432/co-founders/devravish_elhogk.jpg",
      bio: "Leading the development of cutting-edge EV technology with expertise in advanced systems.",
      social: {
        linkedin: "https://www.linkedin.com/in/i-am-ravish/",
      }
    },
    {
      name: "Shishir",
      role: "Co-Founder ",
      image: "https://res.cloudinary.com/doxoqdwpi/image/upload/v1741806431/co-founders/shishir_y41flq.jpg",
      bio: "Engineering next-gen EV solutions with a focus on performance and smart mobility.",
      social: {
        linkedin: "https://www.linkedin.com/in/shishir-chaurasiya/",
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our <span className="gradient-text">Team</span></h2>
          <p className="text-lg text-wattzy-gray max-w-2xl mx-auto">
            Founded by IIT Madras graduates with expertise in AI, sustainable energy, 
            and business development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-end space-x-3 mb-4">
                        <a href={member.social.linkedin} target='_blank' className="text-white hover:text-wattzy-blue transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-wattzy-blue font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-wattzy-gray text-sm">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold mb-4 text-center">Notable Achievements & Recognition</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <div className="h-6 w-6 text-blue-500 flex items-center justify-center font-bold">1</div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Hyundai Hope Grant</h4>
                <p className="text-wattzy-gray text-sm">Received funding for innovative EV infrastructure solutions</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <div className="h-6 w-6 text-purple-500 flex items-center justify-center font-bold">2</div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">IIT Madras Incubation</h4>
                <p className="text-wattzy-gray text-sm">Backed by one of India's premier technical institutions</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <div className="h-6 w-6 text-green-500 flex items-center justify-center font-bold">3</div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">MVP Development Complete</h4>
                <p className="text-wattzy-gray text-sm">Booking system ready with ML models in testing phase</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <div className="h-6 w-6 text-orange-500 flex items-center justify-center font-bold">4</div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Institutional Advisors</h4>
                <p className="text-wattzy-gray text-sm">Guidance from IIT Madras directors and professors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
