import {Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';
import Add from './Pages/Add';
import Edit from './Pages/Edit';

import './App.scss';

const App = () => {
  return(
    <div className="app-container">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/add" element={ <Add /> } />
        <Route path="/edit" element={ <Edit /> } />
      </Routes>
    </div>
  );
};
export default App;
