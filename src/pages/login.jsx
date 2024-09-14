import { useNavigate } from 'react-router-dom';
import '../css/login.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Form from 'react-bootstrap/Form';

const Login = () => {

    const [lgShow, setLgShow] = useState(true)

    const navigate = useNavigate();




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
                            <div className='text-center'>
                                <p className='h5'>Login with Social Profile</p>
                            </div>
                            <div className='SocislMediaIcons'>
                                <span style={{ backgroundColor: "#1874EB" }}><FaFacebookF /></span>
                                <span style={{ backgroundColor: "#00ACEE" }}><FaTwitter /></span>
                                <span style={{ backgroundColor: "#DC473A" }}><FaGoogle /></span>
                                <span style={{ backgroundColor: "#1c7eAD" }}><FaLinkedinIn /></span>
                            </div>
                            <div className='loginHr'>
                                <span><hr /></span>
                                <span>Or use your email account</span>
                                <span><hr /></span>

                            </div>
                            <div className='loginInputs'>
                                <input type='text' placeholder='Enter Email' />
                                <input type='password' placeholder='Enter Password' />
                            </div>

                            <div className='loginForgotLinkCont'>
                                <div className='d-flex'>
                                    <Form.Check aria-label="option 1"  className='mx-2'/>
                                    <span>Remember me</span>
                                </div>
                                <a href='#'>Forgot Password? </a>

                            </div>
                            <button className='btn' onClick={()=>navigate('home')}>Login</button>
                            <div className='d-flex justify-content-center'>
                                <span>New to crud?</span>
                                <a href='#' className='ms-1'>Create an account</a>
                            </div>

                        </div>
                    </div>
                </div>

            </Modal>

        </div>


        // <div>
        //     {/* Navigation Bar */}
        //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //         <div className="container">
        //             <a className="navbar-brand" href="#">My Website</a>
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse" id="navbarNav">
        //                 <ul className="navbar-nav ms-auto">
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="#">Home</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="#">About</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="#">Services</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="#">Contact</a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>

        //     {/* Main Content */}
        //     <div className="container mt-4">
        //         <div className="row">
        //             <div className="col-md-8">
        //                 <h2>Welcome to My Website</h2>
        //                 <p>This is a simple page structure using React and Bootstrap. You can customize the content here.</p>
        //             </div>
        //             <div className="col-md-4">
        //                 <h4>Sidebar</h4>
        //                 <p>Additional content or links can go here.</p>
        //             </div>
        //         </div>
        //     </div>

        //     {/* Footer */}
        //     <footer className="bg-light py-3 mt-4">
        //         <div className="container text-center">
        //             <p>&copy; 2024 My Website. All rights reserved.</p>
        //         </div>
        //     </footer>
        // </div>





        // <div className='MainCont'>
        //     <div className='container'>
        //         <div className='row'>
        //             <div className='col-12'>
        //                 <h1>Login page</h1>

        //             </div>

        //         </div>
        //     </div>

        // </div>





        // <div>
        //     <div class="LoginPageContainer">
        //         <div class="LoginPageInnerContainer">
        //             <div class="ImageContianer">
        //                 <img src="/login-animate.gif" class="GroupImage" />
        //             </div>
        //             <div class="LoginFormContainer">
        //                 <div class="LoginFormInnerContainer">
        //                     <div class="LogoContainer">
        //                         <img src="/crudLogo.jpg" class="logo" />
        //                     </div>
        //                     <header class="header">Log in</header>
        //                     <header class="subHeader">Welcome to <b>CRUD Operations.</b> Please Enter your Details</header>

        //                     <form>
        //                         <div class="inputContainer">
        //                             <label class="label" for="emailAddress"><img src="https://i.imgur.com/Hn13wvm.png" class="labelIcon" /><span>Email
        //                                 Address*</span></label>
        //                             <input type="email" class="input" id="emailAddress" placeholder="Enter your Email Address" />
        //                         </div>
        //                         <div class="inputContainer">
        //                             <label class="label" for="emailAddress"><img src="https://i.imgur.com/g5SvdfG.png"
        //                                 class="labelIcon" /><span>Password*</span></label>
        //                             <input type="password" class="input" id="emailAddress" placeholder="Enter your Password" />
        //                         </div>
        //                         <div class="OptionsContainer">
        //                             <div class="checkboxContainer">
        //                                 <span className='mx-1'>Dont have account?</span>
        //                                 <a href='#' >Sign-In</a>
        //                             </div>
        //                             <a href="#" class="ForgotPasswordLink">Forgot Password?</a>
        //                         </div>
        //                         <button class="LoginButton" onClick={() => navigate('/home')}>Login</button>
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Login;