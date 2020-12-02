import React from 'react';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './navStyles';

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
          <Button className={classes.listButton} key={index}>
            <Box className={classes.listIcon}>
              {text[1]}
            </Box>
            <Typography className={classes.listText} align='left'>
              {text[0]}
            </Typography>
          </Button>
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
