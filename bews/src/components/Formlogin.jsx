import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { useAuth } from '../middelware/authContext';

function LoginForm() {

    const [userData, setUserData] = useState({
      username: '',
      password: '',
    })

    const [message, setMessage] = useState('');

    const {login} = useAuth();
    const navigate = useNavigate()

    const handelInputChange = (e) => {
      setUserData({ ...userData, [e.target.name]: e.target.value})
    }

    const handelLogin = async () => {
      try{
        const response = await axios.post('http://localhost:3000/api/login', userData)
        const token  = response.data.token
        login(token)
        navigate("/")
      }catch (error) {
        setMessage(error.response.data.message)
      }
    }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          {/* Bagian foto */}
          <img
            src="src/assets/bgh3.jpeg"
            alt="Placeholder"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          {/* Bagian form login */}
          <Form className="mt-3">
            <h2 className="text-center mb-4">Login to Your Account</h2>
            <p>{message}</p>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>username</Form.Label>
              <Form.Control type="text" name="username" onChange={handelInputChange} placeholder="username" required />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" onChange={handelInputChange} placeholder="Password" required />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Button onClick={handelLogin} variant="primary" type="button" className="w-100">
              Login
            </Button>

            <p className="mt-3 text-center">
              <a href="#">Forgot password?</a>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
