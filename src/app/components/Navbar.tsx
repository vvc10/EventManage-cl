"useclient";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';

const Navbar: React.FC = ({ about }) => {

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };



    return (
        <>
            <div className={`${about === "ABOUT" ? "navbar relative top-0 bg-white text-black z-10 flex flex-col md:flex-row items-center justify-between py-4 px-4 md:py-6 md:px-6" : "navbar sticky top-0 bg-white text-black z-10 flex flex-col md:flex-row items-center justify-between py-4 px-4 md:py-6 md:px-6"}`}>                {/* Brand Section */}
                <div className="brand_n flex w-[100%] md:w-[70%] py-[1rem] items-center mb-[5%] md:mb-0 gap-[5%] md:gap-[10%]">
                    {/* Hamburger Icon */}
                    <div
                        className="humberg_icon block items-center text-center h-[100%] rotate-90 text-[2rem] w-[10%] cursor-pointer md:block"
                        onClick={toggleSidebar}
                    >
                        |||
                    </div>

                    <div className="w-[90%] text-center flex flex-row items-center gap-[10%]">
                        <Image src="/assets/images/icon.webp" alt="brand_icon" width={100} height={100} className="w-12 h-12 md:w-40 md:h-40" />
                        <h2 className="text-black text-left font-medium text-[1rem] md:text-[1.5rem] lg:text-[1.5rem]">
                            <Link href="/home">   CANADIAN MODEL & <br /> TALENT CONVENTION</Link>

                        </h2>
                    </div>
                </div>

                {/* Audition Button */}
                <Button variant="destructive" className="bg-red-600 text-white text-xs w-[100%] md:w-fit md:text-sm">
                    FIND AN AUDITION
                </Button>
            </div>

            {
                isSidebarOpen && (
                    <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-20 transition-transform duration-300 transform">
                        <div className="p-4">
                            <button onClick={toggleSidebar} className="text-xl font-bold mb-4">X</button>
                            <ul className="space-y-4 flex flex-col gap-3">
                                <Link href="/home" className="text-black hover:text-red-600">Home</Link>

                                <Link href="/about" className="text-black hover:text-red-600">About Us</Link>
                            </ul>
                        </div>
                    </div>
                )
            }
            {
                isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-10"
                        onClick={toggleSidebar}
                    ></div >
                )
            }

        </>)
};

export default Navbar;
