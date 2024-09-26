import { useNavigate } from 'react-router-dom';
import "../css/forgotComponent.css"

const FrogotComponent = ({ switchForm }) => {

    
    return (
        <>
            <div>
                <p className="h3">Forgot your Password?</p>
                <p>Enter your Email or Mobile and we’ll help you reset your password.</p>
                <div className="inputDiv">
                    <div className='loginInputs'>
                        <input type='text' placeholder='Enter email or mobile number' />

                    </div>
                    <button className='btn registerButton mt-2 mb-2' onClick={()=>switchForm("verifyotp")}>send OTP</button>

                    




                    <div className='d-flex justify-content-center'>
                        <span>Return to </span>
                        <a href='#' className='ms-1' onClick={() => switchForm("login")}>Login</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FrogotComponent;