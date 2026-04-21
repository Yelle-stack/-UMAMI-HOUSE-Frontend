import React from 'react'
import img1 from '../assets/break.jpg'
import img2 from '../assets/app.jpg'
import img3 from '../assets/serv3.jpg'
import line from '../assets/line2.png'

const Services = () => {
  return (
    <div>
      <div className='flex bg3'>
        {/* first service */}
        <div className='w-1/3'>
          <div className='p-16'>
            <img src={line} alt="" className='-mb-2 w-45 place-self-center'/>
            <h2 className='text-amber-300 text-center text-4xl'>Breakfast</h2>
            <p className='text-center mt-3'>Discover our carefully crafted breakfast selection, made with fresh ingredients to give you the perfect start to your morning.</p>
          </div>
          <div>
            <img src={img1} alt="" className='h-160'/>
          </div>
        </div>
        {/* second service */}
        <div className='w-1/3'>
          <div>
            <img src={img3} alt="" className='h-160'/>
          </div>
          <div className='p-16'>
            <img src={line} alt="" className='-mb-2 w-45 place-self-center'/>
            <h2 className='text-amber-300 text-center text-4xl' >Drinks</h2>
            <p className='text-center mt-3'>Explore our carefully crafted drink menu, featuring refreshing beverages for every taste and occasion.</p>
          </div>
        </div>

        {/* third service */}
        <div className='w-1/3'>
          <div className='p-16'>
            <img src={line} alt="" className='-mb-2 w-45 place-self-center'/>
            <h2 className='text-amber-300 text-center text-4xl' >Appertizers</h2>
            <p className='text-center mt-3'>Enjoy our selection of delicious appetizers, perfect to start your meal with great flavor.</p>
          </div>
          <div>
            <img src={img2} alt="" className='h-160'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
