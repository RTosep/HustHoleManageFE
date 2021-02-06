import { makeStyles } from '@material-ui/core/styles';

const contentStyles = makeStyles(() => ({
  contentDeleteText: {
    marginLeft: '24px',
    marginTop: '24px',
    fontSize: '20px',
  },
  searchIcon: {
    color: 'rgba(0, 0, 0, 0.54)',
    marginTop: '6px',
    marginLeft: '16px',
  },
  inputButton: {
    width: '94px',
    height: '36px',
    marginLeft: '392px',
    marginTop: '-64px',
    color: '#4B9F79',
  },
  searchCmBtn: {
    width: '94px',
    height: '36px',
    marginLeft: '1002px',
    marginTop: '-64px',
    color: '#4B9F79',
  },
  commentDelBtn: {
    width: '94px',
    height: '36px',
    left: '148px',
    bottom: '24px',
    color: '#4B9F79',
    position: 'absolute',
  },
  commentRecBtn: {
    width: '94px',
    height: '36px',
    left: '24px',
    bottom: '24px',
    color: '#4B9F79',
    position: 'absolute',
  },
}));
export default contentStyles;
