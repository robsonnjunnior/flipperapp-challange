/* eslint-disable @typescript-eslint/no-explicit-any */
import CheckboxMUI from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Controller } from 'react-hook-form';

const Checkbox = ({ label, control, name, defaultChecked }: any) => {
  if (control) {
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
  } else {
    return (
      <FormControlLabel
        control={<CheckboxMUI name={name} defaultChecked={defaultChecked} />}
        label={label}
      />
    );
  }
};

export default Checkbox;
