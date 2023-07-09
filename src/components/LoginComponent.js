import React from 'react'
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import {AiOutlineUser} from 'react-icons/ai';
import {RiLockPasswordLine} from 'react-icons/ri';

export default function LoginComponent() {
    return (
        <div className='LoginComponent'>
            <h2>Մուտք սոց. կայքերով</h2>
            <div className="social-login-logos">
                <FaFacebookF className='login-icons' />
                <FaGoogle className='login-icons' />
            </div>
            <h2>Կամ</h2>
            <div className="login-inputs">
                <div className="login-email">
                    <AiOutlineUser />
                    <input type="text" placeholder="Էլ. հասցե"/>

                </div>
                <div className="login-email">
                    <RiLockPasswordLine />
                    <input type="text" placeholder="Գաղտնաբառ"/>
                </div>

                <h3>Մոռացել եմ գաղտնաբառը</h3>
                <button>Մուտք</button>
            </div>
        </div>
    )
}
