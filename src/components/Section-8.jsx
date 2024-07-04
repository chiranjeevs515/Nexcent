import React from 'react'
import Img1 from '../assets/images/image18.png'
import img2 from '../assets/images/image19.png'
import img3 from '../assets/images/image 20.png'
function Sec8 () {
  return (
    <div className='flex flex-col justify-center items-center'>
     <div className='flex flex-col justify-center items-center text-center w-[43%] gap-4 text-[#4D4D4D]'>
     <h2 className='text-4xl font-[600]'>Caring is the new marketing</h2>
     <p>The Nextcent blog is the best place to read about the latest membership insights,
trends and more. See who s joining the community, read about how our community
are increasing their membership income and lot s more.</p>
</div>
<div className='flex flex-wrap justify-evenly gap-5'>
     <div className='flex flex-col justify-center items-center mb-[-30px]' >
      <img src={Img1} alt="" className='w-full'/>
      <div className='relative bottom-[100px] bg-white flex flex-col justify-center items-center text-center w-[76%] p-[6%]'>
      <h3 className='text-base font-bold text-[#4D4D4D]'>Creating Streamlined <br />
       Safeguarding Processes with <br />
       OneRen</h3>
       <div className='font-semibold text-[#4CAF4F]'>
       Read More <span>&#8594;</span>
       </div>
       </div>
     </div>
     <div className='flex flex-col justify-center items-center mb-[-30px]'>
      <img src={img2} alt="" className='w-full'/>
      <div className='relative bottom-[100px] bg-white flex flex-col justify-center items-center text-center w-[76%] p-[6%]'>
      <h3 className='text-base font-bold text-[#4D4D4D]'>What are your safeguarding <br />
          responsibilities & how can <br />
          you manage them?</h3>
       <div className='font-semibold text-[#4CAF4F]'>
       Read More <span>&#8594;</span>
       </div>
       </div>
     </div>
     <div className='flex flex-col justify-center items-center mb-[-30px]'>
      <img src={img3} alt="" className='w-full' />
      <div className='relative bottom-[100px] bg-white flex flex-col justify-center items-center text-center w-[76%] p-[6%]'>
      <h3 className='text-base font-bold text-[#4D4D4D]'>Revamping the Membership <br /> Model with Triathlon <br /> Australia</h3>
       <div className='font-semibold text-[#4CAF4F]'>
       Read More <span>&#8594;</span>
       </div>
       </div>
     </div>
     </div>
    </div>
  )
}

export default Sec8