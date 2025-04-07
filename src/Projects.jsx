import React from 'react'
import logo from './Images/comapny.png'
export default function Projects() {
  return (
    <div className='projects'>
        <img src={logo} alt="" />
        <div className="projects-container">
            <div className="section">
                <h3>سنديان</h3>
                <p>أنشئ موقعك الإلكتروني بنفسك</p>
            </div>

            <div className="section">
                <h3>أنا</h3>
                <p>   مكتبك الخاص لإدارة مشاريعك</p>
            </div>

            <div className="section">
                <h3>زيتون</h3>
                <p>برنامج إدارة علاقات العملاء   </p>
            </div>

            <div className="section">
                <h3>مستقل</h3>
                <p>   أكبر منصة عمل حر في العالم العربي</p>
            </div>

            <div className="section">
                <h3>خمسات</h3>
                <p>سوق بيع وشراء الخدمات المصغرة   </p>
            </div>

            <div className="section">
                <h3>بيكاليكا</h3>
                <p>متجر القوالب والمنتجات الرقمية   </p>
            </div>
            
            <div className="section">
                <h3>بعيد</h3>
                <p> موقع توظيف الخبراء عن بعد      </p>
            </div>

            <div className="section">
                <h3>أكاديمية حسوب</h3>
                <p>دورات احترافية لتطوير مستقبلك  </p>
            </div>

            <div className="section">
                <h3>موسوعة حسوب</h3>
                <p>المرجع الشامل للمطورين العرب  </p>
            </div>

            <div className="section">
                <h3> حسوب I/O</h3>
                <p>مجتمع للنقاش الهادف والموضوعي </p>
            </div>
        </div>
        
    </div>
  )
}
