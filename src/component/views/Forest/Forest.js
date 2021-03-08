import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, MenuItem, Select } from '@material-ui/core';
import { Formik } from 'formik';
import qs from 'qs';
import axios from 'axios';
import Page from '../../Page';
import ForestTable from './ForestTable';
import { ForestContext } from '../../../contextManager';
import './forest.css';

const ForestPage = () => {
  const MAXSIZE = 10000;
  const [detail, setDetail] = useState({});
  const [show, setShow] = React.useState(0);
  const [approval, setApproval] = useState(false);
  const [forestId, setForestId] = useState('');
  const [ForestList, setForestList] = useState([]);
  return (
    <ForestContext.Provider value={{ setShow, setDetail }}>
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
              console.log(response.data.forests);
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
              <ForestTable ForestList={ForestList} show={show} detail={detail}/>
            </div>
          </div>
        </form>
        )}
      </Formik>
      <Formik
        initialValues={{ type: 4 }}
        onSubmit={ (values, { setSubmitting }) => {
          axios({
            method: 'POST',
            url: `http://hustholetest.pivotstudio.cn/managerapi/forests/applied/${forestId}`,
            headers: {
              Authorization: localStorage.getItem('token'),
            },
            data: qs.stringify({
              is_approved: approval,
              type: values.type,
            }),
            withCredentials: true,
          }).then(
            (response) => {
              setSubmitting(false);
            },
          ).catch(
            (reason) => {
              setSubmitting(false);
              console.log(reason);
            },
          );
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
        <form onSubmit={handleSubmit}>
          <div className={ show === 0 ? 'notShow' : 'detailBox' }>
            <div className='headImg'>
              <img className='coverImg' src={detail.cover_url} />
            </div>
            <Typography className='boxTitle'>
              {detail.name}
            </Typography>
            <div className='gapDiv'>
              <img className='backgroundImg' src={detail.background_image_url} />
              <Typography className='gapDivText'>
                {detail.description}
              </Typography>
            </div>
            <div className='bottomDiv'>
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
              <div>
                <button
                className='passBtn'
                type='submit'
                disabled={isSubmitting}
                onClick={() => {
                  setShow(0);
                  setApproval(true);
                  setForestId(detail.forest_id);
                  handleSubmit();
                }}
                >
                  通过
                </button>
              </div>
              <div>
                <button
                type='submit'
                className='rejectBtn'
                disabled={isSubmitting}
                onClick={() => {
                  setShow(0);
                  setApproval(false);
                  setForestId(detail.id);
                  handleSubmit();
                }}
                >
                  拒绝
                </button>
              </div>
            </div>
          </div>
        </form>
        )}
      </Formik>
    </Page>
    </ForestContext.Provider>
  );
};
export default ForestPage;
