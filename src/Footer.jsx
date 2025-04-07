import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="section">
                    <h3>موقع خمسات</h3>
                    <p>
                        حول خمسات
                        كيف يعمل الموقع
                        الأسئلة الشائعة
                        ضمان الحقوق
                        البيع على خمسات
                        مركز المساعدة
                    </p>
                </div>

                <div className="section">
                    <h3> مدونة خمسات</h3>
                    <p>
                        7 خطوات لبناء استراتيجية محتوى يؤثر في جمهورك
                        السيو في عصر الذكاء الاصطناعي: كيف تتكيف مع التغييرات؟
                        سنديان أم ووردبريس: أيهما أنسب لإنشاء موقعك؟
                        10 نصائح من خبير لتخصيص صفحة المنتج في ووكومرس
                        خلاصة خبرة 7 سنوات لإدارة موقع ووردبريس ناجح
                    </p>
                </div>


                <div className="section">
                    <h3>  مجتمع خمسات</h3>
                    <p>

                        نماذج أعمال قمت بتنفيذها
                        طلبات الخدمات غير الموجودة
                        تجارب وقصص المستخدمين
                        أمور عامة حول خمسات
                    </p>
                </div>

                <div className="section">
                    <h3>   تابعنا</h3>
                    <div className="icons">
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-twitter-square"></i>
                    </div>
                    <h3>وسائل الدفع المتاحة</h3>
                    <div className="icons">
                        <i class="fa-brands fa-cc-visa"></i>
                        <i class="fa-brands fa-cc-paypal"></i>
                        <i class="fa-brands fa-cc-mastercard"></i>
                    </div>
                </div>

            </div>
            <div className="footer">
                <div className="footer-list">
                    <a href="">شروط الاستخدام</a>
                    <a href="">بيان الخصوصية</a>
                    <a href="">المستويات</a>
                    <a href="">التسويق بالعمولة</a>
                </div>
                <span>© 2025 Hsoub. All rights reserved.</span>
            </div>
        </footer>
    )
}
