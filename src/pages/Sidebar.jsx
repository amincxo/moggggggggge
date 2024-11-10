// src/Sidebar.js
import React, { useState , useContext, useEffect} from 'react';
import styles from './Sidebar.module.css'
import MenuContent from '../components/MenuContent';
import { AuthContext } from '../context/AuthProvider'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
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

    const logoutHandler = () => {
        logout();
        localStorage.clear('role')
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className={styles.sidebarContainer}>
            <button className={styles.menuToggle} onClick={toggleMenu}>
                &#9776; {/* همبرگر آیکون */}
            </button>
            <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
                <button className={styles.closeButton} onClick={closeMenu}>
                    &times; {/* آیکون بستن */}
                </button>
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
            </div>
        </div>
    );
};

export default Sidebar;