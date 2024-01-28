import React from 'react'
import{BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import logo from './assets/logo.svg';
import facebook from './assets/facebook.svg';
import twitter from './assets/twitter.svg';
import init from './assets/init.svg';
import search from './assets/search.svg';
import bell from './assets/bell.svg';

import Home from './pages/Home';
import Movie from './pages/Movie';
import Support from './pages/Support';
import Subscription from './pages/Subscription';
import NotFound from './pages/NotFound';
import Singlepage from './components/Shows/Singlepage';



const App = () => {
  return (
    <>
    <Router>
      <div className='bg-[#141414]'>
      <header>
        <nav>
          <div className='container mx-auto flex items-center  py-7  justify-between '>
        <div>
           <img src={logo} alt="logo" />
        </div>
        <div className='px-4 py-3 border-2 rounded-xl border-[#1F1F1F]'>
        
          <ul className='flex gap-8 '>
            <li className=' text-[#BFBFBF] text-base font-normal'>
              <NavLink to='/'>Home</NavLink>
            </li>
               <li className=' text-[#BFBFBF] text-base font-normal'>
              <NavLink to='/movies'>Movies & Shows</NavLink>
            </li>
              <li className=' text-[#BFBFBF] text-base font-normal'>
              <NavLink to='/support'>Support</NavLink>
            </li>
              <li className=' text-[#BFBFBF] text-base font-normal'>
              <NavLink to='/subscription'>Subscription</NavLink>
            </li>
            
          </ul>
      
        </div>
        <div>
       

<button className='bg-[#141414]'><img src={search} alt="icon" /></button>

<button className='bg-[#141414] ml-7'><img src={bell} alt="icon" /></button>
        </div>
        </div>
          </nav>
      </header>
      </div>
<Routes>
  <Route path='/' element={<Home/>}/>
   <Route path='/movies/*' element={<Movie/>}/>
    <Route path='/support' element={<Support/>}/>
     <Route path='/subscription' element={<Subscription/>}/>
       <Route path='*' element={<Singlepage/>}/>
     
       <Route path='*' element={<NotFound/>}/>
</Routes>
 <div className='bg-[#0F0F0F]'>
<footer className='container bg-[#0F0F0F] mx-auto'>
  <div className='pb-12 pt-24 bg-[#0F0F0F]'>

    <div className=' flex items-start justify-between pb-24 '>
    <ul>
           <li className=' mb-6 text-xl text text-lightwhite font-semibold' >Home</li>
       <li className='text-lg text text-lightgrey font font-normal mb-3'>Categories</li>
        <li className='text-lg text text-lightgrey font font-normal mb-3'>Devices</li>
         <li className='text-lg text text-lightgrey font font-normal mb-3'>Pricing</li>
          <li className='text-lg text text-lightgrey font font-normal mb-3'>FAQ</li>
    </ul>
     <ul>
           <li className=' mb-6 text-xl text text-lightwhite font-semibold'>Movies</li>
        <li className='text-lg text text-lightgrey font font-normal mb-3'>Gernes</li>
         <li className='text-lg text text-lightgrey font font-normal mb-3'>Trending</li>
          <li className='text-lg text text-lightgrey font font-normal mb-3'>New Release</li>
           <li className='text-lg text text-lightgrey font font-normal mb-3'>Popular</li>
        
    </ul>
     <ul>
           <li className='mb-6 text-xl text text-lightwhite font-semibold'>Shows</li>
      <li className='text-lg text text-lightgrey font font-normal mb-3'>Gernes</li>
         <li className='text-lg text text-lightgrey font font-normal mb-3'>Trending</li>
          <li className='text-lg text text-lightgrey font font-normal mb-3'>New Release</li>
           <li className='text-lg text text-lightgrey font font-normal mb-3'>Popular</li>
        
    </ul>
     <ul>
           <li className='mb-6 text-xl text text-lightwhite font-semibold'>Support</li>
        <li className='text-lg text text-lightgrey font font-normal mb-3'>Contac Us</li>
         
    </ul>
     <ul>
 <li className='mb-6 text-xl text text-lightwhite font-semibold'>Subscriptions</li>
        <li className='text-lg text text-lightgrey font font-normal mb-3'>Plans</li>
         <li className='text-lg text text-lightgrey font font-normal mb-3'>Features</li>
         
    </ul>
     <ul>
          <li className='mb-6 text-xl text text-lightwhite font-semibold'>Connect With Us</li>
       <button className='rounded-lg p-4 bg-[#1A1A1A] border-[#262626] mr-3.5'><img src={facebook} alt="icon" /></button>
      <button  className='rounded-lg p-4 bg-[#1A1A1A] border-[#262626] mr-3.5'><img src={twitter} alt="icon" /></button>
       <button  className='rounded-lg p-4 bg-[#1A1A1A] border-[#262626] '><img src={init} alt="icon" /></button>
    </ul>
     </div>
    <div className='mt-34 border-t-2 pt-6 border-[#262626] bg-[#0F0F0F] flex items-center justify-between'>
        <div>
            <span  className='text-lg text text-lightgrey font font-normal mb-3'>@2023 streamvib, All Rights Reserved</span>
        </div>
        <div className='flex items-center'>
            <span  className='text-lg text text-lightgrey font font-normal mb-3 mx-5'>Terms of Use</span>
            <span  className='text-lg text text-lightgrey font font-normal border-[#262626] mb-3 px-5 border-x-2'>Privacy Policy</span>
            <span  className='text-lg text text-lightgrey font font-normal mx-5 mb-3'>Cookie Policy</span>
        </div>

   </div>
  </div>
  </footer>
  </div> 
    </Router>
    </>
  )
}

export default App