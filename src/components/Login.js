import React from 'react';
import './Login.css';

function login() {
    return (
        <div className='card'>
            <div className="back"><img src={process.env.PUBLIC_URL + "arrow.png"} alt=""/> Back</div>
            <div className="profile">
                <div className="image-wrapper">
                    <img src={process.env.PUBLIC_URL + "photo.jfif"} alt="" />
                </div>
                <div className="acc-type">Personal account</div>
                <div className="username">Andrew@polka.io</div>
            </div>
            <div className="form">
                <form>
                    <div className='password-label'><label htmlFor='password'>Password</label></div>
                    <input className='password-input' id="password" name="password" type="text"></input>
                    <div>Forgot Password? <span className='reset-button'>Reset</span></div>
                    <div className="sign-in">
                        <div className="checkbox-wrapper">
                            <input id="checkbox" type="checkbox" className='checkbox'>
                            </input>
                            <label htmlFor="checkbox">Stay signed in</label>
                        </div>
                        <button className='button'>Sign in</button>
                    </div>
                </form>
            </div>
            <div className="footer">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</div>
        </div>
    )
}

export default login