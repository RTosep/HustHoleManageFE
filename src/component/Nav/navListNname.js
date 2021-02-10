import WhatshotIcon from '@material-ui/icons/Whatshot';
import SmsFailedIcon from '@material-ui/icons/SmsFailed';
import ContactlessIcon from '@material-ui/icons/Contactless';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SettingsIcon from '@material-ui/icons/Settings';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import NotificationsIcon from '@material-ui/icons/Notifications';
import listLogo from '../img/list';
import forestLogo from '../img/people';

// 导航栏各模块名称以及图标
export const manageList = [
  {
    name: '用户管理',
    icon: <PeopleAltIcon />,
    path: '/app/user',
  },
  {
    name: '内容管理',
    icon: listLogo,
    path: '/app/content',
  },
  {
    name: '通知管理',
    icon: <NotificationsIcon />,
    path: '/app/notification',
  },
  {
    name: '用户反馈',
    icon: <SmsFailedIcon />,
    path: '/app/feedback',
  },
];
export const functionList = [
  {
    name: '热门推荐',
    icon: <WhatshotIcon />,
    path: '/app/heatedhole',
  },
  {
    name: '小树林',
    icon: forestLogo,
    path: '/app/forest',
  },
  {
    name: '广告',
    icon: <ContactlessIcon />,
    path: '/app/promotion',
  },
];
export const systemList = [
  {
    name: '操作日志',
    icon: <AssignmentIcon />,
    path: '/app/record',
  },
  {
    name: '管理人员',
    icon: <LibraryBooksIcon />,
    path: '/app/manager',
  },
  {
    name: '系统设置',
    icon: <SettingsIcon />,
    path: '/app/setting',
  },
];
