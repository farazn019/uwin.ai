//const gsap = require('gsap');

import gsap from 'gsap';
document.querySelectorAll("nav button").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        gsap.to(window, {duration: 1, scrollTo:{y:"#section" + (index + 1), offsetY:70}});
    });
});