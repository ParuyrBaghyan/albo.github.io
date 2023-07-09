import React from 'react'
import { Link } from 'react-router-dom/dist'
import LoginComponent from '../components/LoginComponent'

export default function Login() {
    return (
        <div className='login-container'>
            <div className='log-and-sign-in'>
                <div className='activeDiv'>
                    <Link to='/Մուտք' >Մուտք</Link>
                    
                </div>
                <div className='activeDiv'>
                    <Link to='/Գրանցում'>Գրանցում</Link>
                </div>

            </div>
            <button className='login-close'>X</button>

            <LoginComponent />
        </div>
    )
}
