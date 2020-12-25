import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchIcon from '@material-ui/icons/Search';
// import InputBase from '@material-ui/core/InputBase';
import { Button } from '@material-ui/core';
import Page from '../../Page';
import contentStyles from './contentStyles';
import theme from './contentTheme';
import '../../css/content.css';

const ContentPage = () => {
  const classes = contentStyles();
  return (
    <ThemeProvider theme={theme}>
      <Page
        title="Content"
      >
        <div className='content'>
          <CssBaseline />
          <Typography className={classes.contentDeleteText}>
            删除树洞
          </Typography>
          <div className='searchDiv'>
            <SearchIcon className={classes.searchIcon} />
            <input
            className="inputDelete"
            placeholder="树洞号"
            />
          </div>
          <Button
          className={classes.inputButton}
          disableRipple
          >
            删除
          </Button>
        </div>
      </Page>
    </ThemeProvider>
  );
};
export default ContentPage;
