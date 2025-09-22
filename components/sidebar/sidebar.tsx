'use client';

import { Box, VStack, Link, Flex, Button } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { RiContractLeftLine } from 'react-icons/ri';
import { MenuItems } from './data';
import React from 'react';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <Box as='nav' bg={'white'} borderRightWidth='1px' py={5} overflow={'auto'}>
      {/* Logo Section */}
      <Flex align='center' mb={8} pl={6} pr={1} justifyContent={'space-between'}>
        <Image src='/logo.png' alt='Logo' width={150} height={80} />
        <Button variant={'ghost'} bgColor={'#F7F7F7'}>
          <RiContractLeftLine color='#000' />
        </Button>
      </Flex>

      {/* Menu Items */}
      <VStack gap={4} align='stretch' px={6}>
        {MenuItems.map((item, index) => {
          const isActive = pathname === item.path;

          return (
            <React.Fragment key={index}>
              <Button
                color={isActive ? '#75C5C1' : '#7988A9'}
                bgColor={isActive ? '#E9F5F7' : 'transparent'}
                _hover={{ bg: '#E9F5F7', color: '#75C5C1' }}
                justifyContent={'flex-start'}
                gap={4}
                borderRadius={'10px'}
                px={4}
                asChild
                fontWeight={'600'}
              >
                <Link href={item.path}>
                  <item.icon size='32' color='#7988A9' />
                  {item.name}
                </Link>
              </Button>
              {item.subItems &&
                item.subItems?.length > 0 &&
                item.subItems.map((subItem, subIndex) => {
                  const isSubPathActive = pathname === subItem.path;

                  return (
                    <VStack key={subIndex} gap={6} align='stretch' ml={6}>
                      <Button
                        color={isSubPathActive ? '#75C5C1' : '#7988A9'}
                        bgColor={isSubPathActive ? '#E9F5F7' : 'transparent'}
                        _hover={{ bg: '#E9F5F7', color: '#75C5C1' }}
                        justifyContent={'flex-start'}
                        gap={4}
                        borderRadius={'10px'}
                        px={6}
                        asChild
                        fontWeight={'500'}
                      >
                        <Link href={subItem.path}>{subItem.name}</Link>
                      </Button>
                    </VStack>
                  );
                })}
            </React.Fragment>
          );
        })}
      </VStack>
    </Box>
  );
}
