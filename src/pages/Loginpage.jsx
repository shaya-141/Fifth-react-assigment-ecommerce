import React from 'react'
import Input from '../components/Input'
import { Link } from 'react-router-dom'
function Loginpage() {
    return (
        <>
            <div className="logincard">
                <h2 className='loginhead'>Login</h2>
                <div>
                    
                <h4>Email</h4>
                <Input type={'email'} place={'your@gmail.com'}></Input>
                </div>
                <div>
                    <h4>Password</h4>
                <Input type={'email'} place={'password'}></Input>
                </div>
                <div>
                    <p>Don't have account ?<Link to={'/Signup'}>Signup</Link></p>
                </div>
                <button>Login</button>
            </div>

        </>
    )
}

export default Loginpage