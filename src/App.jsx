import DebtsList from './components/DebtsList';

import Header from './components/Header';
import NewDebt from './components/NewDebt';

import './App.scss';

const App = () => {
  return(
    <div className="app-container">
      <Header />
      <NewDebt />
      <DebtsList />
    </div>
  );
};
export default App;
