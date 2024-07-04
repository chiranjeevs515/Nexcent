import React from "react";
import ClientImg from"../assets/images/Clients.png"
export default function Sec2(){
    return (
        <div className="w-full">
            <div className="w-full flex flex-col justify-center items-center p-10 text-[#4D4D4D]">
                <h1 className="text-3xl font-medium">Our Clients</h1>
                <p className="text-center">We have been working with some Fortune 500+ clients</p>
            </div>
            <div className="flex justify-center items-center">
                <img src={ClientImg} alt="" />
            </div>
        </div>
    )
}