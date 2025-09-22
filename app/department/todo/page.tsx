'use client';

import Header from '@/components/header';
import TableAvatar from '@/components/table-avatar-group';
import TodoHeader from '@/components/todo/TodoHeader';
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  createListCollection,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  Pagination,
  Portal,
  Select,
  Table,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Flag, RowHorizontal, RowVertical, SearchNormal1, Status, TaskSquare, TickCircle } from 'iconsax-reactjs';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { SlOptions } from 'react-icons/sl';
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';
import { useState } from 'react';

export const priority = {
  medium: { name: 'Medium', icon: <Flag size='18' color='#75c5c1' variant='Bold' /> },
  important: { name: 'Important', icon: <Flag size='18' color='#f6be38' variant='Bold' /> },
  urgent: { name: 'Urgent', icon: <Flag size='18' color='#FF515D' variant='Bold' /> },
};

const options = createListCollection({ items: ['10', '20', '50', '100'] });

export default function TodoPage() {
  const [value, setValue] = useState<string[]>(['10']);
  console.log(value);

  return (
    <Box minH={'100vh'} bg={'#f7f7f7'}>
      <Header />
      <Container maxW='90%' mx={'auto'} mt={8} bgColor={'white'} borderRadius='10px' px={0}>
        <TodoHeader />
        <VStack mx={6} my={4} gap={2} alignItems={'stretch'}>
          <HStack bg={'#E9F5F7'} p={2} borderRadius={'6px'} justifyContent={'space-between'}>
            <InputGroup startElement={<SearchNormal1 size='20' color='#6C7278' />} width={'300px'}>
              <Input
                placeholder='Search for To-Do'
                _placeholder={{ color: '#6C7278' }}
                bg={'white'}
                borderRadius={'6px'}
                border={'none'}
              />
            </InputGroup>
            <HStack gap={2} bg={'white'} p={'.25rem'} borderRadius={'6px'}>
              <Button bg={'#F7F7F7'} size={'xs'}>
                <RowHorizontal size='32' color='#7988A9' />
              </Button>
              <Button bg={'#75C5C1'} size={'xs'}>
                <RowVertical size='32' color='#ffffff' />
              </Button>
            </HStack>
          </HStack>
          <HStack bg={'#F7F7F7'} p={2} borderRadius={'6px'}>
            <Button
              bg={'#ffffff'}
              // bg={'#CFB7E8'}
              size={'md'}
              borderRadius={'6px'}
              fontWeight={'500'}
              gap={8}
              alignItems={'center'}
              justifyContent={'center'}
              color={'#000000'}
            >
              <Box display={'flex'} alignItems={'center'} gap={2}>
                <TaskSquare size='32' color='#cfb7e8' variant='Bold' />
                {/* <TaskSquare size='32' color='#ffffff' variant='Bold' /> */}
                To Do
              </Box>
              <Box bg={'#F9F3FF'} p={'.4rem'} borderRadius={'6px'}>
                (20)
              </Box>
            </Button>
            <Button
              bg={'#ffffff'}
              // bg={'#F6BE38'}
              size={'md'}
              borderRadius={'6px'}
              fontWeight={'500'}
              gap={8}
              alignItems={'center'}
              justifyContent={'center'}
              color={'#000000'}
            >
              <Box display={'flex'} alignItems={'center'} gap={2}>
                <Status size='32' color='#f6be38' variant='Bold' />
                {/* <Status size='32' color='#ffffff' variant='Bold' />{' '} */}
                In Progress
              </Box>
              <Box bg={'#FBF4E4'} p={'.4rem'} borderRadius={'6px'}>
                (23)
              </Box>
            </Button>
            <Button
              bg={'#ffffff'}
              // bg={'#75C5C1'}
              size={'md'}
              borderRadius={'6px'}
              fontWeight={'500'}
              gap={8}
              alignItems={'center'}
              justifyContent={'center'}
              color={'#000000'}
            >
              <Box display={'flex'} alignItems={'center'} gap={2}>
                <TickCircle size='32' color='#75c5c1' variant='Bold' />
                {/* <TickCircle size='32' color='#ffffff' variant='Bold' /> */}
                Complete
              </Box>
              <Box bg={'#E9F5F7'} p={'.4rem'} borderRadius={'6px'}>
                (18)
              </Box>
            </Button>
          </HStack>
          <Box borderRadius={'10px'} display={'flex'} flexDirection={'column'} gap={6} pb={4}>
            <Table.Root size='lg' colorPalette={'white'} variant={'outline'}>
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
                <Table.Row>
                  <Table.Cell>
                    <Text fontSize={'14px'} fontWeight={'semibold'}>
                      MKV Intranet V2
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text fontSize={'14px'} fontWeight={'medium'}>
                      {'04/06/2024 - 16/06/2024'}
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <TableAvatar />
                  </Table.Cell>
                  <Table.Cell>
                    <Flex alignItems={'center'} gap={4} fontSize={'14px'} color={'#464B50'}>
                      {priority.important.icon} {priority.important.name}
                    </Flex>
                  </Table.Cell>
                  <Table.Cell>
                    <Button bg={'#F7F7F7'}>
                      <SlOptions color='#6C7278' />
                    </Button>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Text fontSize={'14px'} fontWeight={'semibold'}>
                      MKV Intranet V2
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text fontSize={'14px'} fontWeight={'medium'}>
                      {'04/06/2024 - 16/06/2024'}
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <TableAvatar />
                  </Table.Cell>
                  <Table.Cell>
                    <Flex alignItems={'center'} gap={4} fontSize={'14px'} color={'#464B50'}>
                      {priority.important.icon} {priority.important.name}
                    </Flex>
                  </Table.Cell>
                  <Table.Cell>
                    <Button bg={'#F7F7F7'}>
                      <SlOptions color='#6C7278' />
                    </Button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
            <HStack justifyContent={'space-between'} alignItems={'center'}>
              <Pagination.Root count={10 * 5} pageSize={5} page={1} padding={2} borderRadius={'20px'} bg={'#F7F7F7'}>
                <ButtonGroup variant='ghost' size='sm' wrap='wrap'>
                  <Pagination.PrevTrigger asChild>
                    <IconButton>
                      <FaAnglesLeft />{' '}
                    </IconButton>
                  </Pagination.PrevTrigger>
                  <Pagination.PrevTrigger asChild>
                    <IconButton>
                      <LuChevronLeft />
                    </IconButton>
                  </Pagination.PrevTrigger>

                  <Pagination.Items
                    render={(page) => (
                      <IconButton
                        rounded={'full'}
                        colorPalette={'green'}
                        variant={{ base: 'outline', _selected: 'solid' }}
                      >
                        {page.value}
                      </IconButton>
                    )}
                  />

                  <Pagination.NextTrigger asChild>
                    <IconButton>
                      <LuChevronRight />
                    </IconButton>
                  </Pagination.NextTrigger>
                  <Pagination.NextTrigger asChild>
                    <IconButton>
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
        </VStack>
      </Container>
    </Box>
  );
}
