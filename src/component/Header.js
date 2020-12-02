import React from 'react';
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
} from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import './css/Header.css';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#4B9F79',
    height: '50px',
    borderBottom: '1px solid #808080',
    boxShadow: 'none',
  },
  typographyText: {
    fontSize: '14px',
    marginLeft: '39px',
    marginTop: '-13px',
    fontFamily: 'Source Han Sans',
    fontWeight: '500',
    fontStyle: 'normal',
  },
  notification: {
    position: 'absolute',
    right: '36px',
    bottom: '13px',
  },
}));

const TopBar = () => {
  const classes = useStyles();

  return (
    <div className="header">
        <AppBar
          className={classes.root}
        >
        <Toolbar>
            <div className="headerLogo"></div>
            <Typography className={classes.typographyText}>1037树洞</Typography>
        </Toolbar>
        <NotificationsNoneIcon className={classes.notification}/>
        </AppBar>
    </div>
  );
};

export default TopBar;
