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
  ['用户管理', <PeopleAltIcon />, '/app/user'],
  ['内容管理', listLogo, '/app/content'],
  ['通知管理', <NotificationsIcon />, '/app/notification'],
];
export const functionList = [
  ['小树林', forestLogo, '/app/forest'],
  ['热门树洞', <WhatshotIcon />, '/app/heatedhole'],
  ['推广', <ContactlessIcon />, '/app/promotion'],
  ['用户反馈', <SmsFailedIcon />, '/app/feedback'],
  ['更新日志', <LibraryBooksIcon />, '/app/updatedlog'],
];
export const systemList = [
  ['操作记录', <AssignmentIcon />, '/app/record'],
  ['系统设置', <SettingsIcon />, '/app/setting'],
];
