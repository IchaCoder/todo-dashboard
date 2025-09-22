'use client';

import { Box, Button, HStack } from '@chakra-ui/react';
import { Status, TaskSquare, TickCircle } from 'iconsax-reactjs';

interface TodoTabsProps {
  activeTab: 'todo' | 'in-progress' | 'complete';
  setActiveTab: (tab: 'todo' | 'in-progress' | 'complete') => void;
  todoCount: number;
  inProgressCount: number;
  completeCount: number;
}

export default function TodoTabs({
  activeTab,
  setActiveTab,
  todoCount,
  inProgressCount,
  completeCount,
}: TodoTabsProps) {
  return (
    <HStack bg={'#F7F7F7'} p={2} borderRadius={'6px'}>
      <Button
        bg={activeTab === 'todo' ? '#CFB7E8' : '#ffffff'}
        size={'md'}
        borderRadius={'6px'}
        fontWeight={'500'}
        gap={8}
        alignItems={'center'}
        justifyContent={'center'}
        color={activeTab === 'todo' ? '#ffffff' : '#6C7278'}
        onClick={() => setActiveTab('todo')}
      >
        <Box display={'flex'} alignItems={'center'} gap={2}>
          {activeTab === 'todo' ? (
            <TaskSquare size='32' color='#ffffff' variant='Bold' />
          ) : (
            <TaskSquare size='32' color='#cfb7e8' variant='Bold' />
          )}
          To Do
        </Box>
        <Box bg={'#F9F3FF'} p={'.4rem'} borderRadius={'6px'} color={'#464B50'}>
          ({todoCount})
        </Box>
      </Button>
      <Button
        bg={activeTab === 'in-progress' ? '#F6BE38' : '#ffffff'}
        size={'md'}
        borderRadius={'6px'}
        fontWeight={'500'}
        gap={8}
        alignItems={'center'}
        justifyContent={'center'}
        color={activeTab === 'in-progress' ? '#ffffff' : '#464B50'}
        onClick={() => setActiveTab('in-progress')}
      >
        <Box display={'flex'} alignItems={'center'} gap={2}>
          {activeTab === 'in-progress' ? (
            <Status size='32' color='#ffffff' variant='Bold' />
          ) : (
            <Status size='32' color='#f6be38' variant='Bold' />
          )}
          In Progress
        </Box>
        <Box bg={'#FBF4E4'} p={'.4rem'} color={'#464B50'} borderRadius={'6px'}>
          ({inProgressCount})
        </Box>
      </Button>
      <Button
        bg={activeTab === 'complete' ? '#75C5C1' : '#ffffff'}
        size={'md'}
        borderRadius={'6px'}
        fontWeight={'500'}
        gap={8}
        alignItems={'center'}
        justifyContent={'center'}
        color={activeTab === 'complete' ? '#ffffff' : '#464B50'}
        onClick={() => setActiveTab('complete')}
      >
        <Box display={'flex'} alignItems={'center'} gap={2}>
          {activeTab === 'complete' ? (
            <TickCircle size='32' color='#ffffff' variant='Bold' />
          ) : (
            <TickCircle size='32' color='#75c5c1' variant='Bold' />
          )}
          Complete
        </Box>
        <Box bg={'#E9F5F7'} p={'.4rem'} borderRadius={'6px'} color={'#464B50'}>
          ({completeCount})
        </Box>
      </Button>
    </HStack>
  );
}
