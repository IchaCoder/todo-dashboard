'use client';

import { Button, HStack, Input, InputGroup } from '@chakra-ui/react';
import { RowHorizontal, RowVertical, SearchNormal1 } from 'iconsax-reactjs';

interface TodoSearchBarProps {
  view: 'grid' | 'list';
  setView: (view: 'grid' | 'list') => void;
}

export default function TodoSearchBar({ view, setView }: TodoSearchBarProps) {
  return (
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
        <Button bg={view === 'list' ? '#F7F7F7' : '#75C5C1'} size={'xs'} onClick={() => setView('grid')}>
          <RowHorizontal size='32' color={view === 'list' ? '#7988A9' : '#ffffff'} />
        </Button>
        <Button bg={view === 'list' ? '#75C5C1' : '#F7F7F7'} size={'xs'} onClick={() => setView('list')}>
          <RowVertical size='32' color={view === 'list' ? '#ffffff' : '#7988A9'} />
        </Button>
      </HStack>
    </HStack>
  );
}
