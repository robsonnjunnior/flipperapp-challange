import { Header, Footer } from 'components';
import { Page, Container } from './styles';
import { IPageContainer } from './pageContainer.model';

const PageContainer = ({ children }: IPageContainer) => {
  return (
    <Page>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Page>
  );
};

export default PageContainer;
