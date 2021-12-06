import './CurrentMonth.scss';

const CurrentMonth = () => {

    let date = new Date().getMonth();

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
            break;            
    };

    return(
        <div className="month-container">
            <span>Referente ao mês de {date}</span>
        </div>
    );
}

export default CurrentMonth;