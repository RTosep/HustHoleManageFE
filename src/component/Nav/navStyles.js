import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 255;
const useStyles = makeStyles((theme) => ({
  // 头部横栏样式设置
  root: {
    display: 'flex',
    fontFamily: 'Source Han Sans',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  // “管理员”区域位置以及高度设置
  drawerPaper: {
    width: drawerWidth,
    top: 52,
    height: 'calc(100% - 64px)',
  },
  // “管理员”图标样式设置
  managerIcon: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor: 'grey',
  },
  // “管理员”文本样式设置
  typographyText: {
    fontSize: '20px',
    color: 'rgba(0, 0, 0, 0.87)',
    lineHeight: '30px',
    letterSpacing: '0.15px',
    marginTop: '15px',
    marginBottom: '9px',
  },
  // necessary for content to be below app bar
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  // “首页”的按钮样式设置
  firstPageButton: {
    position: 'relative',
  },
  onFPButton: {
    height: 40,
    width: 239,
    margin: '12px 9px 12px 8px',
    backgroundColor: 'rgba(75, 159, 121, 0.12)',
    fontSize: '15px',
    color: '#4B9F79',
    borderRadius: '4px',
    position: 'relative',
  },
  // “首页”按钮图标的样式设置
  dashBoardIcon: {
    position: 'absolute',
    top: 11,
    left: 11,
    width: '18px',
    height: '18px',
    color: '#7e7e7e',
  },
  // “首页”的文本样式设置
  firstPageTypeText: {
    position: 'absolute',
    fontFamily: 'Source Han Sans',
    fontSize: '14px',
    lineHeight: '21px',
    letterSpacing: '0.1px',
    left: 64,
    top: 11,
  },
  // "管理"二字文本样式设置
  tyText: {
    fontFamily: 'Source Han Sans',
    fontSize: '14px',
    color: '#9E9E9E',
    fontWeight: 400,
    lineHeight: '21px',
    letterSpacing: '0.25px',
    margin: '12px 0 0 16px',
  },
  // 导航栏的文字样式设置
  listText: {
    position: 'absolute',
    height: 18,
    fontFamily: 'Source Han Sans',
    fontSize: '14px',
    lineHeight: '21px',
    letterSpacing: '0.1px',
    top: 11,
    left: 64,
  },
  // 导航栏的图表样式设置
  listIcon: {
    position: 'absolute',
    left: 11,
    top: 9,
    color: '#7e7e7e',
  },
  // 导航栏的按钮样式设置
  listButton: {
    position: 'relative',
    margin: '5px 9px 5px 8px',
  },
}));
export default useStyles;
