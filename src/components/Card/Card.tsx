import { Button } from 'components';
import { ICard } from 'models/card/card.model';
import { ITooltipMenuOptions } from 'models/tooltipMenu/tooltipMenu.model';
import { currencyFormat, percentFormat } from 'utils/number';
import TooltipMenu from 'components/TooltipMenu';

import {
  Container,
  Header,
  IvestedValue,
  ProfiabilityInfo,
  ItemInfo,
  Footer,
} from './styles';

const Card = ({ title, data, handleDelete, handleEdit }: ICard) => {
  const { cdi, gain, hasHistory, profitability, total, id } = data;

  const cardMenuItens: ITooltipMenuOptions[] = [
    {
      label: 'Edit',
      action: () => handleEdit(data),
    },
    {
      label: 'Delete',
      action: () => handleDelete(id),
    },
  ];

  return (
    <Container data-testid="card-wealth-summary">
      <Header>
        <p>{title}</p>
        <TooltipMenu data-testid="card-tooltipMenu" options={cardMenuItens} />
      </Header>
      <IvestedValue>
        <p>Valor investido</p>
        <p>{currencyFormat(total)}</p>
      </IvestedValue>
      <ProfiabilityInfo>
        <ItemInfo>
          <p>Rentabilidade/mês</p>
          <p>{percentFormat(profitability, 3)}</p>
        </ItemInfo>

        <ItemInfo>
          <p>CDI</p>
          <p>{percentFormat(cdi, 3)}</p>
        </ItemInfo>

        <ItemInfo>
          <p>Ganho/mês</p>
          <p>{currencyFormat(gain)}</p>
        </ItemInfo>
      </ProfiabilityInfo>
      {hasHistory && (
        <Footer>
          <div className="divider" />
          <Button
            label="VER MAIS"
            handleClick={() => {
              console.log('click');
            }}
          />
        </Footer>
      )}
    </Container>
  );
};

export default Card;
