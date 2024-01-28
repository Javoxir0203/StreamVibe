import React from 'react';
import play from '../assets/play.svg';
import Search from '../components/Search';
const Headerh = () => {
  return (
  <>
  
  <div className='bg-home bg-no-repeat  w-full h-full bg-center mx-auto'>
    <div className='container mx-auto flex flex-wrap'>
    <Search/>
    </div>
    <div className='mx-auto w-[1100px] flex flex-col items-center mb-32 '>
    <h1 className='text-5xl font-bold text-[#FFF] mb-4 text-center mt-[600px]'>The Best Streaming Experience</h1>
    <p className=' font-normal mb-12 text-sm text-[#999999] w-[1096px] text-center'>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
<button className='flex items-center justify-evenly w-[250px] rounded-lg gap-1 py-4 px-6 bg-[#E50000] text-[#FFF]'><img src={play} alt="icon" />Start Watching Now</button>
</div>
  </div>
  </>
  )
}

export default Headerh