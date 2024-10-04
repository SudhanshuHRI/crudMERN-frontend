import { useNavigate } from 'react-router-dom';
import '../css/login.css'
import { useState, useEffect } from 'react';
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

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {

    const [lgShow, setLgShow] = useState(true)
    const [activeSection, setActiveSection] = useState("login")
    const [hideSocialMedia, setSocialMedia] = useState("d-block")

    const navigate = useNavigate();

    useEffect(() => {
        if (activeSection == "forgot" || activeSection == "verifyotp") {
            setSocialMedia("d-none")
        } else {
            setSocialMedia("d-block")
        }

    }, [activeSection])

    const switchForm = (form) => {
        setActiveSection(form)
    }

    const firebaseConfig = {
        apiKey: "AIzaSyBlUmdFsR7_5eKYrHUNTTWxjsjiEFyTGn8",
        authDomain: "merncrud-c86d2.firebaseapp.com",
        projectId: "merncrud-c86d2",
        storageBucket: "merncrud-c86d2.appspot.com",
        messagingSenderId: "1010688924377",
        appId: "1:1010688924377:web:3c5f20b7edd092b900bcc8",
        measurementId: "G-89BKQZ1M07"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);



    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.idToken;
            const user = result.user;

            //console.log("User Info:", user);  // User info (email, name, etc.)
           // console.log("Token:", token);      // The OAuth token
           // console.log("credential",credential)
            
            if (token) {
                const resp = await postData("/api/loginWithGoogle", { token: token, userData: user });
                if(resp.status==200){
                    alert(`Welcome ${user.displayName}`)
                    navigate('/home')

                }
            }
        } catch (error) {
            console.error("Error during Google login", error);
        }
    };

    // const handleFacebookLogin = async () => {
    //     const provider = new FacebookAuthProvider();
    //     try {


    //         const result = await signInWithPopup(auth, provider);
    //         alert("hello")
    //         console.log("result:",result)
    //         const credential = FacebookAuthProvider.credentialFromResult(result);
    //         const token = credential.accessToken;
    //         const user = result.user;



    //         console.log("User Info:", user);  // User info (email, name, etc.)
    //         console.log("Token:", token);      // The OAuth token
    //     } catch (error) {
    //         console.error("Error during Facebook login", error);
    //     }
    // };


    const test = async () => {
        const resp = await getData("/api/getUsers")
        console.log("Testing response:", resp)
        
    }
    test();



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
                            <div className={`text-center ${hideSocialMedia}`}>
                                <p className='h5'>Login with Social Profile</p>
                            </div>
                            <div className={`SocislMediaIcons ${hideSocialMedia}`}>
                                {/* <span style={{ backgroundColor: "#1874EB" }}><FaFacebookF onClick={handleFacebookLogin} /></span>
                                <span style={{ backgroundColor: "#00ACEE" }}><FaTwitter /></span> */}
                                <span ><img src='/google.png' width={250} onClick={handleGoogleLogin} /></span>
                                {/* <span style={{ backgroundColor: "#1c7eAD" }}><FaLinkedinIn /></span> */}
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