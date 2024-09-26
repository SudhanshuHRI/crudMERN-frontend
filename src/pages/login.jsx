import { useNavigate } from 'react-router-dom';
import '../css/login.css'
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import { getData, postData } from '../helpers/helper';
import LoginComponent from '../components/loginComponent';
import RegisterComponent from '../components/registerComponent';
import FrogotComponent from '../components/forgotComponent';
import VarifyOTP from '../components/verifyOTPComponent';

const Login = () => {

    const [lgShow, setLgShow] = useState(true)
    const [activeSection, setActiveSection] = useState("login")
    const [hideSocialMedia,setSocialMedia] = useState("d-block")

    useEffect(()=>{
        if(activeSection=="forgot" || activeSection=="verifyotp"){
            setSocialMedia("d-none")
        }else{
            setSocialMedia("d-block")
        }

    },[activeSection])

    const switchForm = (form) => {
        setActiveSection(form)
    }

    

    return (
        <div className='MainCont'>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                centered
                backdrop="static"
                keyboard={false}
            >
                <div className='container-fluid LoginCont'>
                    <div className='row'>
                        <div className='col-12 col-xl-5  LoginSide1'>
                            <div>
                                <h2>Login</h2>
                                <p className='h5'>To keep connected with us, Please login with your personal info.</p>
                                <div className='text-center loginImg'>
                                    <img src='/login-vector.png' width={230} />
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-xl-7 LoginSide2'>
                            <div className={ `text-center ${hideSocialMedia}`}>
                                <p className='h5'>Login with Social Profile</p>
                            </div>
                            <div className={`SocislMediaIcons ${hideSocialMedia}`}>
                                <span style={{ backgroundColor: "#1874EB" }}><FaFacebookF /></span>
                                <span style={{ backgroundColor: "#00ACEE" }}><FaTwitter /></span>
                                <span style={{ backgroundColor: "#DC473A" }}><FaGoogle /></span>
                                <span style={{ backgroundColor: "#1c7eAD" }}><FaLinkedinIn /></span>
                            </div>
                          

                            {activeSection === "login" && <LoginComponent switchForm={switchForm} />}
                            {activeSection === "register" && <RegisterComponent switchForm={switchForm} />}
                            {activeSection === "forgot" && <FrogotComponent switchForm={switchForm} />}
                            {activeSection === "verifyotp" && <VarifyOTP switchForm={switchForm} />}

                        </div>
                    </div>
                </div>

            </Modal>

        </div>

    );
}

export default Login;