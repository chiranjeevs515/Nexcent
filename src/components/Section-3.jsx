import React from "react";
import Icon1 from"../assets/images/icon-1.png"
import Icon2 from"../assets/images/icon-2.png"
import Icon3 from"../assets/images/Icon-4.png"
export default function Sec3(){
    return (
        <div className="w-full flex flex-col items-center justify-center gap-10 p-1 md:p-8 text-[#4D4D4D]">
            <div className="flex flex-col justify-center items-center w-[70%] md:w-[50%] gap-4">
                <p className="text-3xl text-center font-[600]">Manage your entire community in a single system</p>
                <p>Who is Nextcent suitable for?</p>
            </div>
            <div className="flex flex-col justify-center items-center w-full md:grid md:grid-cols-3 gap-12  px-7 md:px-40">
                <div className="flex flex-col justify-center items-center max-w-[255px]">
                    <img src={Icon1}alt="" />
                    <h1 className="text-center text-2xl">Membership Organisations</h1>
                    <p className="text-center"> Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className="flex flex-col justify-center items-center max-w-[255px]">
                    <img src={Icon2}alt="" />
                    <h1 className="text-center text-2xl">National Associations</h1>
                    <p className="text-center">Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className="flex flex-col justify-center items-center max-w-[255px]">
                    <img src={Icon3}alt="" />
                    <h1 className="text-center text-2xl">Clubs And Groups</h1>
                    <p className="text-center">Our membership management software provides full automation of membership renewals and payments</p>
                </div>

            </div>
        </div>
    )
}