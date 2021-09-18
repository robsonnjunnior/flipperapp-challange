import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Card, Button } from 'components';
import { Container, CardList } from './styles';

import { IWealthSummary } from 'models/wealthSummary/wealSummary.model';

import useDeleteWealthSummary from 'hooks/wealthSummary/useDeleteWealthSummary';
import useWealthSummary from 'hooks/wealthSummary/useWealthSummary';
import FormWealth from './components/FormWealth';

const Resume = () => {
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState<IWealthSummary | null>(null);
  const [mode, setMode] = useState('');
  const { error, loading, data } = useWealthSummary();

  const { DeleteWealthByPk } = useDeleteWealthSummary();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { wealthSummary } = data;

  const handleDeleteSummary = (id: number) => {
    DeleteWealthByPk({
      variables: {
        id,
      },
    });
  };

  const handleEditSummary = (data: IWealthSummary) => {
    setEditData(data);
    setMode('EDIT');
    setOpenModal(true);
  };

  return (
    <Container>
      <Button
        label="Criar resumo"
        handleClick={() => {
          setEditData(null);
          setMode('NEW');
          setOpenModal(prev => !prev);
        }}
      />
      <CardList>
        {wealthSummary?.map((data: IWealthSummary) => (
          <Card
            key={uuid()}
            title="Seu resumo"
            data={data}
            handleDelete={(id: number) => handleDeleteSummary(id)}
            handleEdit={(data: IWealthSummary) => handleEditSummary(data)}
          />
        ))}
      </CardList>
      {openModal && (
        <FormWealth
          open={openModal}
          onClose={() => setOpenModal(prev => !prev)}
          onCancel={() => {
            setOpenModal(prev => !prev);
          }}
          editData={editData}
          mode={mode}
        />
      )}
    </Container>
  );
};

export default Resume;
