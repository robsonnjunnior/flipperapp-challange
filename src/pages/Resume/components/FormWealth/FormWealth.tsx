/* eslint-disable @typescript-eslint/no-explicit-any */
import Stack from '@mui/material/Stack';
import ButtonUI from '@mui/material/Button';

import { InputText, Checkbox, Modal } from 'components';

import { Form, FormContainer } from './styles';

import { useForm } from 'react-hook-form';

import { IFormWealth } from './formWealth.model';
import { IWealthSummary } from 'models/wealthSummary/wealSummary.model';

import useCreateWealthSummary from 'hooks/wealthSummary/useCreateWealthSummary';
import useUpdateWealthSummary from 'hooks/wealthSummary/useUpdateWealthSummary';

const FormWealth = ({
  open,
  onClose,
  onCancel,
  editData,
  mode,
}: IFormWealth) => {
  const { handleSubmit, control } = useForm();
  const { AddWealthOne } = useCreateWealthSummary();
  const { EditWealthOne } = useUpdateWealthSummary();
  console.log('form mode', mode);

  const onSubmit = (data: Omit<IWealthSummary, 'id' | 'hasHistory'>) => {
    console.log('onSubmit data', data);
    if (mode === 'NEW') {
      AddWealthOne({
        variables: {
          object: {
            ...data,
          },
        },
      });
      onClose();
    } else if (mode === 'EDIT') {
      EditWealthOne({
        variables: {
          pk_columns: {
            id: editData?.id,
          },
          _set: {
            ...data,
          },
        },
      });
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <>
        <h2 id="parent-modal-title">Editar WealthSummary</h2>
        <FormContainer>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputText
              name="cdi"
              label="CDI"
              variant="standard"
              control={control}
              defaultValue={editData?.cdi ?? ''}
              type="number"
            />
            <InputText
              name="gain"
              label="Ganho/mês"
              variant="standard"
              control={control}
              defaultValue={editData?.gain ?? ''}
              type="number"
            />
            <InputText
              name="profitability"
              label="Rentabilidade/mês"
              variant="standard"
              control={control}
              defaultValue={editData?.profitability ?? ''}
              type="number"
            />
            <InputText
              name="total"
              label="Total"
              variant="standard"
              control={control}
              defaultValue={editData?.total ?? ''}
              type="number"
            />

            <Checkbox
              name="hasHistory"
              label="Possui historico?"
              variant="standard"
              control={control}
              defaultChecked={editData?.hasHistory ?? false}
            />

            <Stack
              spacing={2}
              direction="row"
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                marginTop: '20px',
              }}
            >
              <ButtonUI variant="outlined" onClick={onCancel}>
                Cancelar
              </ButtonUI>
              <ButtonUI variant="contained" type="submit">
                Salvar
              </ButtonUI>
            </Stack>
          </Form>
        </FormContainer>
      </>
    </Modal>
  );
};

export default FormWealth;
