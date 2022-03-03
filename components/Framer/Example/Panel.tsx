import { Box } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export const Panel = ({ children }: Props) => {
  return (
    <Box
      minWidth="320px"
      height="100%"
      alignSelf="end"
      p="1.8rem"
      sx={{ background: 'hsl(0, 0%, 8%)' }}
    >
      {children}
    </Box>
  );
};
