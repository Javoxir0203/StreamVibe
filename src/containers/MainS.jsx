import React from 'react';
import support1 from '../assets/support1.png';

const MainS = () => {
  return (
    <div className='container   mx-auto bg-[#141414] mt-28'>
        <div className='flex gap-20 justify-evenly'>
      <div className='w-[535px]'>
        <h1 className=' leading-[72px] text-[#FFFFFF] text-5xl font-bold'>Welcome to our support page!</h1>
        <p className='font-normal text-lg text-[#999999] mb-12 mt-7'>We're here to help you with any problems you may be having with our product.</p>
        <img src={support1} alt="Support Image" />
      </div>
      <div className='p-12 w-[700px] bg-[#0F0F0F]'>
        <form>
            <div className='flex justify-between mb-12'>
          <div className='gap-4'>
            <label htmlFor="input1" className="text-[#FFF] text-lg font-semibold block mb-4">First Name</label>
            <input type="text" id="input1" placeholder="Enter First Name" className="bg-[#141414] border-[#262626] border-2 rounded-lg pr-8 pl-6 py-4" />
          </div>
          <div>
            <label htmlFor="input2" className="text-[#FFF] text-lg font-semibold block mb-4">Last Name</label>
            <input type="text" id="input2" placeholder="Enter Last Name" className="bg-[#141414] border-[#262626] border-2 rounded-lg pr-8 pl-6 py-4" />
          </div>
          </div>
          <div className='flex justify-between mb-12 '>
          <div>
            <label htmlFor="inputEmail" className="text-[#FFF] text-lg font-semibold block mb-4">Email</label>
            <input type="email" id="inputEmail" placeholder="Enter Your Email" className="bg-[#141414] border-[#262626] border-2 rounded-lg pr-8 pl-6 py-4" />
          </div>
          <div>
            <label htmlFor="inputPhone" className="text-[#FFF] text-lg font-semibold block mb-4">Phone Number</label>
            <input type="tel" id="inputPhone" placeholder="Enter Phone Number" className="bg-[#141414] border-[#262626] border-2 rounded-lg pr-8 pl-6 py-4" />
          </div>
          </div>
           <label htmlFor="inputPhone" className="text-[#FFF] text-lg font-semibold block mb-4">Message</label>
            <input type="text" id="inputPhone" placeholder="Enter Your Message" className="bg-[#141414] border-[#262626] border-2 rounded-lg pr-6 pl-6 py-6 w-[500px] h-[180px]" />
         <div className='flex justify-between items-center  mt-12'>
          <input type="checkbox" id="horns" name="horns" />
    <label for="horns" className='text-[#FFF] mr-[300px]'>I agree </label>
          <button type="submit" className="bg-[#E50000]  text-white   py-4 px-10 rounded ">Send Email</button>
       </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default MainS;
