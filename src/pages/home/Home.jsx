import React from 'react'
import Navbar from '../../components/Navbar'
import SectionProduct from './SectionProduct'

import ImageSlider from './components/ImageSlider'

const Home = () => {
  return (
    <div>
        <Navbar/>
        {/* <ImgSlider/> */}
        <ImageSlider />
        <SectionProduct/>
        
    </div>
  )
}

export default Home