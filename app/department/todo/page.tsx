'use client';

import Header from '@/components/header';
import { Box, Button, Container, HStack, Input, Table, Menu, Avatar, Portal, chakra, Switch } from '@chakra-ui/react';
import {
  AddCircle,
  ArrowCircleLeft2,
  ArrowDown2,
  Calendar,
  ExportCurve,
  Link1,
  Notification,
  Sort,
} from 'iconsax-reactjs';
import Image from 'next/image';

const items = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99 },
  { id: 2, name: 'Coffee Maker', category: 'Home Appliances', price: 49.99 },
  { id: 3, name: 'Desk Chair', category: 'Furniture', price: 150.0 },
  { id: 4, name: 'Smartphone', category: 'Electronics', price: 799.99 },
  { id: 5, name: 'Headphones', category: 'Accessories', price: 199.99 },
];

export default function TodoPage() {
  return (
    <Box ml='280px' bgColor={'#F7F7F7'} minH={'100vh'}>
      <Header />
      <Container maxW='90%' mx={'auto'} mt={8} bgColor={'white'} p={6} borderRadius='10px'>
        <HStack justifyContent={'space-between'} w={'full'}>
          <HStack gap={8}>
            <Box border={1} borderColor={'#CDD6E9'} borderStyle={'solid'} p={2} borderRadius='full'>
              <ArrowCircleLeft2 size='32' color='#464B50' />
            </Box>
            <chakra.span color={'#1A1C1E'} fontWeight={'bold'} fontSize={'30px'}>
              Afdeling Kwaliteit
            </chakra.span>
          </HStack>
          <HStack gap={4}>
            <Box
              bg='#F7F7F7'
              borderRadius='10px'
              border={1}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              borderColor={'#CDD6E9'}
              borderStyle={'solid'}
              p={2}
              w={'50px'}
              h={'50px'}
            >
              <Switch.Root colorPalette={'gray'}>
                <Switch.HiddenInput />
                <Switch.Control color={'#E1E0E1'} />
              </Switch.Root>
            </Box>
            <Button
              bg='#F7F7F7'
              borderRadius='10px'
              border={1}
              borderColor={'#CDD6E9'}
              borderStyle={'solid'}
              p={2}
              w={'50px'}
              h={'50px'}
            >
              <Sort size='32' color='#292D32' />
            </Button>
            <Button
              bg='#F7F7F7'
              borderRadius='10px'
              border={1}
              borderColor={'#CDD6E9'}
              borderStyle={'solid'}
              p={2}
              w={'50px'}
              h={'50px'}
            >
              <Calendar size='32' color='#292D32' />
            </Button>
            <Button
              bg='#41245F'
              borderRadius='10px'
              fontSize={'16px'}
              fontWeight={'medium'}
              color={'white'}
              p={6}
              gap={2}
            >
              <ExportCurve size='32' color='#ffffff' />
              Export xlsx
            </Button>
            <Button
              bg='#75C5C1'
              borderRadius='10px'
              fontSize={'16px'}
              fontWeight={'medium'}
              color={'white'}
              p={6}
              gap={2}
            >
              <AddCircle size='32' color='#ffffff' />
              Add Task
            </Button>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
