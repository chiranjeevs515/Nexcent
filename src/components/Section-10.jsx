import React from 'react'
import footMain from '../assets/images/logo_foot.png'
import insta from '../assets/images/insta.png'
import world from '../assets/images/ball.png'
import twitter from '../assets/images/twitter.png'
import youtube from '../assets/images/yt.png'
import send from '../assets/images/send.png'
function Sec10 (){
  return (
    <div>
      <section className='bg-[#263238] flex flex-col items-center md:flex md:flex-row md:justify-evenly p-12 text-white'>
       <div className='flex flex-col w-[80%] justify-between md:justify-between md:w-[17%] gap-3'>
        <img src={footMain} alt="" className='w-[200px]' />
        <p className='leading-7'>Copyright © 2020 Landify UI Kit. <br />All rights reserved</p>
        <div className='flex g-[10px] justify-start gap-2'> 
         <img src={insta} alt="" />
         <img src={world} alt="" />
         <img src={twitter} alt="" />
         <img src={youtube} alt="" />
        </div>
       </div>
       <div className='flex flex-wrap items-center sm:flex sm:flex-row gap-5 justify-evenly w-[80%] md:w-[50%] '>
        <div className=' g-3'>
          <h4 className='text-[16px] font-[700]'>Company</h4>
          <p >About us</p>
          <p>Blog</p>
          <p>Contact us</p>
          <p>Pricing</p>
          <p>Testimonials</p>
        </div>
        <div className=' g-3'>
          <h4 className='text-[16px] font-[700]'>Support</h4>
          <p>Help center</p>
          <p>Terms of service</p>
          <p>Legal</p>
          <p>Privacy policy</p>
          <p>Status</p>
        </div>
        <div className='w-[40%] sm:w-[30%] '>
          <h4 className='mb-5'>Stay up to date</h4>
          <input type="email" placeholder="Enter your email" className='bg-[#616161] pl-3 rounded-[6px] h-9 opacity-90 w-[100%]'/>
          <img src={send} alt="" className='hidden lg:block relative bottom-[14%] left-[90%] w-[9%] font-size-90'/>
        </div>



       </div>



      </section>


    </div>
  )
}

export default Sec10;