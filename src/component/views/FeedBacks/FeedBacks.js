import React from 'react';
import Page from '../../Page';
import Evaluation from './Evaluation';
import Suggestion from './Suggestion';

const FeedBackPage = () => (
    <Page
      title="FeedBack"
    >
      <Evaluation />
      <Suggestion />
    </Page>
);
export default FeedBackPage;
