import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './navStyles';
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
        {props.list.map((text, index) => (
          <Link
          to={`${text[2]}`}
          key={index + text}
          >
            <Button
            className={classes.listButton}
            disableRipple
            >
              <Box className={classes.listIcon}>
                {text[1]}
              </Box>
              <Typography className={classes.listText} align='left'>
                {text[0]}
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
