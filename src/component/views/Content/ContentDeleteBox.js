import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Formik } from 'formik';
import axios from 'axios';
import contentStyles from './contentStyles';
import './content.css';

const DeleteBox = () => {
  const classes = contentStyles();
  const [confirm, setConfirm] = useState(0);
  const [success, setSuccess] = useState(0);
  const urlDeleted = 'http://hustholetest.pivotstudio.cn/managerapi/holes/';
  return (
    <>
      <Formik
          initialValues={{ id: '' }}
          onSubmit={ (values) => {
            setConfirm(0);
            axios({
              url: urlDeleted + values.id,
              method: 'DELETE',
              headers: {
                Authorization: localStorage.getItem('token'),
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
              },
              withCredentials: true,
            }).then(
              (response) => {
                setSuccess(1);
                setTimeout(() => {
                  setSuccess(0);
                }, 3000);
              },
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
        // isSubmitting,
        }) => (
        <form onSubmit={handleSubmit}>
          <div className='contentDelete'>
            <CssBaseline />
            <Typography className={classes.contentDeleteText}>
            删除树洞
            </Typography>
            <div className='searchDiv'>
                <SearchIcon className={classes.searchIcon} />
                <input
                type='text'
                name='id'
                className="inputDelete"
                placeholder="输入树洞ID"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.id}
                />
            </div>
            <Button
            className={classes.commentDelBtn}
            disableRipple
            onClick={() => setConfirm(1)}
            >
            删除
            </Button>
          </div>
          <div className={ confirm === 1 ? 'confirmBox' : 'notShow'}>
            <Typography className='confirmBoxText'>
            确认要删除该树洞吗?
            </Typography>
            <button
            type='submit'
            className='confirm'
            onSubmit={handleSubmit}
            >
            确认
            </button>
            <button
            type='button'
            className='cancleConfirm'
            onClick={ () => setConfirm(0)}
            >
            取消
            </button>
          </div>
          <div className={ success === 1 ? 'DeletedShow' : 'notShow'}>
            <Typography className='deletedText'>
                该树洞已删除
            </Typography>
          </div>
        </form>
        )}
      </Formik>
   </>
  );
};
export default DeleteBox;
