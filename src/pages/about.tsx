import HeaderAll from "@/app/components/HeaderAll";
import Navbar from "@/app/components/Navbar";
import '../app/globals.css';
import Image from "next/image";
import { useRef } from "react";
import Footer from "@/app/components/Footer";
// src/pages/about.tsx
const AboutPage: React.FC = () => {
    const about = "ABOUT";
    const headerCont = {
        head1: (
            <h1 className="font-bold uppercase text-[2rem] md:text-[4.5rem] lg:text-[5rem] leading-tight lg:leading-[4.5rem] text-right border-r-2 pr-6 border-red-700 w-full lg:w-[80%]">
                celebrating <br />  32 years
            </h1>
        ),
        head2: (
            <p className="font-[600] uppercase text-[1rem] md:text-[2.5rem] lg:text-[2rem] leading-tight lg:leading-[2rem] text-left w-full lg:w-[50%]">
                Helping<br /> Stars<br /> Shine

            </p>
        ),
    };
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -100, // Adjust the scroll distance as needed
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 100, // Adjust the scroll distance as needed
                behavior: 'smooth'
            });
        }
    };

    return (
        <div>
            <Navbar about={about} />
            <HeaderAll headerCont={headerCont} /> {/* Pass the headerCont object */}
            <section className="flex flex-col lg:flex-row mb-0 gap-[5%] px-[10%] py-[10%] my-[0%] w-full bg-white text-black">
                <div className="w-full lg:w-[40%] flex flex-col gap-[5%]">
                    <Image src="/assets/images/bg.jpg" alt="Education" width={800} height={700} className="rounded-lg" />
                    <Image src="/assets/images/bg.jpg" alt="Education" width={800} height={700} className="rounded-lg" />

                </div>

                <div className="flex flex-col gap-4 text-left lg:w-[50%] my-[1%] lg:my-[1%]">
                    <h2 className="text-[2rem] md:text-[4.8rem] font-bold">EDUCATION</h2>
                    <p className="text-[1rem] italic pb-6">
                        OUR History
                        CMTC was developed in 1993 to help create the right time and place for models and talent to gain experience and showcase their potential to top career makers. For over 30 years CMTC has helped aspiring models, actors, and talent overcome four key obstacles associated with breaking into the modelling and entertainment industries:

                        Meeting the Right People. The most important person an aspiring model/talent needs is a legitimate agent or manager who believes in them and will represent and promote them to their clientele.
                        Education. Many potential models/talent do not know how to get started, which agencies are reputable, or what skills and tools are necessary for a national or international career in modelling, acting, singing, and dance. CMTC provides the best venue to be educated by industry experts and the reps themselves through seminars and workshops held throughout convention weekend.
                        Cost. As with anything worth pursuing, beginning a career in modelling, acting, singing or dance is an investment. However, it should not cost enormous amounts of time and money to find out if you have what it takes to succeed in the modelling and entertainment industries. The CMTC registration base fee covers the costs of putting together a comprehensive event to showcase aspiring models/talent to the world’s top modelling and talent agents, managers, casting directors, producers, and record labels. To put things into perspective, consider two possible alternatives:

                        (1) travelling to major industry markets individually or
                        (2) attending similar events in the U.S.

                        Travelling to major markets such as New York, Los Angele                        <span className="font-semibold text-black"> My life changed within 4 of the best days of my life. In one year I have travelled internationally to Tokyo, Paris, NYC, Milan, and Chicago! I can’t express how much love and support I have for CMTC.”
                        </span>
                    </p>
                    <div>
                        <span className="text-[2rem] font-[600] text-black">Jasmine Julien</span>
                        <p className="text-[1.2rem] font-[600] text-red-600">CMTC 2018 Alumni</p>
                    </div>
                </div>
            </section>



            <section className="flex flex-col lg:flex-row mb-12 gap-[5%] px-[10%] py-[10%] my-[0%] w-full bg-white text-black">


                <div className="flex flex-col gap-4 text-left lg:w-[50%] my-[1%] lg:my-[1%]">
                    <h2 className="text-[2rem] md:text-[4.8rem] font-bold">Our Mission</h2>
                    <p className="text-[1rem] italic pb-6">
                        OUR History
                        CMTC was developed in 1993 to help create the right time and place for models and talent to gain experience and showcase their potential to top career makers. For over 30 years CMTC has helped aspiring models, actors, and talent overcome four key obstacles associated with breaking into the modelling and entertainment industries:

                        Meeting the Right People. The most important person an aspiring model/talent needs is a legitimate agent or manager who believes in them and will represent and promote them to their clientele.
                        Education. Many potential models/talent do not know how to get started, which agencies are reputable, or what skills and tools are necessary for a national or international career in modelling, acting, singing, and dance. CMTC provides the best venue to be educated by industry experts and the reps themselves through seminars and workshops held throughout convention weekend.
                        Cost. As with anything worth pursuing, beginning a career in modelling, acting, singing or dance is an investment. However, it should not cost enormous amounts of time and money to find out if you have what it takes to succeed in the modelling and entertainment industries. The CMTC registration base fee covers the costs of putting together a comprehensive event to showcase aspiring models/talent to the world’s top modelling and talent agents, managers, casting directors, producers, and record labels. To put things into perspective, consider two possible alternatives:

                        (1) travelling to major industry markets individually or
                        (2) attending similar events in the U.S.

                        Travelling to major markets such as New York, Los Angele                        <span className="font-semibold text-black"> My life changed within 4 of the best days of my life. In one year I have travelled internationally to Tokyo, Paris, NYC, Milan, and Chicago! I can’t express how much love and support I have for CMTC.”
                        </span>
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
            <section className="bg-[url('/placeholder.svg')] bg-cover bg-center items-center justify-center py-2 text-center flex flex-col lg:flex-col gap-10">
                <h2 className="text-[3rem] lg:text-[4rem] font-bold">Testimonials</h2>
                <span className=" text-red-700 text-[10rem] h-fit bg-red-300 w-fit px-7 py-0 my-0 mt-2 lg:mt-0">

                </span>
            </section>
            <div className="bg-white py-12 text-black">
                <div className="flex items-center gap-4 mb-12 w-[80%] mx-auto">
                    <button onClick={scrollLeft} className="text-[1rem] text-gray-600 px-2">&#8592;</button>
                    <div ref={scrollRef} className="flex gap-4 w-[50%] overflow-x-auto mx-auto scrollbar-hide">
                        {[
                            { id: 1, profile:'' ,  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..", author: "Alice" },
                            { id: 2, profile:'', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..!", author: "Bob" },
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
<Footer/>
        </div>
    );
};

export default AboutPage;
