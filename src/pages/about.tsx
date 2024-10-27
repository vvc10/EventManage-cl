import React, { useRef } from 'react';
import HeaderAll from "@/app/components/HeaderAll";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import '../app/globals.css';

type HeaderCont = {
  head1: JSX.Element;
  head2: JSX.Element;
};

const AboutPage: React.FC = () => {
  const about = "ABOUT";
  const headerCont: HeaderCont = {
    head1: (
      <h1 className="font-bold uppercase text-[2rem] md:text-[4.5rem] lg:text-[5rem] leading-tight lg:leading-[4.5rem] text-right border-r-2 pr-6 border-red-700 w-full lg:w-[80%]">
        celebrating <br /> 32 years
      </h1>
    ),
    head2: (
      <p className="font-[600] uppercase text-[1rem] md:text-[2.5rem] lg:text-[2rem] leading-tight lg:leading-[2rem] text-left w-full lg:w-[50%]">
        Helping<br /> Stars<br /> Shine
      </p>
    ),
  };

  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -100,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      <Navbar about={about} />
      <HeaderAll headerCont={headerCont} />
      
      {/* Main Section */}
      <section className="flex flex-col lg:flex-row mb-0 gap-[5%] px-[10%] py-[10%] my-[0%] w-full bg-white text-black">
        <div className="w-full lg:w-[40%] flex flex-col gap-[50px] md:gap-[60px]">
          <Image src="/assets/images/bg.jpg" alt="Education" width={800} height={700} className="rounded-lg" />
          <Image src="/assets/images/bg.jpg" alt="Education" width={800} height={700} className="rounded-lg" />
        </div>

        <div className="flex flex-col gap-4 text-left lg:w-[50%] my-[1%] lg:my-[1%]">
          <h2 className="text-[2rem] md:text-[4.8rem] font-bold">EDUCATION</h2>
          <p className="text-[1rem] italic pb-6">
            OUR History
            CMTC was developed in 1993 to help create the right time and place for models and talent to gain experience
            and showcase their potential to top career makers. For over 30 years CMTC has helped aspiring models, actors,
            and talent overcome four key obstacles associated with breaking into the modelling and entertainment industries.
          </p>
          <div>
            <span className="text-[2rem] font-[600] text-black">Jasmine Julien</span>
            <p className="text-[1.2rem] font-[600] text-red-600">CMTC 2018 Alumni</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="flex flex-col lg:flex-row mb-12 gap-[5%] px-[10%] py-[10%] my-[0%] w-full bg-white text-black">
        <div className="flex flex-col gap-4 text-left lg:w-[50%] my-[1%] lg:my-[1%]">
          <h2 className="text-[2rem] md:text-[4.8rem] font-bold">Our Mission</h2>
          <p className="text-[1rem] italic pb-6">
            CMTC was developed in 1993 to help create the right time and place for models and talent to gain experience
            and showcase their potential to top career makers. For over 30 years CMTC has helped aspiring models, actors,
            and talent overcome four key obstacles associated with breaking into the modelling and entertainment industries.
          </p>
          <div>
            <span className="text-[2rem] font-[600] text-black">Jasmine Julien</span>
            <p className="text-[1.2rem] font-[600] text-red-600">CMTC 2018 Alumni</p>
          </div>
        </div>
        <div className="w-full lg:w-[40%] flex flex-col gap-[5%]">
          <Image src="/assets/images/bg.jpg" alt="Education" width={800} height={700} className="rounded-lg" />
          <Image src="/assets/images/bg.jpg" alt="Education" width={800} height={700} className="rounded-lg" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[url('/placeholder.svg')] bg-cover bg-center items-center justify-center py-2 text-center flex flex-col lg:flex-col gap-10">
        <h2 className="text-[3rem] lg:text-[4rem] font-bold">Testimonials</h2>
      </section>

      {/* Scrolling Testimonials */}
      <div className="bg-white py-12 text-black">
        <div className="flex items-center gap-4 mb-12 w-[80%] mx-auto">
          <button onClick={scrollLeft} className="text-[1rem] text-gray-600 px-2">&#8592;</button>
          <div ref={scrollRef} className="flex gap-4 w-[50%] overflow-x-auto mx-auto scrollbar-hide">
            {[
              { id: 1, text: "Lorem ipsum dolor sit amet...", author: "Alice" },
              { id: 2, text: "Lorem ipsum dolor sit amet...", author: "Bob" },
            ].map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-200 p-4 rounded shadow">
                <p className="text-[1rem] text-gray-600">"{testimonial.text}"</p>
                <p className="text-[1rem] font-[600] text-red-500">- {testimonial.author}</p>
              </div>
            ))}
          </div>
          <button onClick={scrollRight} className="text-[1rem] text-gray-600 px-2">&#8594;</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
