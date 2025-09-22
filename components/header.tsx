import { HeaderSearch } from '@/components/header-search';
import { Box, Heading, Button, HStack, Menu, Avatar, Portal } from '@chakra-ui/react';
import { ArrowDown2, Link1, Notification } from 'iconsax-reactjs';
import Image from 'next/image';

const Header = () => {
  return (
    <HStack bg={'white'} height={'90px'} boxShadow='sm' p={4} gap={8} position='sticky' top={0} zIndex={10}>
      <HeaderSearch />
      <HStack>
        <Box
          border={2}
          borderColor={'#EEF1F9'}
          borderStyle={'solid'}
          width={'46px'}
          height={'46px'}
          borderRadius='10px'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <Image src={'/images/img1.png'} className='w-[30px] h-[28px]' alt='icon 1' width={'24'} height={24} />
        </Box>
        <Box
          border={2}
          borderColor={'#EEF1F9'}
          borderStyle={'solid'}
          width={'46px'}
          height={'46px'}
          borderRadius='10px'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <Image src={'/images/img2.png'} className='w-[30px] h-[28px]' alt='icon 2' width={24} height={24} />
        </Box>
        <Box
          border={2}
          borderColor={'#EEF1F9'}
          borderStyle={'solid'}
          width={'46px'}
          height={'46px'}
          borderRadius='10px'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <Image src={'/images/img3.png'} className='w-[30px] h-[28px]' alt='icon 3' width={24} height={24} />
        </Box>
        <Box
          border={2}
          borderColor={'#EEF1F9'}
          borderStyle={'solid'}
          width={'46px'}
          height={'46px'}
          borderRadius='10px'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <Image src={'/images/img4.png'} className='w-[30px] h-[28px]' alt='icon 4' width={24} height={24} />
        </Box>
      </HStack>
      <Box display={'flex'} justifyContent={'space-between'} gap={3} alignItems={'center'}>
        <HStack border={1} borderColor={'#EEF1F9'} borderStyle={'solid'} p={2} borderRadius='10px' gap={2}>
          <Button bgColor={'#41245F'} p={4} color={'white'} borderRadius='10px' fontWeight={'bold'}>
            Melding maken
          </Button>
          <Button bgColor={'#75C5C1'} p={4} color={'white'} borderRadius='10px'>
            VIM
          </Button>
          <Button bgColor={'#75C5C1'} p={4} color={'white'} borderRadius='10px'>
            LMS
          </Button>
          <Button bgColor={'#75C5C1'} p={4} color={'white'} borderRadius='10px'>
            DataLek
          </Button>
        </HStack>
        <Button bgColor={'#EEF1F9'} p={4}>
          <Link1 size='32' color='#464B50' />
        </Button>
      </Box>
      <HStack gap={3}>
        <Button
          bgColor={'#F7F7F7'}
          p={2}
          borderRadius='full'
          width={'46px'}
          height={'46px'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Notification size='18' color='#292D32' />
        </Button>
        <HStack bgColor={'#F7F7F7'} p={2} borderRadius='full' gap={2}>
          <Avatar.Root size={'sm'}>
            <Avatar.Fallback name='Paul' />
            <Avatar.Image src='/images/avatar.png' />
          </Avatar.Root>
          <Box textAlign={'left'}>
            <Heading size='sm' color={'#1A1C1E'} minW={'50px'} fontWeight={600}>
              Hi Paul
            </Heading>
          </Box>
          <Menu.Root positioning={{ placement: 'right-end' }}>
            <Menu.Trigger rounded='full' focusRing='outside'>
              <Button variant='ghost' _hover={{ bg: '#F7F7F7' }} asChild size='xs'>
                <ArrowDown2 size='32' color='#6C7278' />
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value='account'>Account</Menu.Item>
                  <Menu.Item value='settings'>Settings</Menu.Item>
                  <Menu.Item value='logout'>Logout</Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </HStack>
      </HStack>
    </HStack>
  );
};

export default Header;
