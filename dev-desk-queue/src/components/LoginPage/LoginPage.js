import React, { useState } from 'react';
import Login from '../Login.js';
import Register from '../Register.js';
import HelperLogin from '../HelperLogin.js';
import HelperRegister from '../HelperRegister.js';

import './LoginPage.css'

const LoginPage = () => {
    const [studentHelperState, setStudentHelperState] = useState('student');
    const [loginRegisterState, setLoginRegisterState] = useState('login');
    const studentClick = () => {
        setStudentHelperState('student');
    }
    const helperClick = () => {
        setStudentHelperState('helper');
    }
    const loginClick = () => {
        setLoginRegisterState('login');
    }
    const registerClick = () => {
        setLoginRegisterState('register');
    }
    return(
        <div className='login-page'>
            <div className='login-content'>
                <div className={`login-about ${studentHelperState === 'student' ? 'student' : 'helper'}`}>
                    <h1>The Queue <span className={`for-students ${studentHelperState === 'student' ? '' : 'hidden'}`}>for students</span><span className={`for-helpers ${studentHelperState === 'helper' ? '' : 'hidden'}`}>for helpers</span></h1>
                    <h2>We're here to help.</h2>
                    <p>Create a help ticket and we'll connect you with a Lambda School Helper</p>
                </div>
                <div className='login-forms'>
                    <div className='student-helper-login-toggle'>
                        <div className={`student-login ${studentHelperState === 'student' ? '' : 'student white-text'}`} onClick={studentClick}>For Students</div>
                        <div className={`helper-login ${studentHelperState === 'helper' ? '' : 'helper white-text'}`} onClick={helperClick}>For Helpers</div>
                    </div>
                    <div className='login-forms-bottom'>
                        <h2 className={`header ${loginRegisterState === 'login' ? '' : 'hidden'}`}>Sign In</h2>
                        <h2 className={`header ${loginRegisterState === 'register' ? '' : 'hidden'}`}>Register</h2>
                        <Login lr={loginRegisterState} sh={studentHelperState}/>
                        <HelperLogin lr={loginRegisterState} sh={studentHelperState} />
                        <Register lr={loginRegisterState} sh={studentHelperState}/>
                        <HelperRegister lr={loginRegisterState} sh={studentHelperState} />
                        <div className={`user-check ${loginRegisterState === 'login' ? '' : 'hidden'}`}>Not a user? Click <span className='link' onClick={registerClick}>here</span> to register</div>
                        <div className={`user-check ${loginRegisterState === 'register' ? '' : 'hidden'}`}>Already a user? Click <span className='link' onClick={loginClick}>here</span> to login</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;