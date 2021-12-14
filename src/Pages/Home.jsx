import DebtsList from '../components/DebtsList';

import Header from '../components/Header';

const Home = () => {
    return(
        <div className="home-container">
            <Header />
            <DebtsList />
        </div>
    );
};

export default Home;