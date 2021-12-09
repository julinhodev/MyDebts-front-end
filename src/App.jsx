import DebtsList from './components/DebtsList';

import Header from './components/Header';

import './App.scss';

const App = () => {
  return(
    <div className="app-container">
      <Header />
      <DebtsList />
    </div>
  );
};
export default App;
