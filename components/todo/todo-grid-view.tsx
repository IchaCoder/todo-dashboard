'use client';

import { Add, Status, TaskSquare, TickCircle } from 'iconsax-reactjs';
import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';
import TodoItemCard, { TodoItemProps } from './todo-item-card';

interface TodoGridViewProps {
  todoItems: TodoItemProps[];
  inProgressItems: TodoItemProps[];
  completeItems: TodoItemProps[];
}

export default function TodoGridView({ todoItems, inProgressItems, completeItems }: TodoGridViewProps) {
  return (
    <Box display={'grid'} gridTemplateColumns={'1fr 1fr 1fr'} gap={6}>
      {/* Todo Column */}
      <VStack borderRadius={'10px'} bg={'#F7F7F7'} w={'full'} alignItems={'stretch'} pb={2}>
        <HStack bgColor={'#F9F3FF'} p={1} pb={3} justifyContent={'space-between'} borderTopRadius={'10px'}>
          <HStack>
            <Box
              display={'flex'}
              bg={'white'}
              p={'.4rem'}
              alignItems={'center'}
              gap={1}
              fontSize={'14px'}
              fontWeight={'semibold'}
              borderRadius={'6px'}
            >
              <TaskSquare size='24' color='#cfb7e8' variant='Bold' />
              To Do
            </Box>
            <Box bg={'#FFFFFF'} p={'.4rem'} borderRadius={'6px'}>
              ({todoItems.length})
            </Box>
          </HStack>
          <Button bg={'white'} size={'xs'} borderRadius={'6px'}>
            <Add size='32' color='#292D32' />
          </Button>
        </HStack>
        {todoItems.length === 0 ? (
          <Text textAlign='center' py={4}>
            No tasks found
          </Text>
        ) : (
          todoItems.map((item) => <TodoItemCard key={item.id} item={item} />)
        )}

        <Button gap={4} bg={'#ffffff'} mx={'.25rem'} borderRadius={'10px'} justifyContent={'flex-start'}>
          <Add size='20' color='#464B50' />
          <Text fontSize={'14px'} fontWeight={'medium'} color={'#464B50'}>
            Add Task
          </Text>
        </Button>
      </VStack>

      {/* In Progress Column */}
      <VStack borderRadius={'10px'} bg={'#F7F7F7'} w={'full'} alignItems={'stretch'} pb={2}>
        <HStack bgColor={'#FBF4E4'} p={1} pb={3} justifyContent={'space-between'} borderTopRadius={'10px'}>
          <HStack>
            <Box
              display={'flex'}
              bg={'white'}
              p={'.4rem'}
              alignItems={'center'}
              gap={1}
              fontSize={'14px'}
              fontWeight={'semibold'}
              borderRadius={'6px'}
            >
              <Status size='24' color='#f6be38' variant='Bold' />
              In Progress
            </Box>
            <Box bg={'#FFFFFF'} p={'.4rem'} borderRadius={'6px'}>
              ({inProgressItems.length})
            </Box>
          </HStack>
          <Button bg={'white'} size={'xs'} borderRadius={'6px'}>
            <Add size='32' color='#292D32' />
          </Button>
        </HStack>
        {inProgressItems.length === 0 ? (
          <Text textAlign='center' py={4}>
            No tasks found
          </Text>
        ) : (
          inProgressItems.map((item) => <TodoItemCard key={item.id} item={item} />)
        )}

        <Button gap={4} bg={'#ffffff'} mx={'.25rem'} borderRadius={'10px'} justifyContent={'flex-start'}>
          <Add size='20' color='#464B50' />
          <Text fontSize={'14px'} fontWeight={'medium'} color={'#464B50'}>
            Add Task
          </Text>
        </Button>
      </VStack>

      {/* Complete Column */}
      <VStack borderRadius={'10px'} bg={'#F7F7F7'} w={'full'} alignItems={'stretch'} pb={2}>
        <HStack bgColor={'#E9F5F7'} p={1} pb={3} justifyContent={'space-between'} borderTopRadius={'10px'}>
          <HStack>
            <Box
              display={'flex'}
              bg={'white'}
              p={'.4rem'}
              alignItems={'center'}
              gap={1}
              fontSize={'14px'}
              fontWeight={'semibold'}
              borderRadius={'6px'}
            >
              <TickCircle size='24' color='#75c5c1' variant='Bold' />
              Complete
            </Box>
            <Box bg={'#FFFFFF'} p={'.4rem'} borderRadius={'6px'}>
              ({completeItems.length})
            </Box>
          </HStack>
          <Button bg={'white'} size={'xs'} borderRadius={'6px'}>
            <Add size='32' color='#292D32' />
          </Button>
        </HStack>
        {completeItems.length === 0 ? (
          <Text textAlign='center' py={4}>
            No tasks found
          </Text>
        ) : (
          completeItems.map((item) => <TodoItemCard key={item.id} item={item} />)
        )}

        <Button gap={4} bg={'#ffffff'} mx={'.25rem'} borderRadius={'10px'} justifyContent={'flex-start'}>
          <Add size='20' color='#464B50' />
          <Text fontSize={'14px'} fontWeight={'medium'} color={'#464B50'}>
            Add Task
          </Text>
        </Button>
      </VStack>
    </Box>
  );
}
