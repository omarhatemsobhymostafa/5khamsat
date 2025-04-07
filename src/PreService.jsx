import React, { useState } from 'react'
import img1 from "./Images/Premium/image.png"
import img2 from "./Images/Premium/image2.png"
import img3 from "./Images/Premium/image3.png"
import img4 from "./Images/Premium/image4.png"

export default function PreService() {




    return (
        <div className='pre-ser'>
            <div className="more-and-heading">
                <h2>خدمات مميزة</h2>
                <button>المزيد</button>
            </div>
            <div className="pre-ser-container">

                <div className="pre-ser-card">
                    <div className="img"><img src={img1} alt="" /></div>

                    <h3>تصميم كروت اسمية مميزة بألوان جذابة</h3>
                    <p>تصميم / تصميم بطاقة عمل</p>
                    <h4>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        (38)
                    </h4>
                    <h3>تبدأ من <b>10.00</b>$</h3>
                </div>

                <div className="pre-ser-card">
                    <div className="img"><img src={img2} alt="" /></div>
                    
                    <h3> ترجمة احترافية من اللغة العربية الى الالمانية والعكس    </h3>
                    <p>كتابة وترجمة / الألمانية للعربية والعكس</p>
                    <h4>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        (53)
                    </h4>
                    <h3>تبدأ من <b>5.00</b>$</h3>
                </div>

                <div className="pre-ser-card">
                    <div className="img"><img src={img3} alt="" /></div>
                    
                    <h3>ترجمة دقيقة وشاملة للملفات التخصصية والعاجلة عربي إنجليزي</h3>
                    <p>كتابة وترجمة / الإنجليزية للعربية والعكس</p>
                    <h4>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        (71)
                    </h4>
                    <h3>تبدأ من <b>5.00</b>$</h3>
                </div>

                <div className="pre-ser-card">
                    <div className="img"><img src={img4} alt="" /></div>
                    
                    <h3>سأكتب لك مقالات متوافقة مع شروط السيو</h3>
                    <p>كتابة وترجمة / مقالات وتدوينات</p>
                    <h4>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        (51)
                    </h4>
                    <h3>تبدأ من <b>5.00</b>$</h3>
                </div>

            </div>
        </div>
    )
}
