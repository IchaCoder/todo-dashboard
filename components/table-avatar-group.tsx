import { users } from '@/utils/data';
import { Avatar, AvatarGroup, Text } from '@chakra-ui/react';

type TableAvatarProps = {
  assignees: string[]; // Array of user IDs
};

const TableAvatar = ({ assignees }: TableAvatarProps) => {
  const assigneesData =
    assignees?.length > 2
      ? users?.slice(0, 2).filter((user) => assignees?.includes(user.id))
      : users?.filter((user) => assignees?.includes(user.id));
  return (
    <AvatarGroup gap='0' spaceX='-3' size='xs'>
      {assigneesData.length > 0 ? (
        assigneesData.map((user, index) => (
          <Avatar.Root key={index}>
            <Avatar.Fallback name={user.name} />
            {/* <Avatar.Image src={user.image} /> */}
          </Avatar.Root>
        ))
      ) : (
        <Text fontSize={'14px'} color={'#6C7278'}>
          No Assignee
        </Text>
      )}
      {assignees?.length > 2 && (
        <Avatar.Root variant='solid'>
          <Avatar.Fallback>+{assignees?.length - 2}</Avatar.Fallback>
        </Avatar.Root>
      )}
    </AvatarGroup>
  );
};

export default TableAvatar;
