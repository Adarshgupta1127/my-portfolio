import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';
import Card from '../UI/Card';
import { PERSONAL_INFO } from '../../constants';

const InputField = ({ label, type = "text", placeholder }: { label: string, type?: string, placeholder?: string }) => (
  <div className="relative group">
    <input 
      type={type} 
      required
      className="peer w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
      placeholder={placeholder || label}
      id={label.toLowerCase().replace(" ", "-")}
    />
    <label 
      htmlFor={label.toLowerCase().replace(" ", "-")}
      className="absolute left-4 -top-2.5 bg-slate-900 px-2 text-xs text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-primary peer-focus:text-xs"
    >
      {label}
    </label>
  </div>
);

const Contact = () => {
  return (
    <section className="relative py-32 px-6 z-10" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Let's <span className="text-secondary">Connect</span></h2>
            <p className="text-gray-400 text-lg mb-12">
              Currently open for Full Stack and Machine Learning opportunities. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary border border-white/10">
                  <Mail />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Me</p>
                  <p className="text-white font-medium">{PERSONAL_INFO.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent border border-white/10">
                  <MapPin />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-white font-medium">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 bg-slate-800/30">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <InputField label="Name" />
                <InputField label="Email" type="email" />
                
                <div className="relative group">
                  <textarea 
                    required
                    rows={4}
                    className="peer w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                    placeholder="Message"
                    id="message"
                  />
                  <label 
                    htmlFor="message"
                    className="absolute left-4 -top-2.5 bg-slate-900 px-2 text-xs text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-primary peer-focus:text-xs"
                  >
                    Message
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:shadow-primary/40 transition-shadow"
                >
                  Send Message
                  <Send size={18} />
                </motion.button>
              </form>
            </Card>
          </motion.div>

        </div>
      </div>
      
      <footer className="mt-32 text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Adarsh Srikakolapu. Built with React, Three.js & Tailwind.</p>
      </footer>
    </section>
  );
};

export default Contact;