import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {login} from "../redux/Apicalls"
import { useDispatch } from 'react-redux';

const LoginContainer = styled.div`
  background: url('src/assets/image.jpeg') no-repeat center center fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
`;

const Notuser=styled.div`
margin:5px 0;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;


const Login = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData)

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login form submission logic here
      login(dispatch,formData)
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h2>Login</h2>
        <FormInput
          type="text"
          name="username"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <FormInput
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <SubmitButton type="submit">Login</SubmitButton>
        <Notuser>if you are not a user?<Link to="/register">Register</Link></Notuser>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
