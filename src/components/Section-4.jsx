import React from "react";
import Sec4Img from "../assets/images/rafiki.png"
import { Button } from "./ui/button";
export default function Sec4(){
    return(
        <div className="flex flex-col lg:flex lg:flex-row w-full px-10 md:px-20 text-[#4D4D4D]">
            
                <img src={Sec4Img} alt="" className="py-5 w-full"/>
            
            <div className="flex flex-col gap-6 px-5 md:px-20 py-4 md:py-8 ">
                <h1 className="text-4xl font-[600]">The unseen of spending three years at Pixelgrade</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <Button className="max-w-24 bg-[#4CAF4F]">Learn More</Button>
            </div>
        </div>
    )
}