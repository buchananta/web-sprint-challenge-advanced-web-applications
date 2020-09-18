import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import axiosWithAuth from '../utils/axiosWIthAuth';
// I have to brag a little bit..
// just wrote this entire component (minus the history.push line)
// in one go, and it all worked :D
const initCredentials = {
  username: '',
  password: ''
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState(initCredentials);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth().post('/api/login', credentials) 
      .then((res)=> {
        console.log(res)
        localStorage.setItem('token', res.data.payload);
        console.log(localStorage.getItem('token'));
        history.push('/bubbles');
      })
      .catch((e) => console.log(e))
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit} >
        <label>Username:&nbsp;
          <input
            type='text'
            name='username'
            value={credentials.username}
            onChange={handleChange}
          />
        </label>
        <label>Password:&nbsp;
          <input
            type='password'
            name='password'
            value={credentials.password}
            onChange={handleChange}
          />
        </label>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
