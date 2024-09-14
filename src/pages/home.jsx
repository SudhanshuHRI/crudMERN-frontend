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
// import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';






const Home = () => {

  const navigate = useNavigate();

  return (
    <div className='homeContainer w-100'>
      <Navbar expand="lg" className="bg-body-tertiary">
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
              />
              <Button variant="outline-success">Search</Button>
            </Form>
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
            <Table responsive className='text-center userTable'>
              <thead>
                <tr>
                  <th style={{borderTopLeftRadius:"30px",borderBottomLeftRadius:"30px", border:"none"}}>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>City</th>
                  <th>Photo</th>
                  <th style={{borderTopRightRadius:"30px",borderBottomRightRadius:"30px", border:"none"}}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>1</td>
                  <td>Mark</td>
                  <td><img src='dummyUser.jpg' height={70} width={70} alt='dummyUser'  className='userImg'/></td>
                  <td className='d-flex justify-content-evenly'>

                    <button className='btn btn-warning buttonS'><FaEdit /></button>
                    <button className='btn btn-danger buttonS'><FaTrashAlt /></button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>1</td>
                  <td>Mark</td>
                  <td><img src='dummyUser.jpg' height={100} width={100} alt='dummyUser' className='userImg' /></td>
                  <td className='d-flex justify-content-evenly'>

                    <button className='btn btn-warning buttonS' ><FaEdit /></button>
                    <button className='btn btn-danger buttonS'><FaTrashAlt /></button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>1</td>
                  <td>Mark</td>
                  <td><img src='dummyUser.jpg' height={100} width={100} alt='dummyUser' className='userImg' /></td>
                  <td className='d-flex justify-content-evenly'>

                    <button className='btn btn-warning buttonS'><FaEdit /></button>
                    <button className='btn btn-danger buttonS'><FaTrashAlt /></button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>1</td>
                  <td>Mark</td>
                  <td><img src='dummyUser.jpg' height={100} width={100} alt='dummyUser' className='userImg' /></td>
                  <td className='d-flex justify-content-evenly'>

                    <button className='btn btn-warning buttonS'><FaEdit /></button>
                    <button className='btn btn-danger buttonS'><FaTrashAlt /></button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>1</td>
                  <td>Mark</td>
                  <td><img src='dummyUser.jpg' height={100} width={100} alt='dummyUser' className='userImg' /></td>
                  <td className='d-flex justify-content-evenly'>

                    <button className='btn btn-warning buttonS'><FaEdit /></button>
                    <button className='btn btn-danger buttonS'><FaTrashAlt /></button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>1</td>
                  <td>Mark</td>
                  <td><img src='dummyUser.jpg' height={100} width={100} alt='dummyUser' className='userImg' /></td>
                  <td className='d-flex justify-content-evenly'>

                    <button className='btn btn-warning buttonS'><FaEdit /></button>
                    <button className='btn btn-danger buttonS'><FaTrashAlt /></button>
                  </td>
                </tr>


              </tbody>
            </Table>
          </div>
        </div>

      </div>
    </div>

  );
}

export default Home;