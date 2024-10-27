import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
    {/* Audition Section */}
    <section className="bg-[url('/placeholder.svg')] bg-cover bg-center items-center justify-center py-20 text-center flex flex-col lg:flex-row gap-10">
      <h2 className="text-[3rem] lg:text-[4rem] font-bold">FIND AN AUDITION</h2>
      <Button variant="destructive" className="bg-red-600 text-white w-fit px-7 py-3 mt-4 lg:mt-0">
        AUDITION DATES & LOCATIONS
      </Button>
    </section>

    {/* Footer Content */}
    {/* Footer Content */}
    <div className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-6">
          {['facebook', 'twitter', 'instagram', 'youtube', 'linkedin', 'tiktok'].map(social => (
            <div
              key={social}
              className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-110"
            >
              {/* Replace with actual icons */}
              <span className="text-white text-lg font-bold">{social[0].toUpperCase()}</span>
            </div>
          ))}
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
          <a href="/about" className="hover:text-gray-400">About Us</a>
          <a href="/services" className="hover:text-gray-400">Services</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
          <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-400">Terms of Service</a>
        </div>

        {/* Copyright Notice */}
        <p className="text-gray-500 text-sm mt-4 md:mt-2">
          © COPYRIGHT CANADIAN MODEL AND TALENT CONVENTION 2025. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>


  </footer>

  )
}

export default Footer
