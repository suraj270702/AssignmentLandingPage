import React from 'react'

const MainContent = () => {
  return (
    <section className='mt-[20px]'>

        <div className="container w-full max-w-[1400px] px-4 py-4 flex ">

            <div className="left flex flex-col ">
                <div className="content w-full max-w-[600px] ">
                    <h1 className='text-[50px] leading-[60px] font-bold text-[#fff]'>The Digital Marketing Agency that makes A Difference</h1>
                </div>
                <div className="services mt-[60px] ">
                    <div className='flex flex-row gap-[60px]'>
                    <span className='text-[16px] leading-6 px-4 py-2 border border-solid rounded-b-2xl rounded-t-md font-[300] text-[#fff] border-[#bcbcbc] hover:bg-[#F1C27D] cursor-pointer'>Mobile App Design</span>
                    <span className='text-[16px] leading-6 px-4 py-2 border border-solid rounded-b-2xl rounded-t-md font-[300] text-[#fff] border-[#bcbcbc] hover:bg-[#F1C27D] cursor-pointer'>Games</span>
                    
                    </div>
                    <div className='flex flex-row gap-[60px] mt-[30px]'>
                    <span className='text-[16px] leading-6 px-4 py-2 border border-solid rounded-b-2xl rounded-t-md font-[300] text-[#fff] border-[#bcbcbc] hover:bg-[#F1C27D] cursor-pointer'>Marketing</span>
                    <span className='text-[16px] leading-6 px-4 py-2 border border-solid rounded-b-2xl rounded-t-md font-[300] text-[#fff] border-[#bcbcbc] hover:bg-[#F1C27D] cursor-pointer'>Search Engine OPT</span>
                    
                    </div>
                    <div className='flex flex-row gap-[60px] mt-[30px]'>
                    <span className='text-[16px] leading-6 px-4 py-2 border border-solid rounded-b-2xl rounded-t-md font-[300] text-[#fff] border-[#bcbcbc] hover:bg-[#F1C27D] cursor-pointer'>Software Development For Business</span>
                    
                    
                    </div>

                    
                </div>
            </div>
            <div className="right w-full max-w-[800px] flex flex-row gap-[40px]">
            <div className='ml-[50px] mt-[90px]'>
                <img src='https://northiq.com/wp-content/uploads/2017/02/wheel-3.png' className='w-full max-w-[300px]'/>
            </div>
            <div className=' ml-[20px]'>
            <div className='max-w-[300px] h-[150px] px-4 py-4 border border-solid border-[#bcbcbc] rounded-b-3xl rounded-t-md mt-[50px]'>
                <p className='text-[18px] leading-8 font-[300] text-[#fff]'>
                Agency that built many amazing product to boost your business to next level
                </p>
                
            </div>
            <button className='px-6 py-4 text-[18px]  font-[400] bg-[#fff] rounded-full mt-[30px]'>Get early access</button>
            </div>

            </div>

        </div>

    </section>
  )
}

export default MainContent