'use client';

import { Box, Heading, Button, Container, HStack, Input, Table } from '@chakra-ui/react';
import { AddCircle } from 'iconsax-reactjs';

const items = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99 },
  { id: 2, name: 'Coffee Maker', category: 'Home Appliances', price: 49.99 },
  { id: 3, name: 'Desk Chair', category: 'Furniture', price: 150.0 },
  { id: 4, name: 'Smartphone', category: 'Electronics', price: 799.99 },
  { id: 5, name: 'Headphones', category: 'Accessories', price: 199.99 },
];

export default function TodoPage() {
  return (
    <Box p={8} ml='280px'>
      <Container maxW='container.xl'>
        <Box bg={'gray.50'} p={4} borderRadius='lg' mb={6}>
          <HStack justify='space-between' align='center'>
            <Heading size='lg'>Todo List</Heading>
            <Button>
              <AddCircle size='32' color='#d9e3f0' />
              Add Task
            </Button>
          </HStack>
        </Box>

        <HStack gap={4} mb={6}>
          <Input placeholder='Search tasks...' />
          {/* <Menu>
            <MenuButton as={Button}>
              Filter
            </MenuButton>
            <MenuList>
              <MenuItem>All Tasks</MenuItem>
              <MenuItem>To Do</MenuItem>
              <MenuItem>In Progress</MenuItem>
              <MenuItem>Complete</MenuItem>
            </MenuList>
          </Menu> */}
        </HStack>

        <Box bg={'white'} borderRadius='lg' boxShadow='sm' overflow='hidden'>
          <Table.Root size='sm' striped>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Product</Table.ColumnHeader>
                <Table.ColumnHeader>Category</Table.ColumnHeader>
                <Table.ColumnHeader textAlign='end'>Price</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {items.map((item) => (
                <Table.Row key={item.id}>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>{item.category}</Table.Cell>
                  <Table.Cell textAlign='end'>{item.price}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
      </Container>
    </Box>
  );
}
