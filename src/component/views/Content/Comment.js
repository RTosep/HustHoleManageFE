import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Formik } from 'formik';
import axios from 'axios';
import contentStyles from './contentStyles';
import './content.css';
import CustomPaginationActionsTable from './CommentTable';

const Comment = () => {
  const classes = contentStyles();
  const MaxSize = 10000;

  return (
    <div className='comment'>
        <Formik
            initialValues={{ hole_id: '' }}
            onSubmit={ (values) => {
              axios({
                method: 'GET',
                url: `http://hustholetest.pivotstudio.cn/managerapi/replies/?hole_id=${values.hole_id}&start_id=0&list_size=${MaxSize}`,
              });
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
              评论管理
          </Typography>
          <Typography className='commentIdText'>
              评论ID
          </Typography>
          <Typography className='commentcntText'>
              评论内容
          </Typography>
          <Typography className='commentStaText'>
              状态
          </Typography>
          <div className='searchComment'>
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
          className={classes.searchCmBtn}
          disableRipple
          onClick={handleSubmit}
          >
          搜索
          </Button>
          <div className='commentLine'>
          </div>
          <div className='commentList'>
            <CustomPaginationActionsTable />
          </div>
        </form>
        )}
        </Formik>
        <Formik
            initialValues={{ hole_id: '' }}
            onSubmit={ (values) => {
            }}
        >
        {({
        //   values,
        //   handleChange,
          handleSubmit,
        }) => (
        <form onSubmit={handleSubmit}>
            <Button
            className={classes.commentDelBtn}
            disableRipple
            // onClick={() => setConfirm(1)}
            >
            删除
            </Button>
          <div className='notShow'>
            <Typography className='confirmBoxText'>
            确认要删除该评论吗?
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
            // onClick={ () => setConfirm(0)}
            >
            取消
            </button>
          </div>
          <div className='notShow'>
            <Typography className='deletedText'>
                该评论已删除
            </Typography>
          </div>
        </form>
        )}
        </Formik>
        <Formik
            initialValues={{ hole_id: '' }}
            onSubmit={ (values) => {
            }}
        >
        {({
        //   values,
        //   handleChange,
          handleSubmit,
        }) => (
        <form onSubmit={handleSubmit}>
            <Button
            className={classes.commentRecBtn}
            disableRipple
            // onClick={() => setConfirm(1)}
            >
            恢复
            </Button>
        </form>
        )}
        </Formik>
    </div>
  );
};

export default Comment;
