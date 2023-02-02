
import Router from './components/Router';
import './sass/main.scss';
import { PortfolioProvider } from './contexts/Portfolio.context';

function App() {
  return (
      <PortfolioProvider>
        <Router />
      </PortfolioProvider>
  );
}

export default App;
