'use client';

import { Box, Button, HStack, chakra } from '@chakra-ui/react';
import { AddCircle, ArrowCircleLeft2, Calendar, ExportCurve, Sort } from 'iconsax-reactjs';
import { Switch } from '@/components/ui/Switch';

export default function TodoHeader() {
  return (
    <>
      <HStack justifyContent={'space-between'} w={'full'} px={6} py={4}>
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
            w={'auto'}
            h={'50px'}
            px={1}
          >
            <Switch id='dark-mode' label='Dark Mode' />
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
      <chakra.span h={'1px'} bg={'#CDD6E9'} display={'block'} />
    </>
  );
}
