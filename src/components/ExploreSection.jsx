import React from 'react'
import { explores } from '../constants'

const ExploreSection = () => {
  return (
    <div className='relative mt-20 border-b border-neutral-800 min-h-[800px]' id='explore'>
        <div className='text-center'>
            <span className='bg-neutral-900 text-neutral-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>
                Explore
            </span>

            <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>
                Easily build 
                <span className='bg-gradient-to-r from-green-200 to-green-800 text-transparent bg-clip-text'>
                    {" "}your code
                </span>
            </h2>
        </div>

        <div className='flex flex-wrap mt-10 lg:mt-20'>
            {explores.map((explore, index) => (
                <div key={index} className='w-full sm:w-1/2 lg:w-1/3'>
                    <div className='flex'>
                        <div className='flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-green-700 justify-center items-center rounded-full'>
                            {explore.icon}
                        </div>
                            <div>
                                <h5 className='mt-1 mb-6 text-xl'>{explore.text}</h5>
                                <div className='text-md text-neutral-500 p-2 mb-20 mt-auto'>{explore.description}

                                </div>
                            </div>
                        
                    </div>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default ExploreSection
