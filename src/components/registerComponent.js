import { useState } from "react";
import "../css/registerComponent.css"
import { postData } from "../helpers/helper";


const RegisterComponent = ({ switchForm }) => {

    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", password: "", city: "" })

    // const [firstname,setFirstname] = useState("")
    // const [lastname,setLastName] = useState('');
    // const [email,setEmail] = useState('');
    // const [phone,setPhone] = useState('')
    // const [password,setPassword] = useState('');
    // const [city,setCity] = useState('')

    const handleFormValues = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const registerUser = async () => {

        let emptyValues = Object.values(formData).filter((item) => item == "");

        if (emptyValues.length > 0) {
            alert("Please fill all fields!!")
        } if (formData.phone.length != 10) {
            alert("Phone no should be of 10 digits")
        } else {
            const resp = await postData("/api/register", formData)
           
            if (resp.status == 201) {
                alert("User registered successfully.")
                switchForm("login")
            } else {
                alert("User not registered!!")
            }
        }

    }

    return (
        <>
            <div className='loginHr mb-0 '>
                <span ><hr /></span>
                <span>Or create with</span>
                <span><hr /></span>

            </div>

            <div className="inputDiv">
                <div className='loginInputs'>
                    <input type='text' placeholder='Enter first name' name="firstName" value={formData.firstname} onChange={handleFormValues} />
                    <input type='text' placeholder='Enter last name' name="lastName" value={formData.lastname} onChange={handleFormValues} />
                    <input type='email' placeholder='Enter your Email' name="email" value={formData.email} onChange={handleFormValues} />
                    <input type='text' placeholder='Enter your number' name="phone" value={formData.phone} onChange={handleFormValues} />
                    <input type='password' placeholder='Enter your password' name="password" value={formData.password} onChange={handleFormValues} />
                    <input type='text' placeholder='Enter your city' name="city" value={formData.city} onChange={handleFormValues} />

                </div>
                <button className='btn registerButton mt-2 mb-2' onClick={registerUser}>Register</button>
                <div className='d-flex justify-content-center'>
                    <span>Already have account?</span>
                    <a href='#' className='ms-1' onClick={() => switchForm("login")}>Login</a>
                </div>
            </div>
        </>
    );
}

export default RegisterComponent;