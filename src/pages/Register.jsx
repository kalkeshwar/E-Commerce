import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RegistrationContainer = styled.div`
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  height:100vh;
  background-color:#6db2c15e;
`;

const RegistrationForm = styled.form`
  background: rgba(255, 255, 255, 0.8);
  width:50%;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

const Notuser=styled.div`
  margin:5px 0;
`;

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username:'',
    password: '',
    confirmPassword: '',
    country: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.firstName.trim() === '') {
      newErrors.firstName = 'First name is required';
    }
    if (formData.lastName.trim() === '') {
      newErrors.lastName = 'Last name is required';
    }
    if (formData.username.trim() === '') {
      newErrors.userName = 'Last name is required';
    }
    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is not valid';
    }
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (formData.country.trim() === '') {
      newErrors.country = 'Country is required';
    }

    setErrors(newErrors);

    // Return true if there are no errors, and false otherwise
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission logic here
      try {
        fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          })
        .then(res => res.json())
        .then(console.log);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <RegistrationContainer>
      <RegistrationForm onSubmit={handleSubmit}>
        <h2>Register</h2>
        <FormInput
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        {errors.firstName && <p style={{color:"red"}}>{errors.firstName}</p>}
        <FormInput
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        {errors.lastName && <p style={{color:"red"}}>{errors.lastName}</p>}
        <FormInput
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        {errors.userName && <p style={{color:"red"}}>{errors.userName}</p>}
        <FormInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
        <FormInput
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
        <FormInput
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && <p style={{color:"red"}}>{errors.confirmPassword}</p>}
        <FormInput
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country"
        />
        {errors.country && <p style={{color:"red"}}>{errors.country}</p>}
        <SubmitButton type="submit">Register</SubmitButton>
        <Notuser>Already a user?<Link to="/login">Login</Link></Notuser>
      </RegistrationForm>
    </RegistrationContainer>
  );
};

export default Register;
