import '../css/addUser.css'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { postData, updateData } from "../helpers/helper"
import Table from 'react-bootstrap/Table';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaPlus } from "react-icons/fa";
import { IoCreate } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";

import { FaEdit } from "react-icons/fa";
import '../css/home.css'

import { deleteData, getData } from '../helpers/helper';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const AddUser = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('');
    const [photo, setPhoto] = useState(null);
    const [password, setPassword] = useState('')
    const [userDropDown, setUserDropDown] = useState("d-none")

    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
        if (location.state != null) {
            const userId = location.state?.id;
            updatingUser(userId)
        }
    }, [location])

    const updatingUser = async (id) => {
        const findUser = await getData(`/api/getUsers/${id}`)
        console.log("findUser:", findUser)
        const user = findUser?.data[0]
        console.log("user:", user)
        setFirstName(user.firstName)
        setLastName(user.lastName)
        setCity(user.city)
        setEmail(user.email)
        setPhone(user.phone)
        //setPassword(user.password)
        //setPhoto(user.photo)




    }

    const addUser = async (e) => {
        e.preventDefault();
        if (firstName == '' || lastName == "" || email == "" || phone == "" || city == "" || photo == "" || password == "") {
            alert("All fields are required!!")
        }
        else {

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (emailRegex.test(email)) {
                const userData = new FormData();
                userData.append("firstName", firstName);
                userData.append("lastName", lastName);
                userData.append("email", email);
                userData.append("phone", phone);
                userData.append("city", city);
                userData.append("photo", photo);
                userData.append("password", password);
                // for (let [key, value] of userData.entries()) {
                //     console.log(`${key}: ${value}`);
                // }

                // const file = userData.get('photo');

                // if (file) {
                //     console.log('File Name:', file.name);
                //     console.log('File Size:', file.size);
                //     console.log('File Type:', file.type);
                // }
                try {
                    // Send the FormData object to the backend
                    const resp = await fetch(`http://localhost:5000/api/register`, {
                        method: "POST",
                        body: userData, // FormData automatically sets the correct headers
                        credentials: 'include',
                    });
                    // Check if the response is okay
                    if (!resp.ok) {
                        console.log("error:", resp)
                        alert("unable to register user. Retry!!")

                    }
                    // Parse the JSON response
                    const data = await resp.json();

                    if (data.status == 201) {
                        alert("User registered successfully")
                        setFirstName("")
                        setLastName("")
                        setCity("")
                        setEmail("")
                        setPassword("")
                        setPhone("")
                        setPhoto(null)
                    }

                } catch (error) {
                    console.error('Error:', error);
                }
            } else {
                alert("Plese fill valid email")
            }

        }


    };

    const handleLogout = async () => {

        localStorage.clear();
        sessionStorage.clear();
        const resp = await getData("/api/logout")
        if (resp.status == 200) {
            alert(resp.message)
            navigate("/")
        } else {
            alert("Unable to Logout!!")
        }


    }

    const updateUser = async () => {
        

        alert("hello")
        const userData = new FormData();
        userData.append("firstName", firstName);
        userData.append("lastName", lastName);
        userData.append("email", email);
        userData.append("phone", phone);
        userData.append("city", city);
        userData.append("photo", photo);
        userData.append("password", password);

        const resp = await updateData(`/api/UpdateUser/${location.state.id}`, userData)
        alert("done")

        console.log("resp:", resp)
    }

  

    return (
        <div className='addUserContainer'>
            <Navbar expand="lg" className="" style={{ backgroundColor: "gray " }}>
                <Container fluid>
                    <Navbar.Brand href="#"><img src='crud.png' height={40} width={85} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {/* <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link> */}

                        </Nav>


                        <ul class="navbar-nav" onClick={() => { userDropDown == "d-block" ? setUserDropDown("d-none") : setUserDropDown("d-block") }}>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={localStorage.getItem("userPhoto") ? `http://localhost:5000/${localStorage.getItem("userPhoto")}` : "dummyUser.jpg"} width="40" height="40" class="rounded-circle" />
                                </a>
                                <div class={`dropdown-menu ${userDropDown}`} style={{ right: "0" }} aria-labelledby="navbarDropdownMenuLink">

                                    <a class="dropdown-item" href="#" onClick={handleLogout}>Log Out</a>
                                </div>
                            </li>
                        </ul>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='d-flex justify-content-center mt-5 pt-5' >
                <div className="form_wrapper">
                    <div className="form_container">
                        <div className="title_container">
                            <img src='/crud.png' alt='img' height={80} width={150} />
                        </div>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} className='addUserInputField'>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                </Form.Group>
                                <Form.Group as={Col} className='addUserInputField'>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} className='addUserInputField'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                                <Form.Group as={Col} className='addUserInputField'>
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Phone No." value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} className='addUserInputField'>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="Enter City" value={city} onChange={(e) => setCity(e.target.value)} />
                                </Form.Group>
                                <Form.Group as={Col} className='addUserInputField'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">

                                <Form.Group as={Col} className='addUserInputField'>
                                    <Form.Label>Photo</Form.Label>
                                    <Form.Control type="file" onChange={(e) => setPhoto(e.target.files[0])} />
                                </Form.Group>
                            </Row>

                            <div className=''>
                                <Button variant="dark" className='' onClick={() => navigate('/home')}>
                                    Back
                                </Button>
                                <Button variant="dark" type="submit" className='ms-2' onClick={addUser}>
                                    Add User
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AddUser;