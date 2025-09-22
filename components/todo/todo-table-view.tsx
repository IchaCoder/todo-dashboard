'use client';

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Pagination,
  Portal,
  Select,
  Table,
  Text,
  createListCollection,
} from '@chakra-ui/react';
import { TodoItemProps } from './todo-item-card';
import TableAvatar from '@/components/table-avatar-group';
import { priority } from '@/app/department/todo/page';
import { SlOptions } from 'react-icons/sl';
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { useState } from 'react';

interface TodoTableViewProps {
  items: TodoItemProps[];
  totalItems: number;
}

const options = createListCollection({ items: ['10', '20', '50', '100'] });

export default function TodoTableView({ items, totalItems }: TodoTableViewProps) {
  const [value, setValue] = useState<string[]>(['10']);

  return (
    <Box borderRadius={'10px'} display={'flex'} flexDirection={'column'} gap={6} pb={4}>
      <Table.Root size='lg' borderRadius={'10px'} colorPalette={'white'} variant={'outline'}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>
              <Text fontSize={'14px'} fontWeight={'bold'}>
                Name
              </Text>
            </Table.ColumnHeader>
            <Table.ColumnHeader>
              <Text fontSize={'14px'} fontWeight={'bold'}>
                Date
              </Text>
            </Table.ColumnHeader>
            <Table.ColumnHeader>
              <Text fontSize={'14px'} fontWeight={'bold'}>
                Assignee
              </Text>
            </Table.ColumnHeader>
            <Table.ColumnHeader>
              <Text fontSize={'14px'} fontWeight={'bold'}>
                Priority
              </Text>
            </Table.ColumnHeader>
            <Table.ColumnHeader></Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.length === 0 ? (
            <Table.Row>
              <Table.Cell colSpan={5}>
                <Text textAlign='center' py={4}>
                  No tasks available
                </Text>
              </Table.Cell>
            </Table.Row>
          ) : (
            items.map((item) => (
              <Table.Row key={item.id}>
                <Table.Cell>
                  <Text fontSize={'14px'} fontWeight={'semibold'}>
                    {item.name}
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  <Text fontSize={'14px'} fontWeight={'medium'}>
                    {item.startDate} - {item.endDate}
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  <TableAvatar assignees={item.assignees} />
                </Table.Cell>
                <Table.Cell>
                  <Flex alignItems={'center'} gap={4} fontSize={'14px'} color={'#464B50'}>
                    {priority[item.priority].icon} {priority[item.priority].name}
                  </Flex>
                </Table.Cell>
                <Table.Cell>
                  <Button bg={'#F7F7F7'}>
                    <SlOptions color='#6C7278' />
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))
          )}
        </Table.Body>
      </Table.Root>
      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <Pagination.Root
          count={totalItems}
          pageSize={parseInt(value[0] || '10')}
          page={1}
          padding={2}
          borderRadius={'20px'}
          bg={'#F7F7F7'}
        >
          <ButtonGroup variant='ghost' size='sm' wrap='wrap'>
            <Pagination.PrevTrigger asChild>
              <IconButton aria-label='First page'>
                <FaAnglesLeft />
              </IconButton>
            </Pagination.PrevTrigger>
            <Pagination.PrevTrigger asChild>
              <IconButton aria-label='Previous page'>
                <LuChevronLeft />
              </IconButton>
            </Pagination.PrevTrigger>

            <Pagination.Items
              render={(page) => (
                <IconButton
                  aria-label={`Page ${page.value}`}
                  rounded={'full'}
                  colorPalette={'green'}
                  variant={{ base: 'outline', _selected: 'solid' }}
                >
                  {page.value}
                </IconButton>
              )}
            />

            <Pagination.NextTrigger asChild>
              <IconButton aria-label='Next page'>
                <LuChevronRight />
              </IconButton>
            </Pagination.NextTrigger>
            <Pagination.NextTrigger asChild>
              <IconButton aria-label='Last page'>
                <FaAnglesRight />
              </IconButton>
            </Pagination.NextTrigger>
          </ButtonGroup>
        </Pagination.Root>
        <HStack>
          <Text fontSize={'16px'} fontWeight={'bold'} color={'#1A1C1E'}>
            Rows Per page:{' '}
          </Text>
          <Select.Root
            rounded={'full'}
            border={'1px solid #75C5C1'}
            bg={'#F7F7F7'}
            collection={options}
            w='100px'
            value={value}
            onValueChange={(e) => setValue(e.value)}
          >
            <Select.HiddenSelect />
            <Select.Control>
              <Select.Trigger border={'1px solid #75C5C1'} rounded={'full'}>
                <Select.ValueText placeholder='Select...' />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {options.items.map((option) => (
                    <Select.Item item={option} key={option}>
                      {option}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        </HStack>
      </HStack>
    </Box>
  );
}
