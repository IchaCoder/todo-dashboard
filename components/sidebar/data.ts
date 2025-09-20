import {
  Category,
  Edit,
  Folder2,
  MenuBoard,
  MessageEdit,
  Note1,
  NotificationBing,
  People,
  Stickynote,
  TaskSquare,
} from 'iconsax-reactjs';
import { IoMdPaper } from 'react-icons/io';
import { LuPhone } from 'react-icons/lu';

export const MenuItems = [
  { name: 'Home', icon: Category, path: '/' },
  { name: 'MKVanBinnen', icon: Stickynote, path: '/binn' },
  { name: 'Document Management', icon: Folder2, path: '/members' },
  { name: 'Patient Information', icon: People, path: '/info' },
  { name: 'Agenda', icon: Note1, path: '/agenda' },
  {
    name: 'My Department',
    icon: IoMdPaper,
    path: '/department',
    subItems: [
      { name: 'News', path: '/department/news' },
      { name: 'Members', path: '/department/members' },
      { name: 'To-Do', path: '/department/todo' },
      { name: 'Form task', path: '/department/form-task' },
      { name: 'Agenda', path: '/department/agenda' },
      { name: 'Follow up system', path: '/department/follow-up-system' },
      { name: 'Group settings', path: '/department/group-settings' },
    ],
  },
  { name: 'Phone Numbers', icon: LuPhone, path: '/phone' },
  { name: 'My to do Protocols', icon: TaskSquare, path: '/protocols' },
  { name: 'My Notifications', icon: NotificationBing, path: '/notifications' },
  { name: 'Knowledge Base', icon: MenuBoard, path: '/knowledge' },
  { name: 'Super Admin', icon: MessageEdit, path: '/super-admin' },
  {
    name: 'Admin',
    icon: Edit,
    path: '/admin',
    subItems: [
      { name: 'Agenda', path: '/admin/user-management' },
      { name: 'News', path: '/admin/news' },
      { name: 'Polls', path: '/admin/polls' },
      { name: 'Department Rules', path: '/admin/department-rules' },
      { name: 'Follow up system', path: '/admin/follow-up-system' },
    ],
  },
];
