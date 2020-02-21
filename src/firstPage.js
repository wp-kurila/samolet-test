import React from 'react';
import {withRouter} from 'react-router-dom';

const FirstPage = ({data, onItemSelected}) => {
    return (
        <div>
           {
               data.map(dataItem => {
                   const {territory, libraries, order} = dataItem;

                   return (
                        <div 
                            key={order}
                            onClick={() => onItemSelected(dataItem)}
                            style={{width: '25%', margin: '15px', display:'flex', justifyContent: 'space-between', border: '1px solid black', padding: '10px', cursor:'pointer'}}>
                                <span>Регион: {territory};</span> 
                                <span>Библиотек - {libraries}</span>
                        </div>
                   )
               })
           }
        </div>
    )    
}

export default withRouter(FirstPage);