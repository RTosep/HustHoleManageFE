import { Typography, Button } from '@material-ui/core';
import { Formik } from 'formik';
import React from 'react';
import './FeedBacks.css';
import FeedBacksStyles from './FeedBacksStyles';

const Evaluation = () => {
  const classes = FeedBacksStyles();
  //   const url = 'http';
  return (
    <div className='userEvaluation'>
      <Typography className='userEvaText'>
          用户评价
      </Typography>
      <Typography className='percentText'>
        用户净推荐值(9~10分人数占比-1~6分人数占比)：
      </Typography>
      <Formik
        onSubmit={() => {
        }}
      >
        {({
          handleSubmit,
        }) => (
        <form onSubmit={handleSubmit}>
          <Button
              disableRipple
              className={classes.refreshBtn}
              type='submit'
              onClick={handleSubmit}
          >
            刷新
          </Button>
        </form>
        )}
       </Formik>
        <div className='line'>
            <div className='rowLine'>
                <div className='rowLine1'></div>
                <div className='rowLine2'></div>
            </div>
            <div className='columLine'>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
                <div className='line4'></div>
                <div className='line5'></div>
                <div className='line6'></div>
                <div className='line7'></div>
                <div className='line8'></div>
                <div className='line9'></div>
                <div className='line10'></div>
            </div>
        </div>
       <Typography className='scoreText'>
           评分
       </Typography>
       <Typography className='numberText'>
           人数
       </Typography>
        <div className='scoreText'>
            <div className='seriousScoreText'>
                <div className='seriousScoreText1'>1</div>
                <div className='seriousScoreText2'>2</div>
                <div className='seriousScoreText3'>3</div>
                <div className='seriousScoreText4'>4</div>
                <div className='seriousScoreText5'>5</div>
                <div className='seriousScoreText6'>6</div>
            </div>
            <div className='oralScoreText'>
                <div className='oralScoreText1'>7</div>
                <div className='oralScoreText2'>8</div>
            </div>
            <div className='exeScoreText'>
                <div className='exeScoreText1'>9</div>
                <div className='exeScoreText2'>10</div>
            </div>
        </div>
    </div>
  );
};
export default Evaluation;
