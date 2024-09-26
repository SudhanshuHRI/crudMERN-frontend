import "../css/registerComponent.css"

const RegisterComponent = ({ switchForm }) => {
    return (
        <>
            <div className='loginHr mb-0 '>
                <span ><hr/></span>
                <span>Or create with</span>
                <span><hr /></span>

            </div>

            <div className="inputDiv">
                <div className='loginInputs'>
                    <input type='text' placeholder='Enter first name' />
                    <input type='text' placeholder='Enter last name' />
                    <input type='email' placeholder='Enter your Email' />
                    <input type='text' placeholder='Enter your number' />
                    <input type='password' placeholder='Enter your password' />
                    <input type='text' placeholder='Enter your city' />

                </div>
                <button className='btn registerButton mt-2 mb-2' >Register</button>
                <div className='d-flex justify-content-center'>
                    <span>Already have account?</span>
                    <a href='#' className='ms-1' onClick={() => switchForm("login")}>Login</a>
                </div>
            </div>
        </>
    );
}

export default RegisterComponent;