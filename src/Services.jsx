import React from 'react'
import img1 from './Images/image.png'
import img2 from './Images/image2.png'
import img3 from './Images/image3.png'
import img4 from './Images/image4.png'
import img5 from './Images/image5.png'
import img6 from './Images/image6.png'
import img7 from './Images/image7.png'
import img8 from './Images/image8.png'
import img9 from './Images/image9.png'
import img10 from './Images/image10.png'
import img11 from './Images/image11.png'
import img12 from './Images/image12.png'
export default function Services() {
  return (
    <div className='service'>
        <h2>كافة الخدمات الاحترافية لتطوير أعمالك</h2>
        <div className="service-container">
            <div className="service-card"><a href=""><img src={img1} alt="" /></a></div>
            <div className="service-card"><a href=""><img src={img2} alt="" /></a></div>
            <div className="service-card"><a href=""><img src={img3} alt="" /></a></div>
            <div className="service-card"><a href=""><img src={img4} alt="" /></a></div>
            <div className="service-card"><a href=""><img src={img5} alt="" /></a></div>
            <div className="service-card"><a href=""><img src={img6} alt="" /></a></div>
            <div className="service-card"><a href=""><img src={img7} alt="" /></a></div>
            <div className="service-card"><a href=""><img src={img8} alt="" /></a></div>
            <div className="service-card"><a href=""><img src={img9} alt="" /></a></div>
            <div className="service-card"><a href=""><img src={img10} alt="" /></a></div>
            <div className="service-card"><a href=""><img src={img11} alt="" /></a></div>
            <div className="service-card"><a href=""><img src={img12} alt="" /></a></div>
        </div>
    </div>
  )
}
