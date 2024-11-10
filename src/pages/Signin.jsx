import React from 'react'
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <div style={{width: '100vw' , height:"100vh" }} >
        <div style={{width: '100vw' , height:"100vh" ,display: 'flex' , justifyContent: 'center' , alignItems:'center' , flexDirection:'column' }}>
            <h3 style={{}} >در حال حاظر عضو گیری نداریم لطفا اخبار را دنبال کنید</h3>
            <button style={{    margin: '20px',
    backgroundColor: 'wheat',
    padding: '9px',
    border: 'none',
    borderRadius: '10px',
    fontWeight: '500'}} >
                <Link to="/login" style={{textDecoration:'none' , color:'black'}} >
                    بازگشت به ورود
                </Link>
            </button>
        </div>
    </div>
  )
}

export default Signin