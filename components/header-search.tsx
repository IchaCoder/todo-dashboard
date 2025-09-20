'use client';

import { Button, Input, InputGroup } from '@chakra-ui/react';
import { CloseCircle, SearchNormal1 } from 'iconsax-reactjs';
import { useRef, useState } from 'react';

export const HeaderSearch = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const endElement = (
    <Button
      size='xs'
      onClick={() => {
        setValue('');
        inputRef.current?.focus();
      }}
      me='-2'
      aria-label='Clear'
      bg={'transparent'}
    >
      <CloseCircle size='18' color='#464B50' />
    </Button>
  );

  return (
    <InputGroup startElement={<SearchNormal1 size='20' color='#6C7278' />} bgColor={'#F7F7F7'} endElement={endElement}>
      <Input
        ref={inputRef}
        placeholder='Search...'
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
        color={'#1A1C1E'}
        borderRadius={'10px'}
        fontSize={'14px'}
        borderColor={'#CDD6E9'}
      />
    </InputGroup>
  );
};
