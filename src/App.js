import logo from './logo.svg';
import './App.css';
//eu preciso importar o componente
import AnimeList from './components/AnimeList';
//importar o pacote que cuida da rotas
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AnimeList />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
