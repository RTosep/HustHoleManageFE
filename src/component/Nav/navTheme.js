import { createMuiTheme } from '@material-ui/core/styles';
// 重写导航栏的部分MUI样式
const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        height: 40,
        width: 239,
        margin: '12px 9px 12px 8px',
        fontSize: '15px',
        borderRadius: '4px',
        color: 'rgba(0, 0, 0, 0.87)',
        '&:focus': {
          backgroundColor: 'rgba(75,159,121,0.12)',
        },
      },
    },
  },
});
export default theme;
