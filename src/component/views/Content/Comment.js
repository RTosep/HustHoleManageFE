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
import { CommentContext } from '../../../contextManager';
import CustomPaginationActionsTable from './CommentTable';

const Comment = () => {
  const classes = contentStyles();
  const MaxSize = 1000;
  const [deleteShow, setDeleteShow] = useState(0);
  const [alreadyDel, setAlreadyDel] = useState(0);
  const [CommentList, setCommentList] = useState([]);
  const [checkList, setCheckList] = useState([]);
  const [holeId, setHoldId] = useState(-1);
  return (
    <CommentContext.Provider value={{ setCheckList }}>
    <div className='comment'>
        <Formik
            initialValues={{ hole_id: '' }}
            onSubmit={ (values) => {
              setHoldId(values.hole_id);
              axios({
                method: 'GET',
                url: `http://hustholetest.pivotstudio.cn/managerapi/replies?hole_id=${values.hole_id}&start_id=0&list_size=${MaxSize}`,
                headers: {
                  Authorization: localStorage.getItem('token'),
                },
                withCredentials: true,
              }).then(
                (response) => {
                  setCommentList(response.data.msg);
                },
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
              name='hole_id'
              className="inputDelete"
              placeholder="输入树洞ID"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.hole_id}
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
            <CustomPaginationActionsTable CommentList={CommentList} checkList={checkList}/>
          </div>
        </form>
        )}
        </Formik>
        <Formik
            initialValues={{ hole_id: '' }}
            onSubmit={ (values) => {
              axios({
                method: 'delete',
                url: 'http://hustholetest.pivotstudio.cn/managerapi/replies',
                headers: {
                  Authorization: localStorage.getItem('token'),
                  'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                },
                data: {
                  reply_ids: checkList.toString(),
                },
                withCredentials: true,
              }).then(
                (response) => {
                  setAlreadyDel(1);
                  setDeleteShow(0);
                  setTimeout(() => {
                    setAlreadyDel(0);
                  }, 3000);
                },
              );
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
            onClick={() => setDeleteShow(1)}
            >
            删除
            </Button>
          <div className={deleteShow === 0 ? 'notShow' : 'confirmCmtBox'}>
            <Typography className='confirmCmtBoxText'>
            确认要删除该评论吗?
            </Typography>
            <button
            type='submit'
            className='confirmCmt'
            onSubmit={handleSubmit}
            >
            确认
            </button>
            <button
            type='button'
            className='cancleConfirmCmt'
            onClick={ () => { setDeleteShow(0); }}
            >
            取消
            </button>
          </div>
          <div className={ alreadyDel === 0 ? 'notShow' : 'DeletedShow' }>
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
    </CommentContext.Provider>
  );
};

export default Comment;
