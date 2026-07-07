import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { contactInfo } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setToastMessage('Please fill in all required fields.');
      setShowToast(true);
      return;
    }
    // Simulate successful form submission
    setToastMessage(`Thanks, ${formData.name}! Your message has been sent successfully.`);
    setShowToast(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  // Auto close toast
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <section id="contact" className="py-20 md:py-28 bg-transparent scroll-mt-16 relative">
      {/* Toast Alert System */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            className="fixed bottom-5 right-5 z-50 flex items-center space-x-3 bg-card-bg border border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.3)] px-6 py-5 rounded-xl max-w-sm"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0" />
            <p className="text-gray-200 text-sm font-sans font-medium">{toastMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white tracking-wider uppercase mb-3">
            Contact
          </h2>
          <div className="w-24 h-[4px] bg-gradient-to-r from-emerald-500 via-teal-500 to-lime-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-405 text-base md:text-lg font-sans max-w-2xl mx-auto px-4">
            I'd love to hear from you—reach out for any opportunities or questions!
          </p>
        </div>        <div className="max-w-xl mx-auto">
          {/* Main Card */}
          <motion.div
            className="bg-card-bg rounded-3xl p-6 sm:p-10 glow-purple border border-emerald-500/20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white text-center mb-6 tracking-wide">
              Connect With Me <span className="inline-block animate-bounce">🚀</span>
            </h3>
 
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-6">
                {/* Name */}
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-gray-800 focus:border-emerald-500 focus:outline-none py-3 text-white placeholder-gray-500 font-sans text-base transition-colors duration-300"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-focus-within:w-full" />
                </div>
 
                {/* Email */}
                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="w-full bg-transparent border-b border-gray-800 focus:border-emerald-500 focus:outline-none py-3 text-white placeholder-gray-500 font-sans text-base transition-colors duration-300"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-focus-within:w-full" />
                </div>
              </div>
 
              {/* Subject */}
              <div className="relative group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full bg-transparent border-b border-gray-800 focus:border-emerald-500 focus:outline-none py-3 text-white placeholder-gray-500 font-sans text-base transition-colors duration-300"
                />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-focus-within:w-full" />
              </div>

              {/* Message */}
              <div className="relative group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Your Message..."
                  className="w-full bg-transparent border-b border-gray-800 focus:border-emerald-500 focus:outline-none py-3 text-white placeholder-gray-500 font-sans text-base resize-none transition-colors duration-300"
                />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-focus-within:w-full" />
              </div>

              {/* Send Button */}
              <div className="pt-6">
                <motion.button
                  type="submit"
                  className="w-full py-5 rounded-xl font-display font-bold text-base md:text-lg tracking-wider uppercase text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-lime-600 shadow-[0_6px_25px_rgba(16,185,129,0.45)] hover:shadow-[0_10px_35px_rgba(20,184,166,0.65)] transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </div>
            </form>

            {/* Direct Contact Info */}
            <div className="mt-12 pt-10 border-t border-gray-850 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-gray-400 text-sm">
              {/* Email */}
              <div className="flex flex-col items-center space-y-2 group">
                <div className="w-10 h-10 rounded-full bg-black/45 flex items-center justify-center border border-gray-800 group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-all duration-300">
                  <FaEnvelope />
                </div>
                <span className="font-semibold text-white">Email</span>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center space-y-2 group">
                <div className="w-10 h-10 rounded-full bg-black/45 flex items-center justify-center border border-gray-800 group-hover:border-teal-500/50 group-hover:text-teal-400 transition-all duration-300">
                  <FaPhoneAlt />
                </div>
                <span className="font-semibold text-white">Phone</span>
                <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </div>

              {/* Location */}
              <div className="flex flex-col items-center space-y-2 group">
                <div className="w-10 h-10 rounded-full bg-black/45 flex items-center justify-center border border-gray-800 group-hover:border-lime-500/50 group-hover:text-lime-400 transition-all duration-300">
                  <FaMapMarkerAlt />
                </div>
                <span className="font-semibold text-white">Location</span>
                <span>{contactInfo.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
