
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, MapPin, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Background blobs */}
      <div className="hero-blob hero-blob-1"></div>
      <div className="hero-blob hero-blob-2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="mb-4">
                <span className="gradient-text">AI-powered</span> EV Charging Marketplace
              </h1>
              <p className="text-lg md:text-xl text-wattzy-gray max-w-xl">
                Connecting EV charging providers with the right locations through AI-powered site selection, seamless booking, and business integration.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-wattzy-blue hover:bg-wattzy-blue/90 text-white">
                Join the EV Revolution
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-wattzy-blue text-wattzy-blue hover:bg-wattzy-blue/10">
                Learn More
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-wattzy-gray">
                <Zap className="h-5 w-5 text-wattzy-blue" />
                <span>AI-Powered Site Selection</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-wattzy-gray">
                <MapPin className="h-5 w-5 text-wattzy-blue" />
                <span>Location Marketplace</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-wattzy-gray">
                <Calendar className="h-5 w-5 text-wattzy-blue" />
                <span>Real-time Booking</span>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-wattzy-blue to-wattzy-green rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="aspect-[16/9] bg-slate-100 flex items-center justify-center">
                {/* This would ideally be a real image or animation */}
                <div className="p-8 text-center">
                  <div className="inline-flex">
                      <img src={`https://res.cloudinary.com/doxoqdwpi/image/upload/v1742100610/co-founders/wattzy_v7yq3c.png`}
                        alt="Wattzy Logo"
                        className="h-48"
                      />
                  </div>
                  <h3 className="text-wattzy-dark mb-3">An AI-powered EV Charging Marketplace</h3>
                  <p className="text-wattzy-gray">
                    Our AI algorithms identify optimal charging locations based on traffic patterns, power grid capacity, and user demand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
