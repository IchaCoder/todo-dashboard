import { Avatar, AvatarGroup, Text } from '@chakra-ui/react';

const assigneeImages = ['/images/ass1.png', '/images/ass2.png'];

const TableAvatar = () => {
  return (
    <AvatarGroup gap='0' spaceX='-3' size='xs'>
      {assigneeImages.length > 0 ? (
        assigneeImages.map((src, index) => (
          <Avatar.Root key={index}>
            <Avatar.Fallback name={`Assignee ${index + 1}`} />
            <Avatar.Image src={src} />
          </Avatar.Root>
        ))
      ) : (
        <Text fontSize={'14px'} color={'#6C7278'}>
          No Assignee
        </Text>
      )}
      {assigneeImages.length > 2 && (
        <Avatar.Root variant='solid'>
          <Avatar.Fallback>+{assigneeImages.length - 2}</Avatar.Fallback>
        </Avatar.Root>
      )}
    </AvatarGroup>
  );
};

export default TableAvatar;
