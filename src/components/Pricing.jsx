import React from 'react'
import { pricingOptions } from '../constants'
import { CheckCircle2 } from 'lucide-react'

export const Pricing = () => {
  return (
    <div className='mt-20' id = 'pricing'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center tracking-wider mb-3'>Pricing
        </h2>

        <div className='flex flex-wrap'>
            {pricingOptions.map((item, index) => (
                <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='p-10 border border-neutral-600 rounded-md '>
                        <p className='text-4xl mb-8'>
                            {item.title}
                            {item.title === "Pro" && (
                                <span className='bg-gradient-to-r from-green-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2'>
                                    {""} (Most Popular)
                                </span>
                            )}
                        </p>

                        <p className='mb-8'>
                            <span className='text-5xl mt-6 mr-2'>{item.price}</span>
                            <span className='text-neutral-400 tracking-tight'>/Month</span>
                        </p>

                        <ul>
                            {item.features.map((feature, index) => (
                                <li key={index} className='mt-8 flex items-center'>
                                    <CheckCircle2/>
                                    <span className='ml-2'>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <a href='#'
                        className ='inline-flex border border-green-800 justify-center items-center text-center w-full h-12 p-5 mt-16 tracking-tight text-xl hover:bg-green-800 rounded-lg transition duration-100'>
                            Subscribe
                        </a>

                    </div>
                </div>
            ))}
        </div>
    </div>


  )
}
