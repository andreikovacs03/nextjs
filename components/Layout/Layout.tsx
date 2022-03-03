import { Box } from '@mui/material';
import { ReactNode } from 'react';

import { Navbar } from './Navbar/Navbar';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <Box>
      <Navbar />

      <main>{children}</main>
    </Box>
  );
};
