import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Formik } from 'formik';
import axios from 'axios';
import FeedBacksStyles from './FeedBacksStyles';
import './FeedBacks.css';

const Suggestion = () => {
  const classes = FeedBacksStyles();
  return (
    <div className='suggestion'>
        <Formik
            initialValues={{ hole_id: '' }}
            onSubmit={ (values) => {
            }}
        >
        {({
          values,
          handleChange,
          handleSubmit,
          handleBlur,
        }) => (
        <form onSubmit={handleSubmit}>
          <Typography className='commentMagText'>
              用户建议
          </Typography>
          <Typography className='accountText'>
              账号
          </Typography>
          <Typography className='suggestCntText'>
              建议内容
          </Typography>
          <Typography className='suggestStaText'>
              发送时间
          </Typography>
          <Button
          className={classes.refreshBtn}
          disableRipple
          onClick={handleSubmit}
          >
          刷新
          </Button>
          <div className='commentLine'>
          </div>
          {/* <div className='commentList'>
            <CustomPaginationActionsTable />
          </div> */}
        </form>
        )}
        </Formik>
    </div>
  );
};

export default Suggestion;
