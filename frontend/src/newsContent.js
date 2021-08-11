import {React, Component} from 'react';

import './newContent.css';



function NewsContentSubHeading(){
    return(
        <h4>Here's The Latest News:</h4>
    );
}



function NewsContent(props){
    return(
        <form id="newsForm">
            <div id="newsContent">
                <p class="content">Here is some News Content: {props.news}</p>
                <p class="content">One</p>
                <p class="content">fjdkvvvvvvvvvvvvvvvvvvvvvblu84h9gwureevbiwe9ogh8ieiorg9hneorighneor9uigeui9r8gveo</p>
                <p class="content">g9045gh0</p>
                <p class="content">Two</p>
                <p class="content">Three</p>
                <p class="content">Four</p>
            </div>
        </form>
    );
}

export {NewsContentSubHeading, NewsContent};