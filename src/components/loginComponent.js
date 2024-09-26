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
import { getData, postData } from '../helpers/helper';

const LoginComponent = ({ switchForm }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    async function loginCheck() {

        if (email == "") {
            alert("Email is required!!")
        } else if (password == '') {
            alert("password is required!!")
        } else {
            const dataObject = {
                email: email,
                password: password
            }

            const data = await postData("/api/login", dataObject);

            console.log("Login response:", data)
            data.status == 200 ? navigate('/home') : alert(data.error);
        }

    }
    return (
        <>
            <div className='loginHr'>
                <span><hr /></span>
                <span>Or use your email account</span>
                <span><hr /></span>

            </div>
            <div className='loginInputs'>
                <input type='text' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className='loginForgotLinkCont'>
                <div className='d-flex'>
                    <Form.Check aria-label="option 1" className='mx-2' />
                    <span>Remember me</span>
                </div>
                <a href='#' onClick={() => switchForm("forgot")}>Forgot Password? </a>

            </div>
            <button className='btn' onClick={() => loginCheck()}>Login</button>
            <div className='d-flex justify-content-center'>
                <span>New to crud?</span>
                <a href='#' className='ms-1' onClick={() => switchForm("register")}>Create an account</a>
            </div>
        </>
    );
}

export default LoginComponent;