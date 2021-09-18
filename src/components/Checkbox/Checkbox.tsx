/* eslint-disable @typescript-eslint/no-explicit-any */
import CheckboxMUI from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Controller } from 'react-hook-form';
import { ICheckbox } from './checkbox.model';

const Checkbox = ({ label, control, name, defaultChecked }: ICheckbox) => {
  if (control) {
    return (
      <FormControlLabel
        control={
          <Controller
            render={({ field }) => (
              <CheckboxMUI {...field} defaultChecked={defaultChecked} />
            )}
            defaultValue={defaultChecked}
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
