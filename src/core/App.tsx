import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from 'styles/global';
import Routes from 'core/Routes';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes />
    </Router>
  );
}

export default App;
