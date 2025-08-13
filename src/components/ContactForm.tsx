// src/components/ContactForm.tsx
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="bg-slate-900 py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-light-slate mb-4">Get in Touch</h2>
        <p className="text-slate mb-12">
          Have a question or need a custom quote? Fill out the form below, and we'll get back to you.
        </p>
        
        <form className="text-left max-w-xl mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-slate mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full p-3 bg-dark-bg text-light-slate rounded border border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-slate mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-3 bg-dark-bg text-light-slate rounded border border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-slate mb-2">Message</label>
            <textarea 
              id="message" 
              rows={5} 
              className="w-full p-3 bg-dark-bg text-light-slate rounded border border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            ></textarea>
          </div>
          <div className="text-center">
            <button 
              type="submit" 
              className="bg-brand-blue text-white font-bold py-3 px-8 rounded hover:bg-opacity-90 transition duration-300 w-full md:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;