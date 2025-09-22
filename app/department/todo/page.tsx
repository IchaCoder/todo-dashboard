'use client';

import Header from '@/components/header';
import TodoHeader from '@/components/todo/TodoHeader';
import { Box, Container, VStack } from '@chakra-ui/react';
import { Flag } from 'iconsax-reactjs';
import { useState } from 'react';
import { todoItems } from '@/utils/data';
import TodoSearchBar from '@/components/todo/todo-search-bar';
import TodoTabs from '@/components/todo/todo-tabs';
import TodoTableView from '@/components/todo/todo-table-view';
import TodoGridView from '@/components/todo/todo-grid-view';
import { TodoItemProps } from '@/components/todo/todo-item-card';

export const priority = {
  medium: {
    name: 'Medium',
    icon: <Flag size='18' color='#75c5c1' variant='Bold' />,
  },
  important: {
    name: 'Important',
    icon: <Flag size='18' color='#f6be38' variant='Bold' />,
  },
  urgent: {
    name: 'Urgent',
    icon: <Flag size='18' color='#FF515D' variant='Bold' />,
  },
};

export default function TodoPage() {
  const [view, setView] = useState<'grid' | 'list'>('list');
  const [activeTab, setActiveTab] = useState<'todo' | 'in-progress' | 'complete'>('todo');

  // Filter items based on active tab
  const filteredItems = todoItems.filter((item) => item.status === activeTab) as TodoItemProps[];

  // Get counts for each status
  const todoCount = todoItems.filter((item) => item.status === 'todo').length;
  const inProgressCount = todoItems.filter((item) => item.status === 'in-progress').length;
  const completeCount = todoItems.filter((item) => item.status === 'complete').length;

  return (
    <Box minH={'100vh'} bg={'#f7f7f7'}>
      <Header />
      <Container maxW='90%' mx={'auto'} mt={8} bgColor={'white'} borderRadius='10px' px={0}>
        <TodoHeader />
        <VStack mx={6} my={4} gap={2} alignItems={'stretch'}>
          {/* Search Bar with View Toggle */}
          <TodoSearchBar view={view} setView={setView} />

          {/* Status Tabs */}
          <TodoTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            todoCount={todoCount}
            inProgressCount={inProgressCount}
            completeCount={completeCount}
          />

          {/* List or Grid View */}
          {view === 'list' ? (
            <TodoTableView items={filteredItems} totalItems={todoItems.length} />
          ) : (
            <TodoGridView
              todoItems={todoItems.filter((item) => item.status === 'todo') as TodoItemProps[]}
              inProgressItems={todoItems.filter((item) => item.status === 'in-progress') as TodoItemProps[]}
              completeItems={todoItems.filter((item) => item.status === 'complete') as TodoItemProps[]}
            />
          )}
        </VStack>
      </Container>
    </Box>
  );
}
