import {Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';
import Add from './Pages/Add';
import Edit from './Pages/Edit';
import Footer from './components/Footer';
import Header from './components/Header';

import './App.scss';

const App = () => {
  return(
    <div className="app-container">
      <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/add" element={ <Add /> } />
          <Route path="/edit" element={ <Edit /> } />
        </Routes>
      <Footer />
    </div>
  );
};
export default App;
