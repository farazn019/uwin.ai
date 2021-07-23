import React from 'react';
import ReactDOM from 'react-dom';

function title(titleName) {
    return React.createElement(
        'h1',
        null,
        titleName
    );
}

ReactDOM.render(title('News'), document.getElementById('Section1'));

export default title;