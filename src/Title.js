import React from 'react';
import ReactDOM from 'react-dom';

function Title(titleName){
    return(
        <h1>{titleName}</h1>
    )
}

ReactDOM.render(Title('News'), document.getElementById('Section1'));


export default Title