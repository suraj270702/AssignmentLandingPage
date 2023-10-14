import React from 'react'
import { Link } from 'react-router-dom'
import MainContent from './MainContent'

const Navigation = () => {
  return (
    <nav>

        <div className="container w-full max-w-[1400px] px-4 py-4">

            <div className="navbar flex justify-between items-center">
                <div className="left">
                    <img className='max-w-[70px] w-full ' src='https://i.pinimg.com/474x/9b/98/36/9b9836a6809c10704b9cad20f06ee3b0.jpg' />
                </div>
                <div className="right flex items-center flex-row gap-[80px]">
                   <Link to=""><h3 className='text-[20px] leading-6 text-[#fff] font-[400] '>About us</h3></Link>
                   <Link to=""><h3 className='text-[20px] leading-6 text-[#fff] font-[400]'>Profile</h3></Link>
                   <Link to=""><h3 className='text-[20px] leading-6 text-[#fff] font-[400]'>Team</h3></Link>
                   <Link to=""><h3 className='text-[20px] leading-6 text-[#fff] font-[400]'>Contact</h3></Link>
                    <button className='px-6 py-4 border border-solid border-[#bcbcbc] bg-transparent text-[20px] leading-6 font-[400] text-[#fff] rounded-full'>Sign in</button>
                    
                </div>
            </div>



        </div>
    
    </nav>
    
  )
}

export default Navigation