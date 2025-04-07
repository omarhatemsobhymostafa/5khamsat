import React from 'react'
import { SiMaterialdesignicons } from "react-icons/si";
import { MdVideoSettings } from "react-icons/md";
import { IoIosCart } from "react-icons/io";
import { MdSlowMotionVideo } from "react-icons/md";
import { FaSearchengin } from "react-icons/fa";
import { BsTranslate } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export default function PopService() {
    return (
        <div className='pop-service'>
            <h2>خدمات شائعة    </h2>
            <div className="pop-service-container">

                <div> <i className="fas fa-draw-polygon"></i>  تصميم شعار </div>
                <div> <i className="fas fa-video"></i>  مونتاج فيديو</div>
                <div> <i className="fas fa-mobile-screen-button"></i>   إنشاء تطبيق جوال</div>
                <div> <i className="fas fa-cart-shopping"></i> إنشاء متجر إلكتروني</div>
                <div> <i className="fas fa-play"></i>   موشن جرافيك</div>
                <div> <i className="fab fa-searchengin"></i>  تحسين محركات البحث</div>
                <div> <i className="fas fa-language"></i>  ترجمة</div>
                <div> <i className="fas fa-user"></i>  إدارة حسابات التواصل الاجتماعي</div>


            </div>
        </div>
    )
}
