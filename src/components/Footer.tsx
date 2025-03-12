
import React from 'react';
import { Zap, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-wattzy-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-wattzy-blue" />
              <span className="text-xl font-bold">Wattzy</span>
            </div>
            <p className="text-slate-400 mb-4">
              AI-powered EV charging marketplace connecting providers with optimal locations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-wattzy-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-wattzy-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-wattzy-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-wattzy-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold mb-4 text-lg">Company</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold mb-4 text-lg">Solutions</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">For Businesses</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">For EV Owners</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">For Charge Providers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">For Municipalities</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold mb-4 text-lg">Support</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Wattzy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
