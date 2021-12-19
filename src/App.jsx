import {Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';
import Debts from './Pages/Debts';
import Add from './Pages/Add';
import Edit from './Pages/Edit';
import Everything from './Pages/Everything';
/* import Footer from './components/Footer'; */
import Header from './components/Header';

import './App.scss';

const App = () => {
  return(
    <div className="app-container">
      <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/debts" element={ <Debts /> } />
          <Route path="/add" element={ <Add /> } />
          <Route path="/edit/:id" element={ <Edit /> } />
          <Route path="/everything/:description" element={ <Everything /> } />
        </Routes>
{/*       <Footer /> */}
    </div>
  );
};
export default App;
