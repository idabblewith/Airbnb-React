import { Box, Button, HStack, IconButton, useDisclosure } from '@chakra-ui/react';
import { FaAirbnb, FaMoon, FaSun } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import LoginModal from './LoginModal';

function Root() {

  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  )
}

export default Root