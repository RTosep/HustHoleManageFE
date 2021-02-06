import React, { useState } from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, TextField } from '@material-ui/core';
import Header from '../../Header';
import './Login.css';
import FooterBar from '../../Footer';

const LoginPage = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(0);
  const urlLogin = 'http://hustholetest.pivotstudio.cn/managerapi/auth/login';
  return (
    <div className='loginPage'>
      <Header />
      <img className='pivotLogo' src='PivotStudioLogo.png'/>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          axios.post(urlLogin, qs.stringify({
            email: values.email,
            password: values.password,
          }, { withCredentials: true })).then(
            (response) => {
              localStorage.setItem('token', response.data.token);
              navigate('/app/home', { replace: true });
            },
          ).catch(
            (error) => setState(1),
          );
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
            <div className={ state === 1 ? 'loginError' : 'loginNone'}>
              <Typography className='loginFailedText'>
                登陆失败
              </Typography>
              <Typography className='loginRetryText'>
                账号或密码错误，请重试。
              </Typography>
              <button type='button' className='sureText' onClick={ () => setState(0) }>
                确认
              </button>
            </div>
          </div>
        </form>
        )}
       </Formik>
       <FooterBar />
    </div>
  );
};
export default LoginPage;
