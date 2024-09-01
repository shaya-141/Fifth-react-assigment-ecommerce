import React from 'react'
import Input from '../components/Input'
import { Link } from 'react-router-dom'
function Signup() {
  return (
    <>
    <div className="logincard">
                <h2 className='loginhead'>Signup</h2>
                <div>
                    
                <h4>Email</h4>
                <Input type={'email'} place={'your@gmail.com'}></Input>
                </div>
                <div>
                    <h4>Password</h4>
                <Input type={'email'} place={'password'}></Input>
                </div>
                <div>
                    <p>Login to your account<Link to={'/Login'}>Login</Link></p>
                </div>
                <button>Signup</button>
            </div>
    
    </>
  )
}

export default Signup