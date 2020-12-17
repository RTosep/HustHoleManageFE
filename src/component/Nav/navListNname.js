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
    path: '/user',
  },
  {
    name: '内容管理',
    icon: listLogo,
    path: '/content',
  },
  {
    name: '通知管理',
    icon: <NotificationsIcon />,
    path: '/notification',
  },
];
export const functionList = [
  {
    name: '小树林',
    icon: forestLogo,
    path: '/forest',
  },
  {
    name: '热门树洞',
    icon: <WhatshotIcon />,
    path: '/heatedhole',
  },
  {
    name: '推广',
    icon: <ContactlessIcon />,
    path: '/promotion',
  },
  {
    name: '用户反馈',
    icon: <SmsFailedIcon />,
    path: '/feedback',
  },
  {
    name: '更新日志',
    icon: <LibraryBooksIcon />,
    path: '/updatedlog',
  },
];
export const systemList = [
  {
    name: '操作记录',
    icon: <AssignmentIcon />,
    path: '/record',
  },
  {
    name: '系统设置',
    icon: <SettingsIcon />,
    path: '/setting',
  },
];
