import logo from './logo.svg';
import './App.css';
import { AppRoutes } from './routes/Routes'; 
import { BrowserRouter } from "react-router-dom";
import { Header } from './common/Header';
import { Footer } from './common/Footer';
function App() {
  return ( 
    
      <BrowserRouter>
      <Header/>
        <AppRoutes/>
        <Footer/>
      </BrowserRouter> 
  );
}

export default App;
