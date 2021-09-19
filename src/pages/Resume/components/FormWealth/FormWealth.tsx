/* eslint-disable @typescript-eslint/no-explicit-any */
import Stack from '@mui/material/Stack';
import ButtonUI from '@mui/material/Button';

import { InputText, Checkbox, Modal } from 'components';

import { Form, FormContainer } from './styles';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { IFormWealth } from './formWealth.model';
import { IWealthSummary } from 'models/wealthSummary/wealSummary.model';

import useCreateWealthSummary from 'hooks/wealthSummary/useCreateWealthSummary';
import useUpdateWealthSummary from 'hooks/wealthSummary/useUpdateWealthSummary';

const schema = yup.object().shape({
  cdi: yup.string().required(),
  gain: yup.string().required(),
  profitability: yup.string().required(),
  total: yup.string().required(),
});

const FormWealth = ({
  open,
  onClose,
  onCancel,
  editData,
  mode,
}: IFormWealth) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { AddWealthOne } = useCreateWealthSummary();
  const { EditWealthOne } = useUpdateWealthSummary();

  const onSubmit = (data: Omit<IWealthSummary, 'id'>) => {
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
              error={(errors.cdi as any)?.message}
            />
            <InputText
              name="gain"
              label="Ganho/mês"
              variant="standard"
              control={control}
              defaultValue={editData?.gain ?? ''}
              type="number"
              error={(errors.gain as any)?.message}
            />
            <InputText
              name="profitability"
              label="Rentabilidade/mês"
              variant="standard"
              control={control}
              defaultValue={editData?.profitability ?? ''}
              type="number"
              error={(errors.profitability as any)?.message}
            />
            <InputText
              name="total"
              label="Total"
              variant="standard"
              control={control}
              defaultValue={editData?.total ?? ''}
              type="number"
              error={(errors.total as any)?.message}
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
