import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Formik } from 'formik';
import axios from 'axios';
import qs from 'qs';
import contentStyles from './contentStyles';
import './content.css';

const RecoverBox = () => {
  const classes = contentStyles();
  const urlRecover = 'http://hustholetest.pivotstudio.cn/managerapi/holes/';
  return (
    <>
      <Formik
          initialValues={{ hole_id: '' }}
          onSubmit={ (values) => {
            axios({
              url: urlRecover + values.hole_id,
              method: 'POST',
              headers: {
                Authorization: localStorage.getItem('token'),
              },
              withCredentials: true,
            }).then(
              (response) => console.log(response),
            ).catch(
              (error) => console.log(error),
            );
          }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          handleBlur,
        }) => (
        <form onSubmit={handleSubmit}>
          <div className='contentRecover'>
            <CssBaseline />
            <Typography className={classes.contentDeleteText}>
            恢复树洞
            </Typography>
            <div className='searchDiv'>
                <SearchIcon className={classes.searchIcon} />
                <input
                type='text'
                name='hole_id'
                className="inputDelete"
                placeholder="输入树洞ID"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.id}
                />
            </div>
            <Button
            className={classes.inputButton}
            disableRipple
            onClick={handleSubmit}
            >
            恢复
            </Button>
          </div>
        </form>
        )}
      </Formik>
   </>
  );
};
export default RecoverBox;
