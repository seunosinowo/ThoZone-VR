import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import ExploreSection from './components/ExploreSection'
import { WorkFlow } from './components/WorkFlow'
import { Pricing } from './components/Pricing'
import Reviews from './components/Reviews'

const App = () => {
  return (
    <div>
      <>
      <NavBar/>

      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <HeroSection/>
        <ExploreSection/>
        <WorkFlow/>
        <Pricing/>
        <Reviews/>
      </div>

      </>
    </div>
  )
}

export default App
