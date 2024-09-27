import "../css/verifyOTPComponent.css"
const VarifyOTP = ({ switchForm }) => {
    
    return (
        <>
            <div className='forgotContainer '>
                <div className='mt-5 text-center'>
                    <p className="h3">Two-Step Varification</p>
                </div>
                <div className="text-center mt-4 ">
                    <img src="/otp.png" />
                </div>
                <div className='mt-5 text-center' style={{ color: "gray" }}>
                    <p className='h5 ps-3 px-3'>Please enter the OTP (one time password) to verify your account. A Code has been sent to <span>+1*******179</span></p>
                </div>

                <div className="inputDiv">
                    <div className='otpDiv  mt-5 ps-2 px-2 '>
                        {/* <input type='text' placeholder='Enter email or mobile number' /> */}
                        <input type="text"  maxLength="1"/>
                        <input type="text" maxLength="1"/>
                        <input type="text" maxLength="1"/>
                        <input type="text" maxLength="1"/>
                    </div>
                    <button className='btn registerButton mt-5 mb-5' onClick={() => switchForm("verifyotp")}>Varify</button>


                    <div className='d-flex justify-content-center '>
                        <span>Return to </span>
                        <a href='#' className='ms-1' onClick={() => switchForm("login")}>Login</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VarifyOTP;