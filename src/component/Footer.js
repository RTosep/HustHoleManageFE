import React from 'react';
import {
  AppBar,
  Toolbar,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    height: '50px',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    height: '16px',
    lineHeight: '16px',
    position: 'absolute',
    top: '17px',
    left: '39px',
  },
}));

const FooterBar = () => {
  const classes = useStyles();
  return (
    <div>
        <AppBar
         className={classes.appBar}
        >
        <Toolbar>
            <img src='/pivotLogo.png' className={classes.logo} />
        </Toolbar>
        </AppBar>
    </div>
  );
};
export default FooterBar;
