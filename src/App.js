import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Calculator from './Component/Calculator';
import Header from './Component/Header';
import Home from './Component/Home';
import Quote from './Component/Quote';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
