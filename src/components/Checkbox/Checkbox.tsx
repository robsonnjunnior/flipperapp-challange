/* eslint-disable @typescript-eslint/no-explicit-any */
import CheckboxMUI from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Controller } from 'react-hook-form';

const Checkbox = ({ label, control, name, defaultChecked }: any) => {
  return (
    <FormControlLabel
      control={
        <Controller
          render={({ field }) => (
            <CheckboxMUI {...field} defaultChecked={defaultChecked} />
          )}
          name={name}
          control={control}
        />
      }
      label={label}
    />
  );
};

export default Checkbox;
