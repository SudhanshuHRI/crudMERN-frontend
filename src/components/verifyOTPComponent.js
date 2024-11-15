import { useEffect, useState } from "react";
import "../css/verifyOTPComponent.css"
import { postData } from "../helpers/helper";
import { useNavigate } from "react-router-dom";
const VarifyOTP = ({ switchForm }) => {

    const [breakEmail, setBreakEmail] = useState([]);
    const [otpDigit1, setOtpDight1] = useState('');
    const [otpDigit2, setOtpDight2] = useState('');
    const [otpDigit3, setOtpDight3] = useState('');
    const [otpDigit4, setOtpDight4] = useState('');
    const [otpConcat, setOtpConcat] = useState('');

    const navigate = useNavigate()
    const email = localStorage.getItem("otpEmail");



    const concatOtp = (value) => {
        setOtpConcat((prev) => [...prev, value])
    }

    const validateOTP = async () => {

        if (otpDigit1 == '' || otpDigit2 == '' || otpDigit3 == '' | otpDigit4 == '') {
            alert("Please fill all fields!!")
        } else {
            let fullValue = otpConcat.join('');

            fullValue = Number(fullValue);

            console.log("fullVAlue:",fullValue)
            const result = await postData("/api/forgotPassword", { email: email, otp: fullValue })

            if (result.status == 200) {
                alert(result.message)
                localStorage.removeItem("otpEmail")
                navigate("/home")
            } else {
                alert(result.message)
            }
        }

    }



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
                        <input type="text" maxLength="1" value={otpDigit1} onChange={(e) => { setOtpDight1(e.target.value); concatOtp(e.target.value) }} />
                        <input type="text" maxLength="1" value={otpDigit2} onChange={(e) => { setOtpDight2(e.target.value); concatOtp(e.target.value) }} />
                        <input type="text" maxLength="1" value={otpDigit3} onChange={(e) => { setOtpDight3(e.target.value); concatOtp(e.target.value) }} />
                        <input type="text" maxLength="1" value={otpDigit4} onChange={(e) => { setOtpDight4(e.target.value); concatOtp(e.target.value) }} />
                    </div>
                    <button className='btn registerButton mt-5 mb-5' onClick={() => validateOTP()}>Varify</button>


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