import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import LogoFliper from 'assets/img/logo-fliper.png';

const Header = () => {
  const history = useHistory();

  return (
    <Container>
      <nav>
        <img
          src={LogoFliper}
          alt="Logo Fliper"
          onClick={() => history.push('/')}
        />
      </nav>
    </Container>
  );
};

export default Header;
