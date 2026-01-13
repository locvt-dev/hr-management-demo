import Sidebar from '@/components/Sidebar';
import { Flex, Text, VStack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

interface IMainLayoutProps {
  title?: string;
}

export const MainLayout = ({ title = '' }: IMainLayoutProps) => (
  <Flex w="100dvw" h="100dvh" bgColor="gray.50" alignItems="stretch">
    <Sidebar />

    <VStack px={10} py={5}>
      <Text fontSize="3xl" fontWeight="bold" textTransform="uppercase">
        {title}
      </Text>
      <Outlet />
    </VStack>
  </Flex>
);
