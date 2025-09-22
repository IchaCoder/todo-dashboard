import { ReactNode } from 'react';

export type PriorityType = 'medium' | 'important' | 'urgent';

export interface Priority {
  name: string;
  icon: ReactNode;
}

export interface TodoItem {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  assignees: string[]; // Array of user IDs
  priority: PriorityType;
  status: 'todo' | 'in-progress' | 'complete';
}

export interface User {
  id: string;
  name: string;
  // avatar: string;
}
