import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaGoogle, FaFacebookF, FaGithub } from 'react-icons/fa';
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, role });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-form">
          <h2 className="text-center py-2">Sign Up</h2>
          <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="position-relative">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="password-eye" onClick={togglePasswordVisibility}>
                {passwordVisible ? <EyeSlash /> : <Eye />}
              </div>
            </Form.Group>

            <Form.Group>
              <Form.Label>Sign up as</Form.Label>
              <div className="radio-group">
                <Form.Check
                  type="radio"
                  label="Instructor"
                  name="role"
                  value="instructor"
                  checked={role === 'instructor'}
                  onChange={() => setRole('instructor')}
                />
                <Form.Check
                  type="radio"
                  label="Student"
                  name="role"
                  value="student"
                  checked={role === 'student'}
                  onChange={() => setRole('student')}
                />
              </div>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              SignUp
            </Button>
            {/* <Button variant="link" className="forgot-password mt-3" onClick={() => alert('Forgot Password Clicked')}>
              Forgot Password?
            </Button> */}
            <div className="text-center mt-4">
              <a href="/login">Have an account? Login</a>
            </div>
          </Form>

          {/* Social Login Buttons */}
          <div className="social-login mt-4 text-center">
            <p>Or Sign up with:</p>
            <div className="social-buttons">
              <Button variant="light" className="social-button">
                <FaGoogle className="social-icon" />
                Google
              </Button>
              <Button variant="light" className="social-button">
                <FaFacebookF className="social-icon" />
                Facebook
              </Button>
              {/* <Button variant="light" className="social-button">
                <FaGithub className="social-icon" />
                GitHub
              </Button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="blank-container">
        {/* Optional: Add content or styling here later */}
      </div>
    </div>
  );
}

export default Signup;
