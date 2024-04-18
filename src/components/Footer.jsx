import React from 'react'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Customer'>
        <h3>Customer Care</h3>
        <p>Help Center</p>
        <p>How To Buy</p>
        <p>Returns & ReFunds</p>
        <p>Contact Us</p>
      </div>
      <div className='About'>
        <h3>About Us</h3>
        <p>Careers</p>
        <p>Terms & Condition</p>
        <p>Privacy Policy</p>
        <p>Digital Payments</p>
      </div>
      <div className='Payment'>
        <h3>Payment Methods</h3>
        <div>
       <img className='ime' src="img/ime.png" alt="" />
       <img className='visa' src="img/visa.png" alt="" />
       </div>
       <div>
       <img className='esewa' src="img/Esewa.png" alt="" />
       <img className='mastercard' src="img/Maastercard.png" alt="" />
       </div>
      </div>
    </div>
  )
}

export default Footer