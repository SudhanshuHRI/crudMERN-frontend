import { useNavigate } from 'react-router-dom';
import "../css/forgotComponent.css"

const FrogotComponent = ({ switchForm }) => {


    return (
        <>
            <div className='forgotContainer '>
                <div className='mt-5 text-center'>
                    <p className="h3">Forgot your Password?</p>
                </div>
                <div className='mt-5 text-center' style={{color:"gray"}}>
                    <p className='h6 ps-5 px-5'>Enter your Email or Mobile and we’ll help you reset your password.</p>
                </div>

                <div className="inputDiv">
                    <div className='loginInputs mt-5 ps-2 px-2'>
                        <input type='text' placeholder='Enter email or mobile number' />
                    </div>
                    <button className='btn registerButton mt-5 mb-5' onClick={() => switchForm("verifyotp")}>Continue</button>


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