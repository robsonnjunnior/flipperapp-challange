/* eslint-disable @typescript-eslint/no-explicit-any */
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

const InputText = ({ label, control, name, defaultValue }: any) => {
  return (
    <Controller
      render={({ field }) => (
        <TextField {...field} label={label} variant="standard" />
      )}
      name={name}
      control={control}
      defaultValue={defaultValue}
    />
  );
};

export default InputText;
