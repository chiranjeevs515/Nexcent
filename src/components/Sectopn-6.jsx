import React from "react";
import Sec6Img from "../assets/images/pana.png"
import { Button } from "./ui/button";
export default function Sec6(){
    return(
        <div className="flex flex-col px-10 lg:flex lg:flex-row    md:px-20 ">
            
                <img src={Sec6Img} alt="" className="py-5 w-full md:w-[23%]"/>
            
            <div className="flex flex-col gap-6 px-3 md:px-20 py-4 md:py-8 text-[#4D4D4D]">
                <h1 className="text-4xl font-[600]">How to design your site footer like we did</h1>
                <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <Button className="max-w-24 bg-[#4CAF4F]">Learn More</Button>
            </div>
        </div>
    )
}