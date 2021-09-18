/* eslint-disable @typescript-eslint/no-explicit-any */
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

const InputText = ({ label, control, name, defaultValue, type }: any) => {
  if (control) {
    return (
      <Controller
        render={({ field }) => (
          <TextField {...field} label={label} variant="standard" type={type} />
        )}
        name={name}
        control={control}
        defaultValue={defaultValue}
      />
    );
  } else {
    return (
      <TextField name={name} label={label} variant="standard" type={type} />
    );
  }
};

export default InputText;
