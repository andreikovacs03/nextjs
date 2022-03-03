import { Box } from '@mui/material';
import { ReactNode } from 'react';

import { Navbar } from './Navbar/Navbar';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <Box width="100%" height="100%" display="flex" flexDirection="column">
      <Navbar />

      <main style={{ width: '100%', flexGrow: 1 }}>{children}</main>
    </Box>
  );
};
