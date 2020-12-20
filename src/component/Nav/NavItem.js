import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './navStyles';
import '../css/navListIcon.css';
// 导航栏个模块的列表项
const NavItem = (props) => {
  const classes = useStyles();
  return (
    <>
      <Divider />
      <Box>
        <Typography className={classes.tyText}>
          {props.text}
        </Typography>
      </Box>
      <List>
        {props.list.map((item) => (
          <Link
          to={item.path}
          key={item.state}
          >
            <Button
            className={`classes.listButton ${props.isShow === item.state ? 'activeShow' : 'show'}`}
            onClick={() => props.changeIsShow(item.state)}
            disableRipple
            >
              <Box className={classes.listIcon}>
                {item.icon}
              </Box>
              <Typography className={classes.listText} align='left'>
                {item.name}
              </Typography>
            </Button>
            </Link>
        ))}
      </List>
    </>
  );
};
NavItem.propTypes = {
  text: PropTypes.string,
  list: PropTypes.array,
};

export default NavItem;
