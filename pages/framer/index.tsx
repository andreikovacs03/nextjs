import { Box, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import { useState } from 'react';

import { Panel } from '../../components/Framer/Example/Panel';
import { PanelField } from '../../components/Framer/Example/PanelField';
import Refresh from '../../components/Framer/Refresh';

const Example: NextPage = () => {
  const [count, setCount] = useState(0);

  return (
    <Box
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      <Box
        height="100%"
        flexGrow={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        sx={{ background: 'linear-gradient(135deg,#e09,#d0e)' }}
      >
        <Refresh onClick={() => setCount(count + 1)} />
        <Box
          sx={{
            background: 'white',
            borderRadius: '30px',
            width: 150,
            height: 150,
          }}
        >
          <motion.div animate={{ scale: 2 }} />
        </Box>
      </Box>

      <Panel>
        <Stack gap="1.1rem">
          <PanelField title="X" initialValue={0} />
          <PanelField title="Y" initialValue={0} />
          <PanelField title="Scale" initialValue={0} />
          <PanelField title="Rotation" initialValue={0} />
        </Stack>
      </Panel>
    </Box>
  );
};

export default Example;
