import logo from './logo.svg';
import './App.css';
import { AppRoutes } from './routes/Routes';
import { Grommet } from 'grommet';

function App() {
  return ( 
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter> 
  );
}

export default App;
