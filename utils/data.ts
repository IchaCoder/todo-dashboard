import { TodoItem, User } from '@/utils/types';

// Users data
export const users: User[] = [
  { id: 'user1', name: 'John Doe' },
  { id: 'user2', name: 'Jane Smith' },
  { id: 'user3', name: 'Michael Brown' },
  { id: 'user4', name: 'Sarah Johnson' },
  { id: 'user5', name: 'David Wilson' },
];

// Todo items data
export const todoItems: TodoItem[] = [
  {
    id: 'todo1',
    name: 'MKV Intranet V2',
    startDate: '04/06/2024',
    endDate: '16/06/2024',
    assignees: ['user1', 'user2', 'user3'],
    priority: 'medium',
    status: 'todo',
  },
  {
    id: 'todo2',
    name: 'Design System',
    startDate: '23/06/2024',
    endDate: '24/06/2024',
    assignees: ['user2', 'user4'],
    priority: 'important',
    status: 'todo',
  },
  {
    id: 'todo3',
    name: 'Medical Appointment',
    startDate: '16/06/2024',
    endDate: '18/06/2024',
    assignees: ['user1', 'user5'],
    priority: 'urgent',
    status: 'todo',
  },
  {
    id: 'todo4',
    name: 'UI Component Library',
    startDate: '10/06/2024',
    endDate: '20/06/2024',
    assignees: ['user2', 'user3'],
    priority: 'important',
    status: 'in-progress',
  },
  {
    id: 'todo5',
    name: 'Patient Dashboard',
    startDate: '05/06/2024',
    endDate: '15/06/2024',
    assignees: ['user1', 'user4', 'user5'],
    priority: 'urgent',
    status: 'todo',
  },
  {
    id: 'todo6',
    name: 'User Research',
    startDate: '07/06/2024',
    endDate: '12/06/2024',
    assignees: ['user3'],
    priority: 'medium',
    status: 'complete',
  },
  {
    id: 'todo7',
    name: 'API Integration',
    startDate: '09/06/2024',
    endDate: '19/06/2024',
    assignees: ['user1', 'user2'],
    priority: 'important',
    status: 'in-progress',
  },
  {
    id: 'todo8',
    name: 'Database Migration',
    startDate: '14/06/2024',
    endDate: '17/06/2024',
    assignees: ['user4', 'user5'],
    priority: 'urgent',
    status: 'todo',
  },
  {
    id: 'todo9',
    name: 'Security Audit',
    startDate: '20/06/2024',
    endDate: '25/06/2024',
    assignees: ['user3', 'user4'],
    priority: 'urgent',
    status: 'todo',
  },
  {
    id: 'todo10',
    name: 'Frontend Refactoring',
    startDate: '08/06/2024',
    endDate: '18/06/2024',
    assignees: ['user2'],
    priority: 'medium',
    status: 'in-progress',
  },
  {
    id: 'todo11',
    name: 'Documentation Update',
    startDate: '05/06/2024',
    endDate: '10/06/2024',
    assignees: ['user1'],
    priority: 'medium',
    status: 'complete',
  },
  {
    id: 'todo12',
    name: 'Performance Testing',
    startDate: '15/06/2024',
    endDate: '22/06/2024',
    assignees: ['user3', 'user5'],
    priority: 'important',
    status: 'todo',
  },
  {
    id: 'todo13',
    name: 'Accessibility Review',
    startDate: '11/06/2024',
    endDate: '14/06/2024',
    assignees: ['user2', 'user4'],
    priority: 'important',
    status: 'todo',
  },
  {
    id: 'todo14',
    name: 'Content Migration',
    startDate: '18/06/2024',
    endDate: '23/06/2024',
    assignees: ['user1', 'user5'],
    priority: 'medium',
    status: 'todo',
  },
  {
    id: 'todo15',
    name: 'User Testing',
    startDate: '13/06/2024',
    endDate: '20/06/2024',
    assignees: ['user3'],
    priority: 'important',
    status: 'in-progress',
  },
  {
    id: 'todo16',
    name: 'Sprint Planning',
    startDate: '06/06/2024',
    endDate: '07/06/2024',
    assignees: ['user1', 'user2', 'user3', 'user4'],
    priority: 'urgent',
    status: 'complete',
  },
  {
    id: 'todo17',
    name: 'Deployment Pipeline',
    startDate: '12/06/2024',
    endDate: '17/06/2024',
    assignees: ['user5'],
    priority: 'urgent',
    status: 'in-progress',
  },
  {
    id: 'todo18',
    name: 'Code Review',
    startDate: '08/06/2024',
    endDate: '10/06/2024',
    assignees: ['user2', 'user3'],
    priority: 'medium',
    status: 'todo',
  },
  {
    id: 'todo19',
    name: 'Analytics Integration',
    startDate: '21/06/2024',
    endDate: '26/06/2024',
    assignees: ['user1', 'user4'],
    priority: 'important',
    status: 'todo',
  },
  {
    id: 'todo20',
    name: 'Client Meeting',
    startDate: '19/06/2024',
    endDate: '19/06/2024',
    assignees: ['user1', 'user2', 'user5'],
    priority: 'urgent',
    status: 'todo',
  },
];

// Helper function to get todos by status
export const getTodosByStatus = (status: 'todo' | 'in-progress' | 'complete') => {
  return todoItems.filter((item) => item.status === status);
};

// Helper function to get all todos
export const getAllTodos = () => {
  return todoItems;
};

// Helper function to get users by ids
export const getUsersByIds = (ids: string[]) => {
  return users.filter((user) => ids.includes(user.id));
};
