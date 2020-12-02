import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import NotificationsIcon from '@material-ui/icons/Notifications';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SmsFailedIcon from '@material-ui/icons/SmsFailed';
import ContactlessIcon from '@material-ui/icons/Contactless';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SettingsIcon from '@material-ui/icons/Settings';
import listLogo from '../img/list';
import forestLogo from '../img/people';

export const manageList = [
  ['用户管理', <PeopleAltIcon />],
  ['内容管理', listLogo],
  ['通知管理', <NotificationsIcon />],
];
export const functionList = [
  ['小树林', forestLogo],
  ['热门树洞', <WhatshotIcon />],
  ['推广', <ContactlessIcon />],
  ['用户反馈', <SmsFailedIcon />],
  ['更新日志', <LibraryBooksIcon />],
];
export const systemList = [
  ['操作记录', <AssignmentIcon />],
  ['系统设置', <SettingsIcon />],
];
