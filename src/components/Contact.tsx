
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Get in <span className="gradient-text">Touch</span></h2>
          <p className="text-lg text-wattzy-gray max-w-2xl mx-auto">
            Interested in partnering with Wattzy? Reach out to us and join the electric revolution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Let's Connect</h3>
            <p className="text-wattzy-gray">
              Whether you're a business looking to host charging stations, an EV infrastructure 
              provider seeking optimal locations, or an investor interested in the future of 
              sustainable transportation, we'd love to hear from you.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-wattzy-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-wattzy-gray">hello.wattzy@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <MessageSquare className="h-6 w-6 text-wattzy-green" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Schedule a Call</h4>
                  <p className="text-wattzy-gray">Book a 30-minute consultation with our team</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-4">Newsletter Subscription</h4>
              <p className="text-wattzy-gray mb-4">
                Stay updated with the latest developments in EV infrastructure and Wattzy's progress.
              </p>
              <div className="flex gap-2">
                <Input placeholder="Your email address" className="flex-1" />
                <Button className="bg-wattzy-blue hover:bg-wattzy-blue/90 text-white shrink-0">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">Company</label>
                    <Input id="company" placeholder="Your company name" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea id="message" placeholder="Your message" rows={5} />
                  </div>
                  
                  <Button className="w-full bg-wattzy-blue hover:bg-wattzy-blue/90 text-white">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
