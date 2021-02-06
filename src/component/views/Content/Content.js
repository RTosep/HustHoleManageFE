import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Page from '../../Page';
import theme from './contentTheme';
import DeleteBox from './ContentDeleteBox';
import RecoverBox from './ContentRecoverBox';
import Comment from './Comment';
import './content.css';

const ContentPage = () => (
  <ThemeProvider theme={theme}>
    <Page
      title="Content"
    >
      <DeleteBox />
      <RecoverBox />
      <Comment />
    </Page>
  </ThemeProvider>
);
export default ContentPage;
