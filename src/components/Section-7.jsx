import React from 'react'
import customerpic from '../assets/images/image 9.png'
import clientlogo1 from '../assets/images/Logo (1).png'
import clientlogo2 from '../assets/images/Logo (2).png'
import clientlogo3 from '../assets/images/Logo (3).png'
import clientlogo4 from '../assets/images/Logo (4).png'
import clientlogo5 from '../assets/images/Logo (5).png'
import clientlogo6 from '../assets/images/Logo (6).png'
function Sec7(){
  return (
    <div>
      <section className="flex flex-col justify-center items-center md:flex md:flex-row md:justify-center md:items-center gap-20 py-12 md:p-12">
        <div className="w-[89%] min-w-[314px] sm:min-w-[216px] sm:w-[40%] md:w-[30%]">
          <img src={customerpic} alt="" className='min-w-[280px] w-full'/>
        </div>
        <div className="flex flex-col px-4 gap-5 w-90% md:w-[54%]">
          <p className='text-[#4D4D4D]'>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus  tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida 
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie  mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse 
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien,  vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <div className="flex flex-col gap-6">
            <div>
            <h3 className='text-[#4CAF4F] font-[600]'>Tim Smith</h3>
            <p>British Dragon Boat Racing Association</p>
            </div>
            <div className='flex flex-wrap justify-between g-[10px]'>
           <img src={clientlogo1} alt="" />
           <img src={clientlogo2} alt="" />
           <img src={clientlogo3} alt="" />
           <img src={clientlogo4} alt="" />
           <img src={clientlogo5} alt="" />
           <img src={clientlogo6} alt="" />
           <div className='text-[#4CAF4F] font-[600]'>Meet all customers<span>&#8594;</span></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sec7;