'use client';

import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <Box h='100vh' display='flex' alignItems='center' justifyContent='center' bg={'gray.50'} px={4}>
      <VStack gap={6} textAlign='center'>
        <Heading size='4xl' bgGradient='linear(to-r, blue.400, purple.500)' bgClip='text'>
          404
        </Heading>
        <Heading size='xl'>Page Not Available</Heading>
        <Text fontSize='lg' color='gray.500'>
          This section is currently under development. Please check back later!
        </Text>
        <Button colorScheme='blue' onClick={() => router.push('/department/todo')} size='lg'>
          Go to Todo Section
        </Button>
      </VStack>
    </Box>
  );
}
