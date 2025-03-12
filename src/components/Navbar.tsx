
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Zap, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-wattzy-blue" />
              <span className="text-xl font-bold text-wattzy-dark">Wattzy</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-wattzy-dark hover:text-wattzy-blue transition-colors">Solutions</a>
            <a href="#how-it-works" className="text-wattzy-dark hover:text-wattzy-blue transition-colors">How It Works</a>
            <a href="#team" className="text-wattzy-dark hover:text-wattzy-blue transition-colors">Team</a>
            <a href="#contact" className="text-wattzy-dark hover:text-wattzy-blue transition-colors">Contact</a>
            <Button className="bg-wattzy-blue hover:bg-wattzy-blue/90 text-white">Join Now</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-wattzy-dark hover:text-wattzy-blue"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#solutions" 
              className="block px-3 py-2 rounded-md text-base font-medium text-wattzy-dark hover:bg-slate-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </a>
            <a 
              href="#how-it-works" 
              className="block px-3 py-2 rounded-md text-base font-medium text-wattzy-dark hover:bg-slate-100"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#team" 
              className="block px-3 py-2 rounded-md text-base font-medium text-wattzy-dark hover:bg-slate-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-wattzy-dark hover:bg-slate-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-2">
              <Button className="w-full bg-wattzy-blue hover:bg-wattzy-blue/90 text-white">
                Join Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
