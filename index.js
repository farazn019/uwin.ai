import React from 'react';
/*
function news() {
    return (
        <div id={"newsHeader"}>
        React.createElement('h2'));
        </div>
}*/

function smoothScroll(){
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener('click', function(e){
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}


