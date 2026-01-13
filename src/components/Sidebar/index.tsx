import { Button, Flex, Img, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// Components
import Menu from './Menu';
import { ExitIcon } from '../icons';

// Image
import Logo from '@/images/logo.webp';

const Sidebar = () => {
  return (
    <VStack
      borderRight="2px solid"
      borderColor="gray.400"
      w="17%"
      px={6}
      py={5}
    >
      <Flex as={Link} to="/" alignItems="center" justifyContent="center" mb={2}>
        <Img src={Logo} alt="logo" w={20} h={20} />
        <Text fontSize="xl" fontWeight="bold">
          HR Management
        </Text>
      </Flex>
      <VStack justifyContent="space-between" h="100%">
        <Menu />

        <Button gap={4} bgColor="transparent" _hover={{ bgColor: 'blue.200' }}>
          <ExitIcon />
          <Text fontSize="md">Logout</Text>
        </Button>
      </VStack>
    </VStack>
  );
};

export default Sidebar;
