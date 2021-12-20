import './Everything.scss';

import { useParams } from 'react-router-dom';

import DebtEverything from '../components/DebtEverything';

const Everything = () => {
    const params = useParams();

    return(
        <div className="everything-containe">
            <DebtEverything id={params}/>
        </div>
    );
};

export default Everything;