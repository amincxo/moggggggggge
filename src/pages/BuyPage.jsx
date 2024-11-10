import React from 'react'

import styles from './BuyPage.module.css'

function BuyPage() {
  return (
    <div className={styles.container} >
        <h2>به صفحه خرید اشتراک خوش امدید</h2>
        <div className={styles.box}>
            <div className={styles.items} >
                <h3>  اشتراک طلایی </h3>
                <h4>دسترسی به 6 تحلیل روزانه</h4>
                <h4>دریافت اعلانات</h4>
                <h4>بدون محدودیت دسترسی</h4>
                <p>580هزار تومان ماهانه</p>
                <button>خرید</button>
            </div>
            <div className={styles.items} >
                <h3>  اشتراک نقره ای </h3>
                <h4>دسترسی به 3 تحلیل روزانه</h4>
                <h4>دریافت اعلانات</h4>
                <h4> دسترسی محدود به تاریخچه</h4>
                <p>399هزار تومان ماهانه</p>
                <button>خرید</button>
            </div>
            <div className={styles.items} >
                <h3>  اشتراک برنزی </h3>
                <h4>دسترسی به 1 تحلیل روزانه</h4>
                <h4>عدم دریافت اعلانات</h4>
                <h4>دسترسی محدود به تاریخچه</h4>
                <p>259هزار تومان ماهانه</p>
                <button>خرید</button>
            </div>
        </div>
    </div>
  )
}

export default BuyPage