import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function Root() {

  return (
    <Box>
      <Header />
      <Outlet />
      <ReactQueryDevtools />
    </Box>
  )
}

export default Root