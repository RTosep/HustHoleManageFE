import React from 'react';
import {
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
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
import HomePage from '../views/Home/Home';
import ContentPage from '../views/Content/Content';
import FeedBackPage from '../views/FeedBacks/FeedBacks';
import ForestPage from '../views/Forest/Forest';
import HeatedHolePage from '../views/HeatedHole/HeatedHole';
import NotificationPage from '../views/Notification/Notification';
import PromotionPage from '../views/Promotion/Promotion';
import RecordPage from '../views/Records/Records';
import SettingPage from '../views/Setting/Setting';
import UpdatelogPage from '../views/Updatelogs/Updatelogs';
import UserPage from '../views/User/User';
import '../css/navListIcon.css';

// 导航栏
export default function NavBar() {
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
              <Link to='/home'>
                <Button className={classes.firstPageButton} disableRipple>
                  <DashboardIcon className={classes.dashBoardIcon}/>
                  <Typography className={classes.firstPageTypeText}>
                    首页
                  </Typography>
                </Button>
              </Link>
            </Box>
            {/* 各功能模块 */}
            <NavItem text="管理" list={manageList} />
            <NavItem text="功能" list={functionList} />
            <NavItem text="系统" list={systemList} />
          </Box>
        </Drawer>
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/user' component={UserPage} />
          <Route path='/content' component={ContentPage} />
          <Route path='/notification' component={NotificationPage} />
          <Route path='/forest' component={ForestPage} />
          <Route path='/heatedhole' component={HeatedHolePage} />
          <Route path='/promotion' component={PromotionPage} />
          <Route path='/feedback' component={FeedBackPage} />
          <Route path='/updatedlog' component={UpdatelogPage} />
          <Route path='/record' component={RecordPage} />
          <Route path='/setting' component={SettingPage} />
          <Redirect to='/home' />
        </Switch>
      </div>
    </ThemeProvider>
  );
}
