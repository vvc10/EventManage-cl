
import React, { useEffect, useState } from 'react';

// Define the shape of header content
interface HeaderCont {
    head1: string;
    head2: string;
}

// Define the props for the HeaderAll component
interface HeaderAllProps {
    headerCont: HeaderCont;
}

const HeaderAll: React.FC<HeaderAllProps> = ({ headerCont }) => {
    const targetDate = new Date('2025-04-30T00:00:00').getTime();
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                });
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="bg-[#0f0a23] h-screen w-full relative overflow-hidden">
                <div className="header_bg bg-cover h-full w-full opacity-50"></div>
                <header className="absolute top-0 flex flex-col items-center justify-center text-white h-full w-full mx-auto py-20 text-center px-4 lg:px-0">

                    <div className="my-20 flex flex-col lg:flex-row gap-6 items-center">

                        {headerCont.head1}

                        {headerCont.head2}

                    </div>

                    <p className="text-xl md:text-2xl lg:text-[3rem] font-bold mb-8">April 30 - May 4, 2025</p>

                    <div className="flex justify-center gap-4 text-sm md:text-lg lg:text-xl">
                        <div className="bg-white text-black p-4 lg:p-5 rounded">
                            <span className="font-bold text-lg md:text-xl lg:text-2xl">{timeLeft.days}</span>
                            <br />Days
                        </div>
                        <div className="bg-white text-black p-4 lg:p-5 rounded">
                            <span className="font-bold text-lg md:text-xl lg:text-2xl">{timeLeft.hours}</span>
                            <br />Hours
                        </div>
                        <div className="bg-white text-black p-4 lg:p-5 rounded">
                            <span className="font-bold text-lg md:text-xl lg:text-2xl">{timeLeft.minutes}</span>
                            <br />Minutes
                        </div>
                        <div className="bg-white text-black p-4 lg:p-5 rounded">
                            <span className="font-bold text-lg md:text-xl lg:text-2xl">{timeLeft.seconds}</span>
                            <br />Seconds
                        </div>
                    </div>

                </header>
            </div>
        </div>
    )
}

export default HeaderAll




