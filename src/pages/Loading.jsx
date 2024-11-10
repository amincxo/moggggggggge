import React ,{ useState, useEffect } from 'react'
import bannerLoading from '../assets/bannerLoading.png'
import bannerLodingSmall from '../assets/bannerLoadingSmall.png'

import styles from "./Loading.module.css"
import { RotatingLines } from 'react-loader-spinner'
function Loading() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return 
     () => window.removeEventListener('resize', handleResize);
      }, []);

  return (
    <div>
        <div>

        {windowWidth > 496 ? (
            <img src={bannerLoading} alt="تصویر بزرگ"  className={styles.banner} />
        ) : (
            <img src={bannerLodingSmall} alt="تصویر کوچک" className={styles.bannerSmall}/>
        )}
        </div>
        <div className={styles.LoadingContainer} >
            <h2>محور مقاومت</h2>
            <p>در حال بارگزاری</p>
            <span>
            <RotatingLines
                visible={true}
                height="25"
                width="25"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
                />
            </span>
        </div>
    </div>
  )
}

export default Loading