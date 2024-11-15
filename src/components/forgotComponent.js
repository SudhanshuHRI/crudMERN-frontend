import { useNavigate } from 'react-router-dom';
import "../css/forgotComponent.css"
import { useState } from 'react';
import { postData } from '../helpers/helper';

const FrogotComponent = ({ switchForm }) => {
    const [email, setEmail] = useState('')

    const sendOTP = async () => {

        const result = await postData("/api/forgotPassword", { email: email })

        if (result.status == 200) {
            alert(result.message)
            localStorage.setItem("otpEmail", email)
            switchForm("verifyotp")
        } else if (result.status == 500) {
            alert(result.message)
            console.log("sendOTP response:", result)
        } else {
            alert(result.message)
            console.log("sendOTP response:", result)
        }


    }

    return (
        <>
            <div className='forgotContainer '>
                <div className='mt-5 text-center'>
                    <p className="h3">Forgot your Password?</p>
                </div>
                <div className='mt-5 text-center' style={{ color: "gray" }}>
                    <p className='h6 ps-5 px-5'>Enter your Email and we’ll help you reset your password.</p>
                </div>

                <div className="inputDiv">
                    <div className='loginInputs mt-5 ps-2 px-2'>
                        <input type='text' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button className='btn registerButton mt-5 mb-5' onClick={() => sendOTP()}>Continue</button>


                    <div className='d-flex justify-content-center returnLoginLink'>
                        <span>Return to </span>
                        <a href='#' className='ms-1' onClick={() => switchForm("login")}>Login</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FrogotComponent;