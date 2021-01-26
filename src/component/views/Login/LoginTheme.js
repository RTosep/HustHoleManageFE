import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#9C9C9C',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: 'rgba(103, 192, 152, 0.12)',
        borderRadius: '4px',
        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24)',
        '&:hover': {
          backgroundColor: 'rgba(103, 192, 152, 1)',
          color: 'rgba(255, 255, 255, 1)',
        },
        '&:active': {
          backgroundColor: 'rgba(45, 137, 95, 1)',
        },
      },
    },
  },
});
export default theme;
