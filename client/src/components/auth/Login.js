import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  // Manage state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  // Destructure the fields from form data
  const { email, password } = formData;

  // Function to keep track of the changes on the form
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Function to submit the data to the database
  const onSubmit = async e => {
    e.preventDefault();
    console.log('SUCCESS');
  };
  return (
    <Fragment>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign Into Your Account
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            required
            minLength='6'
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
    </Fragment>
  );
}

export default Login;
