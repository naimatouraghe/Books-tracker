import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Readlist from './components/Readlist';
import Read from './components/Read';
import Add from './components/Add';
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route exact path="/" element={<Readlist />} />
        <Route exact path="/read" element={<Read />} />
        <Route exact path="/add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
