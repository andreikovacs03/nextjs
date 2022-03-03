import { Box, Slider, TextField, Typography } from '@mui/material';
import { useState } from 'react';

type Props = {
  title: string;
  initialValue: number;
  min?: number;
  max?: number;
  step?: number;
};

export const PanelField = ({
  title,
  initialValue,
  min = 0,
  max = 100,
  step = 1,
}: Props) => {
  const [value, setValue] = useState<number>(initialValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as number);
  };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Box display="flex" alignItems="center">
      <Typography
        color="white"
        display="flex"
        sx={{ flex: '1.2 1', placeItems: 'center' }}
        component="label"
      >
        {title}
      </Typography>
      <TextField
        value={value}
        type="number"
        inputProps={{ inputMode: 'numeric', shrink: true }}
        onChange={handleInputChange}
        sx={{ flex: '2 1', m: '0 1.1rem', maxWidth: '5rem' }}
      ></TextField>
      <Slider
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSliderChange}
        sx={{ width: '100%', maxWidth: '4.5rem', flex: '2 1' }}
      />
    </Box>
  );
};
