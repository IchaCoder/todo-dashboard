'use client';

import { HStack, Text, VStack } from '@chakra-ui/react';
import { Calendar, ProfileCircle } from 'iconsax-reactjs';
import { priority } from '@/app/department/todo/page';
import TableAvatar from '@/components/table-avatar-group';

export interface TodoItemProps {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  assignees: string[];
  priority: 'medium' | 'important' | 'urgent';
  status: 'todo' | 'in-progress' | 'complete';
}

export default function TodoItemCard({ item }: { item: TodoItemProps }) {
  return (
    <VStack borderRadius={'10px'} bg={'white'} p={4} alignItems={'stretch'} gap={2} mx={'.25rem'}>
      <Text fontSize={'14px'} fontWeight={'semibold'}>
        {item.name}
      </Text>
      <HStack gap={4}>
        <Calendar size='20' color='#BAC1CC' />
        <Text fontSize={'14px'} fontWeight={'medium'} color={'#464B50'}>
          {item.startDate} - {item.endDate}
        </Text>
      </HStack>
      <HStack gap={4}>
        <ProfileCircle size='20' color='#BAC1CC' />
        <TableAvatar assignees={item.assignees} />
      </HStack>
      <HStack>
        {priority[item.priority].icon}
        <Text fontSize={'14px'} fontWeight={'medium'} color={'#464B50'}>
          {priority[item.priority].name}
        </Text>
      </HStack>
    </VStack>
  );
}
