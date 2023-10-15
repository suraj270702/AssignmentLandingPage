import React from 'react'

const Features = () => {
  return (
    <section className='mt-5'>
        <div className="container w-full max-w-[1400px] px-4 py-4 flex md:flex-row flex-col items-center md:justify-between gap-[30px]">
            <div className="card1 md:w-[400px] w-full h-[170px] bg-[#efd4e7] p-6 rounded-xl">
             <h1 className='text-[20px] leading-7 font-bold '>Global Partners</h1>
             <div className='flex justify-between md:flex-row flex-col  items-center mt-[20px]'>
             <p className='md:text-[14px] text-[14px] leading-4 font-[300] '>
                Agency that built many amazing product to boost your business to next level
                </p>
                <p className='md:text-[14px] text-[14px] leading-4 md:mt-0 mt-4 font-[300] '>
                we are directly partner with world to best brands,Subscribe to our letter
                </p>
             </div>
            </div>
            <div className='md:w-[200px] w-full p-6 bg-[#b3eafb] h-[170px] rounded-xl md:text-start text-center'>
               <h1 className='text-[20px] leading-7 font-bold'>45M</h1>
               <span className='mt-[10px]'>Budget:55,000</span>
               <img src='https://miro.medium.com/v2/resize:fit:1400/1*Dcpq2RLPq8LvPffmF9uzUg.png' className='w-full max-w-[150px] md:ml-0 ml-[80px]' />
            </div>
            <div className='md:w-[200px] w-full p-6 bg-[#FDF2E2] h-[170px] rounded-xl text-center'>
               <h1 className='text-[20px] leading-7 font-bold'>5000+</h1>
               <span className='mt-[10px]'>Total Clients</span>
               <div className='mt-[20px] flex items-center relative justify-center ml-8'>
                 <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' className='w-full w-[40px] h-[50px]  rounded-full ' />
                 <img src='https://t4.ftcdn.net/jpg/02/11/41/93/360_F_211419379_s1YK0JMte7f1y4VRllpzkuUldI35oGlW.jpg' className='w-full w-[40px] h-[50px] rounded-full  md:absolute md:left-4 left-0' />
                 <img src='https://media.istockphoto.com/id/1412290868/photo/young-man-looking-sideways-against-a-gray-background.jpg?s=612x612&w=0&k=20&c=H32k1xmWiL2w076_RZ6it_gEDvmRqcEsYkID3we4DJA=' className='w-full w-[40px] h-[50px] rounded-full  md:absolute md:left-1 left-0' />
               </div>
            </div>
        </div>
    </section>
  )
}

export default Features