/* eslint-disable @typescript-eslint/no-explicit-any */
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

const InputText = ({
  label,
  control,
  name,
  defaultValue,
  type,
  error,
}: any) => {
  if (control) {
    return (
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            variant="standard"
            type={type}
            error={!!error}
            helperText={error}
          />
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
