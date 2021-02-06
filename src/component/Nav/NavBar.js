import React, { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { manageList, functionList, systemList } from './navListNname';
import useStyles from './navStyles';
import theme from './navTheme';
import NavItem from './NavItem';
import '../css/navListIcon.css';
// 导航栏
export default function NavBar() {
  // 使用样式
  const classes = useStyles();
  return (
    // 引入主题
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        {/* 样式基线 */}
        <CssBaseline />
        {/* 导航栏组件 */}
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <Box
            height='100%'
            display="flex"
            flexDirection="column"
          >
            {/* 管理员模块 */}
            <Box
                display="flex"
                flexDirection="column"
                height="144px"
                pt={5}
                pl={2}
            >
              <div className={classes.managerIcon}>
              </div>
              <Typography
                  className={classes.typographyText}
              >
                管理员
              </Typography>
              <Divider style={{ marginLeft: '-16px', color: '#E5E5E5' }}/>
            </Box>
            <Box>
                <Button
                className={classes.firstPageButton}
                component={RouterLink}
                activeClassName='activeShow'
                to='/app/home'
            // className={`classes.firstPageButton ${isShow === homeState ? 'activeShow' : 'show'}`}
                // onClick={() => changeIsShow(homeState)}
                disableRipple
                >
                  <DashboardIcon className={classes.dashBoardIcon}/>
                  <Typography className={classes.firstPageTypeText}>
                    数据看板
                  </Typography>
                </Button>
            </Box>
            {/* 各功能模块 */}
            <NavItem text="管理" list={manageList} />
            <NavItem text="功能" list={functionList} />
            <NavItem text="系统" list={systemList} />
          </Box>
        </Drawer>
      </div>
    </ThemeProvider>
  );
}
