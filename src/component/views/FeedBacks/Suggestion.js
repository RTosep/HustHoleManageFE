import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
} from '@material-ui/core';
import Select from '@material-ui/core/Select';
import { Formik } from 'formik';
import axios from 'axios';
import FeedBacksStyles from './FeedBacksStyles';
import SuggestionsTable from './SuggestionTable';
import './FeedBacks.css';

const Suggestion = () => {
  const classes = FeedBacksStyles();
  const [type, setType] = useState(0);
  return (
    <div className='suggestionFeedBack'>
        <Formik
            initialValues={{ hole_id: '' }}
            onSubmit={ (values) => {
            }}
        >
        {({
          values,
          handleChange,
          handleSubmit,
        }) => (
        <form onSubmit={handleSubmit}>
          <Typography className='suggestMagText'>
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
          <FormControl className='suggestionSelect'>
            <Select
            labelId='selectSuggestType'
            onChange={handleChange}
            value={values}
            >
              <MenuItem value={0}>建议</MenuItem>
              <MenuItem value={1}>故障</MenuItem>
              <MenuItem value={2}>其他</MenuItem>
            </Select>
          </FormControl>
          <Button
          className={classes.refreshBtn}
          disableRipple
          onClick={handleSubmit}
          >
          刷新
          </Button>
          <div className='commentLine'>
          </div>
          <div className='suggestionList'>
            <SuggestionsTable />
          </div>
        </form>
        )}
        </Formik>
    </div>
  );
};

export default Suggestion;
