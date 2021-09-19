import { NavLink, useHistory } from 'react-router-dom';
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
        <div className="menu">
          <NavLink
            to="/resume"
            activeStyle={{
              backgroundColor: 'hsla(0, 0%, 100%, 0.15)',
            }}
          >
            Resumos
          </NavLink>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
