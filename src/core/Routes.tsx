import { Switch, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import * as page from 'pages';

import { PageContainer } from 'components';

const routes = [
  {
    path: '/',
    exact: true,
    component: page.Dashboard,
  },
  {
    path: '*',
    component: page.NotFound,
  },
];

const Routes = () => {
  return (
    <PageContainer>
      <Switch>
        {routes.map(route => (
          <Route
            key={uuid()}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
      </Switch>
    </PageContainer>
  );
};

export default Routes;
