import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';
import axios from 'axios';
import './Register.css';
import { apiUrls, baseUrl } from '../lib/constants';

export default function Register() {
  const navigate = useNavigate();
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphones] = useState('');
  const [password, setpassword] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      showError('Please enter valid email address!');
    } else if (!validateFirstName(fname)) {
      showError('Please enter valid First name');
    } else if (!validateLastName(lname)) {
      showError('Please enter valid last name');
    } else if (!validateMobile(phone)) {
      showError('Please enter valid 10 digit Contact Number');
    } else if (password === '') {
      showError('Please enter password');
    } else if (password.length < 6 || password.length > 15) {
      showError('Password length is min 6 and max is 15');
    } else {
      submit();
    }
  };

  const submit = async () => {
    await axios
      .post(baseUrl + apiUrls.REGISTER_URL, {
        userName: fname + ' ' + lname,
        email: email,
        password: password,
        mobile: phone,
      })
      .then(() => {
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registered Successfully',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/login');
      })
      .catch((error) => {
        swal.fire({
          position: 'center',
          icon: 'error',
          title: error.response.data,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const showError = (text) => {
    swal.fire({ icon: 'error', title: 'Oops...', text });
  };

  const validateFirstName = (fname) => /^[a-zA-Z]+$/.test(fname);
  const validateLastName = (lname) => /^[a-zA-Z]+$/.test(lname);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateMobile = (mobile) => /^\d{10}$/.test(mobile);

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <h2>Registration Form

        </h2>
        <form onSubmit={handleForm}>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fname}
            onChange={(e) => setfname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your last name"
            value={lname}
            onChange={(e) => setlname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Your mobile number"
            maxLength={10}
            minLength={10}
            value={phone}
            onChange={(e) => setphones(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <p className="terms">
            By creating an account, you agree to our terms of service and privacy policy.
          </p>
          <button type="submit">Register User</button>
        </form>
        <p className="signin-text">
          Already have an account? 
          <p>
              <a href="/login">Login</a>
          </p>
          
        </p>
      </div>
    </div>
  );
}



