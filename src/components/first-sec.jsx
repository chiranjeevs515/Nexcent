import React from "react";
import { Button } from "./ui/button";
import Illus from "../assets/images/Final.png"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Sec1(){
    return(
      <div className="w-full flex justify-center items-center px-0 py-0 sm:px-8 sm:py-10 md:py-12 md:px-28">
      <Carousel className="w-full">
      <CarouselContent className="w-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="flex flex-col-reverse lg:grid grid-cols-2 p-20 gap-10 h-full w-full px-32">
            <div className="flex flex-col items-start justify-center gap-8">
                <h1 className="text-6xl font-bold">Lessons and insights</h1>
                <h1 className="text-6xl font-bold"> from 8 years</h1>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <Button className="bg-[#4CAF4F]">Register</Button>
            </div>
            <div className="flex justify-center items-end">
                <img src={Illus} alt="" />
            </div>
        </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:block" />
      <CarouselNext className="hidden md:block"/>
    </Carousel>
    </div>
    )
}
