import React, { useState } from "react";
import CountUp from 'react-countup'
import Icon1 from "../assets/images/Icon-5.png"
import Icon2 from "../assets/images/Icon-6.png"
import Icon3 from "../assets/images/Icon-7.png"
import Icon4 from "../assets/images/Icon-8.png"
import ScrollTrigger from "react-scroll-trigger";
export default function Sec5(){
    const [On,setOn]=useState(false);
    return (
        <ScrollTrigger onEnter={()=>setOn(true)} onExit={()=>setOn(false)}>
        <div className="px-14 gap-8 h-full flex flex-col justify-evenly md:flex md:flex-row w-full py-10 ">
            
            <div className="flex flex-col justify-center items-start w-full md:px-28">
                <h1 className="text-4xl text-[#4D4D4D] font-[600]">Helping a local </h1>
                <h1 className="text-4xl text-[#4CAF4F] font-[600]">business reinvent itself</h1>
                <p>We reached here with our hard work and dedication</p>
            </div>
            <div className="w-full grid grid-cols-2 justify-evenly gap-10 min-w-[300px]">
                <div className="flex gap-3">
                    <img src={Icon1} alt="" />
                    <div className="flex flex-col gap-1">
                        {On && <CountUp start={0} end={2245341} duration={1.2} delay={0} className="font-[600] text-[14px] lg:font-[600] lg:text-[28px] text-[#4D4D4D]"/>}
                        
                        <p className="text-[#4D4D4D]">Members</p>
                    </div>
                </div>
                <div className="flex gap-3">
                <img src={Icon2} alt="" />
                <div className="flex flex-col gap-1">
                {On && <CountUp start={0} end={46328} duration={1.2} delay={0} className="font-[600] text-[14px] lg:font-[600] lg:text-[28px] text-[#4D4D4D]"/>}
                        <p className="text-[#4D4D4D]">Clubs</p>
                    </div>
                </div>
                <div className="flex gap-3">
                <img src={Icon3} alt="" />
                <div className="flex flex-col gap-1"> 
                {On && <CountUp start={0} end={828867} duration={1.2} delay={0} className="font-[600] text-[14px] lg:font-[600] lg:text-[28px] text-[#4D4D4D]"/>}
                        <p className="text-[#4D4D4D]">Event Bookings</p>
                    </div>
                </div>
                <div className="flex gap-3">
                <img src={Icon4} alt="" />
                <div className="flex flex-col gap-1">
                {On && <CountUp start={0} end={1926436} duration={1.2} delay={0} className="font-[600] text-[14px] lg:font-[600] lg:text-[28px] text-[#4D4D4D]"/>}
                        <p className="text-[#4D4D4D]">Payments</p>
                    </div>
                </div>
            </div>
            
        </div>
        </ScrollTrigger>
    )
}