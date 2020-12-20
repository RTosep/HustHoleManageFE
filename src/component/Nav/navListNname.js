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
    state: 1,
  },
  {
    name: '内容管理',
    icon: listLogo,
    path: '/content',
    state: 2,
  },
  {
    name: '通知管理',
    icon: <NotificationsIcon />,
    path: '/notification',
    state: 3,
  },
];
export const functionList = [
  {
    name: '小树林',
    icon: forestLogo,
    path: '/forest',
    state: 4,
  },
  {
    name: '热门树洞',
    icon: <WhatshotIcon />,
    path: '/heatedhole',
    state: 5,
  },
  {
    name: '推广',
    icon: <ContactlessIcon />,
    path: '/promotion',
    state: 6,
  },
  {
    name: '用户反馈',
    icon: <SmsFailedIcon />,
    path: '/feedback',
    state: 7,
  },
  {
    name: '更新日志',
    icon: <LibraryBooksIcon />,
    path: '/updatedlog',
    state: 8,
  },
];
export const systemList = [
  {
    name: '操作记录',
    icon: <AssignmentIcon />,
    path: '/record',
    state: 9,
  },
  {
    name: '系统设置',
    icon: <SettingsIcon />,
    path: '/setting',
    state: 10,
  },
];
