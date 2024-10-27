"use client";

import Image from 'next/image';
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { useState, useRef } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import Navbar from '../app/components/Navbar';
import HeaderAll from '../app/components/HeaderAll';
import Footer from '@/app/components/footer';
const ConventionPage: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const headerCont = {
    head1: (
      <h1 className="font-bold uppercase text-[2rem] md:text-[3.5rem] lg:text-[4rem] leading-tight lg:leading-[3.5rem] text-right border-r-2 pr-6 border-red-700 w-full lg:w-[60%]">
        CANADIAN <br /> MODEL & TALENT CONVENTION
      </h1>
    ),
    head2: (
      <p className="font-[700] uppercase text-[2rem] md:text-[3.5rem] lg:text-[4rem] leading-tight lg:leading-[3.5rem] text-left w-full lg:w-[50%]">
        Celebrating <br /> 32 Years
      </p>
    ),
  };



  return (
    <div className="bg-white text-black min-h-screen">
      <HeaderAll headerCont={headerCont} />
      <Navbar />




      <main className="w-[90%] mx-auto py-12 px-4">
        {/* Section 1 */}
        <section className="text-center mb-12 w-[90%] mx-auto">
          <div className="my-[90px] flex flex-col lg:flex-row gap-6 lg:gap-[5%] mx-auto w-full">
            <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.8rem] text-right lg:w-[50%] font-bold mb-4">
              EDUCATION EXPERIENCE EXPOSURE
            </h2>
            <p className="text-[1rem] py-4 lg:py-6 text-left lg:w-[50%] mb-8">
              CMTC produces a four-day convention in Toronto which consists of modeling, acting, singing, and dancing competitions, educational workshops and seminars, an awards ceremony, and callback/interview opportunities with modeling and talent agents, scouts, managers, casting directors, and record labels.
            </p>
          </div>
          <div className="flex justify-center gap-2 lg:gap-4 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col lg:flex-row mb-12 gap-6 lg:gap-[5%] w-full">
          <div className="w-full lg:w-[40%]">
            <Image src="/assets/images/bg.jpg" alt="Education" width={800} height={700} className="rounded-lg" />
          </div>
          <div className="flex flex-col text-left lg:w-[60%]">
            <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.8rem] font-bold mb-4">EDUCATION</h2>
            <p className="text-[1rem] pb-6">
              Education is the key to success in the modeling and entertainment industries, and CMTC is your ticket to unlocking that knowledge. Aspiring models and talent can learn directly from industry representatives and experts.
            </p>
            <Button variant="destructive" className="bg-red-600 text-white w-fit px-7 py-3">
              WHAT YOU'LL LEARN
            </Button>
          </div>
        </section>

        {/* Section 3 */}
        <section className="flex flex-col lg:flex-row mb-12 gap-6 lg:gap-[5%] w-full">
          <div className="flex flex-col text-right lg:w-[60%] items-end">
            <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.8rem] font-bold mb-4">EXPERIENCE</h2>
            <p className="text-[1rem] pb-6 lg:pb-[10%]">
              CMTC offers a dynamic platform for newcomers to gain essential industry experience and build confidence through competitions and workshops. It’s an incredible opportunity to showcase your one-of-a-kind talent.
            </p>
            <Button variant="destructive" className="bg-red-600 text-white w-fit px-7 py-3">
              WHAT YOU'LL LEARN
            </Button>
          </div>
          <div className="w-full lg:w-[40%]">
            <Image src="/assets/images/bg.jpg" alt="Experience" width={800} height={700} className="rounded-lg" />
          </div>
        </section>

        {/* Section 4 */}
        <section className="flex flex-col lg:flex-row mb-12 gap-6 lg:gap-[5%] w-full">
          <div className="w-full lg:w-[40%]">
            <Image src="/assets/images/bg.jpg" alt="Exposure" width={800} height={700} className="rounded-lg" />
          </div>
          <div className="flex flex-col text-left lg:w-[60%]">
            <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.8rem] font-bold mb-4">EXPOSURE</h2>
            <p className="text-[1rem] pb-6">
              Gain unprecedented exposure through CMTC’s structured platform, where emerging models and talents interact with top industry professionals, setting the stage for your future success in modeling and entertainment.
            </p>
            <Button variant="destructive" className="bg-red-600 text-white w-fit px-7 py-3">
              WHAT YOU'LL LEARN
            </Button>
          </div>
        </section>

        {/* Scrolling Section */}
        <div className="flex items-center gap-4 mb-12">
          <button onClick={scrollLeft} className="text-2xl px-2">&#8592;</button>
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide">
            {[1, 2, 3, 4].map((partner, index) => (
              <Image key={index} src={`/assets/images/brd${partner}.webp`} alt={`Partner ${partner}`} width={100} height={100} />
            ))}
          </div>
          <button onClick={scrollRight} className="text-2xl px-2">&#8594;</button>
        </div>

        {/* Stars Section */}
        <div className="flex justify-center gap-2 lg:gap-4 mb-12">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </main>


      <section
        className="bg-[url('/placeholder.svg')] bg-cover bg-center bg-black text-white flex  flex-col md:flex-row items-center justify-center gap-[10%] py-10 px-10">
        <h2 className="text-[4rem] font-bold mb-[5%] md:mb-0">FIND AN AUDITION</h2>
        <Button variant="destructive" className="bg-red-600 w-[100%] text-white md:w-fit px-7 py-3">
          AUDITION DATES & LOCATIONS
        </Button>
      </section>


      <div className="relative">
        <div className="testnomial_bg w-full bg-cover h-[80vh]"></div>

        <div className="absolute top-[30%] left-[5%] right-[5%] bg-red-600 w-[90%] text-center px-[6%] py-[5%] md:w-fit mx-auto">
          <p className="text-[1rem] md:text-[1.5rem] tracking-widest">32 YEARS AND COUNTING..</p>
          <h2 className="text-[2rem] md:text-[5rem] font-[800] mb-8">TESTIMONIALS</h2>
        </div>

        <section className="flex flex-col lg:flex-row mb-12 gap-[5%] px-[10%] my-[10%] w-full">
          <div className="w-full lg:w-[40%]">
            <Image src="/assets/images/bg.jpg" alt="Education" width={800} height={700} className="rounded-lg" />
          </div>

          <div className="flex flex-col gap-4 text-left lg:w-[50%] my-[5%] lg:my-[14%]">
            <h2 className="text-[2rem] md:text-[4.8rem] font-bold">EDUCATION</h2>
            <p className="text-[1rem] italic pb-6">
              “CMTC was what started my professional modelling career. I walked in thinking I would just have fun...
              <span className="font-semibold text-black"> My life changed within 4 of the best days of my life. In one year I have travelled internationally to Tokyo, Paris, NYC, Milan, and Chicago! I can’t express how much love and support I have for CMTC.”
              </span>
            </p>
            <div>
              <span className="text-[2rem] font-[600] text-black">Jasmine Julien</span>
              <p className="text-[1.2rem] font-[600] text-red-600">CMTC 2018 Alumni</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ConventionPage;




