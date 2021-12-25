import './CurrentMonth.scss';
import { RiCalendarFill } from 'react-icons/ri';

const CurrentMonth = ({forwardOrBack, description}) => {

    const newDate = () => {
        if(forwardOrBack){
            return new Date().getMonth() + forwardOrBack;
        } else {
            return new Date().getMonth();
        }
    };

    let date = newDate();

    switch(date){
        case 0:
            date = 'Janeiro'
            break;
        case 1:
            date = 'Fevereiro'
            break;
        case 2:
            date = 'Março'
            break;
        case 3:
            date = 'Abril'
            break;
        case 4:
            date = 'Maio'
            break;
        case 5:
            date = 'Junho'
            break;
        case 6:
            date = 'Julho'
            break;
        case 7:
            date = 'Agosto'
            break;
        case 8:
            date = 'Setembro'
            break;
        case 9:
            date = 'Outubro'
            break;
        case 10:
            date = 'Novembro'
            break;
        case 11:
            date = 'Dezembro'
            break;
        default:
            date = 'Erro ao carregar a data!'
            break;            
    };

    return(
        <div className="month-container">
            <RiCalendarFill size={20} color="#0090FF"/>
            <span>{description ? `${description} ${date}` : date}</span>
        </div>
    );
}

export default CurrentMonth;