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


const UpdateUser = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('');
    const [photo, setPhoto] = useState(null);
    const [password, setPassword] = useState('')
    const [userDropDown, setUserDropDown] = useState("d-none")
    const [updateUserId, setUpdateUserId] = useState('')

    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
        if (location.state != null) {
            const userId = location.state?.id;
            updatingUser(userId)
            setUpdateUserId(userId)
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
        setPassword(user.password)
        setPhoto(user.photo)




    }



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

    const updateUser = async (e) => {
        e.preventDefault();
        // console.log("firstName",firstName)
        // console.log("lastName",lastName)
        // console.log("email",email)
        // console.log("phone",phone)
        // console.log("city",city)
        // console.log("password",password)
        // console.log("photo",photo)


        const UpdatedData = new FormData;

        UpdatedData.append("firstName", firstName);
        UpdatedData.append("lastName", lastName);
        UpdatedData.append("email", email);
        UpdatedData.append("phone", phone);
        UpdatedData.append("city", city);
        UpdatedData.append("photo", photo);
        UpdatedData.append("password", password);


        // for (let [key, value] of UpdatedData.entries()) {
        //     console.log(`${key}: ${value}`);
        // }

        const resp = await updateData(`/api/UpdateUser/${updateUserId}`, UpdatedData)
        

        if(resp.status==200){
            alert("User Updated!!")
        }

       
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
                                    <img src="dummyUser.jpg" width="40" height="40" class="rounded-circle" />
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
                                <Button variant="dark" type="submit" className='ms-2' onClick={updateUser}>
                                    Update User
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default UpdateUser;