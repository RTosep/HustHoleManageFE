import React from 'react';
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
                <Button className={classes.firstPageButton} disableRipple>
                  <DashboardIcon className={classes.dashBoardIcon}/>
                  <Typography className={classes.firstPageTypeText}>
                    首页
                  </Typography>
                </Button>
            </Box>
            {/* 各功能模块 */}
            <NavItem text="管理" list={manageList} />
            <NavItem text="功能" list={functionList} />
            <NavItem text="系统" list={systemList} />
          </Box>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
            Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel.
             Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
            gravida rutrum quisque non tellus.
            Convallis convallis tellus id interdum velit laoreet id
            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
            Amet nisl suscipit
            adipiscing bibendum est ultricies integer quis.
             Cursus euismod quis viverra nibh cras.
            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
             Mauris commodo quis
            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue.
            At augue eget
            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
             Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus
             sed
            vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
            hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
             et
            tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique
             sollicitudin
            nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis
             orci a.
          </Typography>
        </main>
      </div>
    </ThemeProvider>
  );
}
