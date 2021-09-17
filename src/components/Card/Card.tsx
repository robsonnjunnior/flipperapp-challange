import {
  Container,
  Header,
  IvestedValue,
  ProfiabilityInfo,
  ItemInfo,
  Footer,
} from './styles';
import { ReactComponent as MdMoreVert } from 'assets/img/more_vert.svg';
import { ICard } from 'models/card/card.model';
import { currencyFormat, percentFormat } from 'utils/number';
import { Button } from 'components';

const Card = ({ title, data }: ICard) => {
  const { cdi, gain, hasHistory, profitability, total } = data;
  return (
    <Container>
      <Header>
        <p>{title}</p>
        <MdMoreVert />
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
          <Button label="VER MAIS" />
        </Footer>
      )}
    </Container>
  );
};

export default Card;
