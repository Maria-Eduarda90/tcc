import './styles/global.css';
import { Routes } from './routes';
import GlobalContext from "./context/index";

function App() {
  return (
    <GlobalContext>
      <Routes/>
    </GlobalContext>
    
  );
}

export default App;
