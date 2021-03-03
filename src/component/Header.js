import React from 'react';
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
} from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import './css/Header.css';
// 头部栏的样式设置
const useStyles = makeStyles(() => ({
  // 主体样式
  root: {
    backgroundColor: '#4B9F79',
    height: '50px',
    borderBottom: '1px solid #808080',
    boxShadow: 'none',
  },
  // 文字样式
  typographyText: {
    fontSize: '14px',
    marginLeft: '0px',
    marginTop: '-13px',
    fontFamily: 'Source Han Sans',
    fontWeight: '500',
    fontStyle: 'normal',
    color: 'white',
  },
  // 图标样式
  notification: {
    position: 'absolute',
    right: '36px',
    bottom: '13px',
  },
}));
// 头部栏
const TopBar = () => {
  const classes = useStyles();
  return (
    <div className="header">
        <AppBar
          className={classes.root}
        >
        <Toolbar>
          <Typography className={classes.typographyText}>1037树洞</Typography>
        </Toolbar>
        <img src='/leaveLogo.png' className={classes.notification}/>
        </AppBar>
    </div>
  );
};

export default TopBar;
