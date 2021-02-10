import React from 'react';
import Typography from '@material-ui/core/Typography';
import Page from '../../Page';
import Evaluation from './Evaluation';
import Suggestion from './Suggestion';

const FeedBackPage = () => (
    <Page
      title="FeedBack"
    >
      <Evaluation />
      <div className='suggestionList'>
        <Typography className='suggestText'>
          用户建议
        </Typography>
        <Suggestion />
      </div>
    </Page>
);
export default FeedBackPage;
