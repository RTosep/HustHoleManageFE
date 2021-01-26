import React from 'react';
import { Formik } from 'formik';
// import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, TextField } from '@material-ui/core';
import './Login.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const hello = 'hello';
  return (
    <div className='loginPage'>
      <img className='pivotLogo' src='PivotStudioLogo.png'/>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={() => {
          navigate('/home', { replace: true });
          alert(hello);
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          handleBlur,
          // isSubmitting,
        }) => (
        <form onSubmit={handleSubmit}>
          <div className="loginBox">
            <Typography className="loginText">
              登录
            </Typography>
            <div className='loginUserName'>
              <img className='userLogo' src='user.jpg'/>
              <TextField
                className="loginUserInput"
                label="账号"
                name='email'
                color="primary"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                // onChange={ (e) => (console.log(e.target.value))}
              />
            </div>
            <div className='loginPassword'>
              <img className='pwdLogo' src='lock.jpg'/>
              <TextField
                className="loginPwdInput"
                label="密码"
                name='password'
                type='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                // onChange={ (e) => (console.log(e.target.value))}
              />
            </div>
            <Button
              disableRipple
              className='loginButton'
              type='submit'
              // disabled={isSubmitting}
              onClick={handleSubmit}
            >
              登录
            </Button>
          </div>
        </form>
        )}
       </Formik>
    </div>
  );
};
export default LoginPage;
