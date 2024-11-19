import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaPlus } from "react-icons/fa";
import { IoCreate } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import '../css/home.css'
import { useEffect, useState } from 'react';
import { deleteData, getData } from '../helpers/helper';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const Home = () => {

  const [userData, setUserData] = useState([])
  const [userDropDown, setUserDropDown] = useState("d-none")
  const [refresh, setRefresh] = useState('')
  const [loginUserPhoto, setLoginUserPhoto] = useState('')
  const [serchListDisplay,setSearchListDisplay] = useState("d-none")
  const [searchQuery,setSearchQuery] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const users = await getData("/api/getUsers")
      setUserData(users.data)
    }
    getUsers()
  }, [refresh])

  const deleteUser = async (id) => {
    console.log("user id is ", id)

    const resp = await deleteData(`/api/DeleteUser/${id}`)
    console.log("delete resp:", resp)
    resp.status == 200 ? alert("User deleted Successfully") : alert("User not deleted")
    setRefresh(Math.random())
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

  const updateUser = async (id) => {
    navigate('/updateUser', { state: { id: id, updating: true } });
  }

  const handleSearchList = (e) =>{
    setSearchListDisplay("d-block")
    console.log(e.target.value)

    const userNames = userData.map((item)=> {return item.firstName})

    console.log("userNames:",userNames)


  }

  console.log("usersData:", userData)
  return (
    <div className='homeContainer w-100'>
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
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e)=>handleSearchList(e)}
              />
              <Button variant="dark">Search</Button>
            </Form>
            <div className={`searchList ${serchListDisplay}`}>
              <ul>
                <li>sdf</li>
                <li>sdf</li>
                <li>sdf</li>
                <li>sdf</li>
                <li>sdf</li>
                <li>sdf</li>
                <li>sdf</li>
                <li>sdf</li>
              </ul>
            </div>
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
      <div className="container tableContainer mt-5">
        <div className="row">
          <div className="col-12 mt-3">
            <div className='addButton'>
              <h1 >Welcome to User Database</h1>
              <button className='btn btn-success' onClick={() => { navigate('/addUser') }}>Add User </button>
            </div>
            <Table responsive className='text-center userTable  border' >
              <thead>
                <tr>
                  <th >#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>City</th>
                  <th>Photo</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userData?.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.firstName ? item.firstName : "-"}</td>
                    <td>{item.lastName ? item.lastName : "-"}</td>
                    <td>{item.email ? item.email : "-"}</td>
                    <td>{item.phone ? item.phone : "-"}</td>
                    <td>{item.city ? item.city : "-"}</td>
                    <td><img src={item.photo.startsWith("u") ? `http://localhost:5000/${item.photo}` : item.photo || "dummyUser.jpg"} height={70} width={70} alt='dummyUser' className='userImg' /></td>
                    <td className='d-flex justify-content-evenly'>
                      <button className='btn btn-warning buttonS' onClick={() => updateUser(item._id)}><FaEdit /></button>
                      <button className='btn btn-danger buttonS' onClick={() => deleteUser(item._id)}><FaTrashAlt /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;