import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, MenuItem, Select } from '@material-ui/core';
import { Formik } from 'formik';
import axios from 'axios';
import Page from '../../Page';
import ForestTable from './ForestTable';
import MyContext from '../../../contextManager';
import './forest.css';

const ForestPage = () => {
  const MAXSIZE = 10;
  const [show, setShow] = React.useState(0);
  const [ForestList, setForestList] = useState([]);
  return (
    <MyContext.Provider value={{ setShow }}>
    <Page
      title="Forest"
    >
      <Formik
        initialValues={{ type: '' }}
        onSubmit={ () => {
          axios({
            method: 'GET',
            url: `http://hustholetest.pivotstudio.cn/managerapi/forests?start_id=0&list_size=${MAXSIZE}`,
            headers: {
              Authorization: localStorage.getItem('token'),
            },
            withCredentials: true,
          }).then(
            (response) => {
              setForestList(response.data.forests);
            },
          );
        }}
      >
        {({
          handleSubmit,
        }) => (
        <form onSubmit={handleSubmit}>
          <div className='forestBox'>
            <Typography className='firstText'>
            小树林管理
            </Typography>
            <div className='allText'>
              <Typography className='fnText'>
                小树林名称
              </Typography>
              <Typography className='fsText'>
                小树林简介
              </Typography>
              <Typography className='ftText'>
                提交时间
              </Typography>
              <Typography className='fzText'>
                状态
              </Typography>
            </div>
            <Button
            className='rfsBtn'
            disableRipple
            onClick={handleSubmit}
            >
              刷新
            </Button>
            <div className='baseLine'></div>
            <div className='fTable'>
              <ForestTable ForestList={ForestList} show={show}/>
            </div>
          </div>
        </form>
        )}
      </Formik>
      <Formik
        initialValues={{ type: '' }}
        onSubmit={ (values) => {
          console.log('hello');
          // axios({
          //   method: 'GET',
          //   url: `http://hustholetest.pivotstudio.cn/managerapi/feedback?start_id=0&type=${values.type}&list_size=${MaxSize}`,
          //   headers: {
          //     Authorization: localStorage.getItem('token'),
          //   },
          //   withCredentials: true,
          // }).then(
          //   (response) => {
          //     setSuggestionList(response.data.msg);
          //   },
          // );
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
        }) => (
        <form onSubmit={handleSubmit}>
          <div className={ show === 0 ? 'notShow' : 'detailBox' }>
            <div className='headImg'></div>
            <Typography className='boxTitle'>
              小树林名称
            </Typography>
            <div className='gapDiv'>
            </div>
            <Typography className='typeText'>类型</Typography>
            <div className='selectForm'>
              <Select
              name='type'
              onChange={handleChange}
              value={values.type}
              disableUnderline
              >
                <MenuItem value={0}>情感</MenuItem>
                <MenuItem value={1}>校园</MenuItem>
                <MenuItem value={2}>学习</MenuItem>
                <MenuItem value={3}>娱乐</MenuItem>
                <MenuItem value={4}>限定</MenuItem>
              </Select>
            </div>
            <button
            className='passBtn'
            type='submit'
            onClick={() => { setShow(0); handleSubmit(); }}
            >
              通过
            </button>
            <button
            type='submit'
            className='rejectBtn'
            onClick={() => { setShow(0); handleSubmit(); }}
            >
              拒绝
            </button>
          </div>
        </form>
        )}
      </Formik>
    </Page>
    </MyContext.Provider>
  );
};
export default ForestPage;
