import React, { useContext , useEffect, useState } from 'react'
import styles from "./Khamenei.module.css"
import MenuContent from '../../components/MenuContent'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'
import khamenei from '../../assets/khamenei.jpg'
import SidebarMobile from './../Sidebar'
import { Button } from '@mui/material'


function Khamenei() {
    const {isLoggedIn , logout} = useContext(AuthContext);

    //setrole
    const [roleStore , setRole] = useState(null);

    useEffect(()=> {
        const role = localStorage.getItem('role');
        if (role) {
            setRole(role);
        }
        else {

        }
    },[])

    //

    const logoutHandler = () => {
        logout();
        localStorage.clear('role')
    }

  return (
    <div className={styles.container}>
        <div className={styles.sideBar} >
            <h3> 
                <Link to={'/homepage'}>
                    محور المقاومة
                </Link>
            </h3>
            <MenuContent />
            <div>
                {isLoggedIn && !!roleStore ?
                    ( <div className={styles.hesab} >
                        <p> سلام { roleStore } </p>
                        <button onClick={logoutHandler} >خروج از حساب کاربری</button>
                    </div>
                ) :(
                        <Link to="/login" >
                            ورود به حساب کاربری
                        </Link>
                )}
            </div>
        </div>
        <div className={styles.SidebarMobile} >
            <SidebarMobile />
        </div>

        <div className={styles.veiw} >
            {roleStore == 'admin' && (
            <div className={styles.content} >
            
                <h2>  حضرت آیت‌الله العظمی سیدعلی خامنه‌ای  </h2> 
                <p>سید علی حسینی خامنه‌ای فرزند مرحوم حجت‌الاسلام‌والمسلمین حاج سید جواد حسینی خامنه‌ای، در فروردین‌ماه سال ۱۳۱۸ شمسی برابر با ۱۳۵۸ قمری در مشهد مقدس چشم به جهان گشود. او دومین پسر خانواده بود و زندگی مرحوم سید جواد خامنه‌ای هم مانند بیشتر روحانیون و مدرسان علوم دینی، بسیار ساده: «پدرم روحانی معروفی بود، اما خیلی پارسا و گوشه‌گیر [...] زندگی ما به‌سختی میگذشت. من یادم هست شب‌هایی اتفاق می‌افتاد که در منزل ما شام نبود. مادرم با زحمت برای ما شام تهیه میکرد. [...] آن شام هم نان و کشمش بود.»</p>
                <div className={styles.images} >
                    <img src={khamenei} alt="khamenei" />

                </div>
                <button>ویرایش کنید</button>
            </div>
            ) }

            {roleStore == 'client' && (
            <div className={styles.content} >
            
                <h2>  حضرت آیت‌الله العظمی سیدعلی خامنه‌ای  </h2> 
                <p>سید علی حسینی خامنه‌ای فرزند مرحوم حجت‌الاسلام‌والمسلمین حاج سید جواد حسینی خامنه‌ای، در فروردین‌ماه سال ۱۳۱۸ شمسی برابر با ۱۳۵۸ قمری در مشهد مقدس چشم به جهان گشود. او دومین پسر خانواده بود و زندگی مرحوم سید جواد خامنه‌ای هم مانند بیشتر روحانیون و مدرسان علوم دینی، بسیار ساده: «پدرم روحانی معروفی بود، اما خیلی پارسا و گوشه‌گیر [...] زندگی ما به‌سختی میگذشت. من یادم هست شب‌هایی اتفاق می‌افتاد که در منزل ما شام نبود. مادرم با زحمت برای ما شام تهیه میکرد. [...] آن شام هم نان و کشمش بود.»</p>
                <div className={styles.images} >
                    <img src={khamenei} alt="khamenei" />
                </div>
            </div>
            ) }

            {roleStore == 'client2' && (
            <div className={styles.content} >
            
                <h2>   کاربر گرامی سطح اشتراک شما برای دیدن این مطلب کافی نیست   </h2> 
                <button style={{cursor:"pointer"}} >
                    <Link to={"/shop"} >
                        خرید اشتراک
                    </Link>
                </button>
            </div>
            ) }
            
            {!!roleStore == false && (
            <div className={styles.content} >
            
                <h2> کاربر گرامی لطفا وارد شوید </h2> 
                <button>                      
                    <Link to="/login" >
                        ورود به حساب کاربری
                    </Link>  
                </button>
            </div>
            ) }

        </div>
    </div>
  )
}

export default Khamenei