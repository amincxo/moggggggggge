import React , { useState ,useEffect, useContext } from 'react'
import styles from "./Login.module.css"
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [error , setError] = useState(false)
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();


    const HandlerLogin = (event) => {
        event.preventDefault();
            if (username== 'admin' && password == "12345678") {
                setError(false)
                localStorage.setItem('role', username);
                login();
                navigate('/homepage')
            }else if (username == 'client' && password == '12345678' ) {
                setError(false)
                localStorage.setItem('role', username);
                login();
                navigate('/homepage')
            }else if (username == 'client2' && password == '12345678' ) {
                setError(false)
                localStorage.setItem('role', username);
                login();
                navigate('/homepage')
            }else {
                setError(true)
            }
    }
  return (
    <div className={styles.container} >
        <div className={styles.box} >
            <form dir='ltr' className={styles.form} onSubmit={HandlerLogin}  >
                <label htmlFor="username">نام کاربری</label>
                <input name='username' type='username' onChange={(event)=> {setUsername(event.target.value)}}  />
                <label htmlFor="password">کلمه عبور </label>
                <input htmlname='password' type='password' onChange={(event)=> {setPassword(event.target.value)}}  />
                {error && <p style={{color:'red'}} > نام کاربری یا رمز عبور اشتباه است </p>}
                <div>
                    <button> <Link to="/singin" >ثبت نام </Link> </button>
                    <button type='submit'>وارد شدن</button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default Login