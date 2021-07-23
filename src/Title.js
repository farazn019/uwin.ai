import React from 'react';
import ReactDOM from 'react-dom';

function title(titleName){
    return(
        <h1>{titleName}</h1>
    )
}

ReactDOM.render(title('News'), document.getElementById('Section1'));


export default title