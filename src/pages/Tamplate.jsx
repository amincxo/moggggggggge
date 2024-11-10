import React, { useContext , useEffect, useState } from 'react'
import styles from "./Tamplate.module.css"
import MenuContent from '../components/MenuContent'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import iran from '../assets/iran.png'
import iraq from '../assets/iraq.png'
import lobnan from '../assets/lobnan.png'
import Palestine from '../assets/Palestine.png'
import soriya from '../assets/soriya.png'
import yeman from '../assets/yeman.png'
import SidebarMobile from './Sidebar'


function Tamplate() {
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
            <div className={styles.content} >
                <h2>محور مقاومت</h2> 
                <p>محور مقاومت یا جبهه مقاومت عنوانی برای اشاره به یک ائتلاف منطقه‌ای شامل نیروهای دولتی و غیردولتی عمدتا شیعه است که در کشورهای ایران، سوریه، عراق، لبنان، یمن و فلسطین فعالیت می‌کنند. اهداف محور مقاومت را مبارزه با اشغال‌گری اسرائیل و دفاع از آزادی فلسطین، مقابله با نفوذ غرب به‌ویژه آمریکا در منطقه غرب آسیا، مبارزه با دولت‌های استبدادی و جلوگیری از اقدامات گروه‌های تکفیری مانند داعش دانسته‌اند.</p>
                <div className={styles.images} >
                    <img src={iran} alt="iran" />
                    <img src={yeman} alt="yeman" />
                    <img src={lobnan} alt="lobnan" />
                    <img src={soriya} alt="soriya" />
                    <img src={Palestine} alt="Palestine" />
                    <img src={iraq} alt="iraq" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tamplate