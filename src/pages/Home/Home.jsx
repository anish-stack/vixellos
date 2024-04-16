import React from 'react'
import HomeProductSlider from '../products/HomeProductSlider'
import Testinomial from '../../components/Testinomial/Testinomial'
import Contact from '../Contact/Contact'
import Fetured from '../../components/Fetured/Fetured'
import Shop from '../products/Shop'

const Home = () => {
  return (
    <div>
        <HomeProductSlider/>
        <Fetured/>
        <Shop/>
        <Testinomial/>
        <Contact/>
    </div>
  )
}

export default Home