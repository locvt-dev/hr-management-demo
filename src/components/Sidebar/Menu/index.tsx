import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, ListItem, Text, Icon as ChakraIcon } from '@chakra-ui/react';

// Constants
import { SIDEBAR } from '@/constants';

const Menu = () => {
  const location = useLocation();

  return (
    <List w="full">
      {SIDEBAR.map(({ name, destination, icon: Icon }) => {
        const isDefaultFocused =
          location.pathname === '/' && name === 'Dashboard';
        const isFocused = location.pathname.includes(destination);

        return (
          <ListItem key={name} mb={3}>
            <Link to={destination}>
              <Text
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                gap={3}
                p={3}
                fontSize="lg"
                _hover={{
                  borderRadius: '10px',
                  color: 'gray.20',
                  bgColor: 'blue.300',
                }}
                {...((isDefaultFocused || isFocused) && {
                  borderRadius: '10px',
                  color: 'gray.20',
                  bgColor: 'blue.300',
                })}
              >
                <ChakraIcon as={Icon} boxSize={5} />

                {name}
              </Text>
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};

export default memo(Menu);
