const main = document.getElementById("main");
const contWelcome = document.getElementById("container-welcome");
const buttonGet = document.getElementById("button__get");
const contDivs = document.getElementById("images");


import * as all from "./script.js";
let cantidad = 10;

console.log(window.innerWidth);

const clearWelcomeItem = () => {
    main.classList.remove("main");
    main.className = "under-main"
    main.removeChild(contWelcome);


    if(window.innerWidth >= 1000){
        const div = document.createElement("div");
        const div2 = document.createElement("div");
        div.className = "cont-images";
        div2.className = "cont-images";
        div.setAttribute("id", "cont-images3");
        div2.setAttribute("id", "cont-images4");
        
        contDivs.appendChild(div);
        contDivs.appendChild(div2);

        all.printImages("1", cantidad);
        all.printImages("2", cantidad);
        all.printImages("3", cantidad);
        all.printImages("4", cantidad);

    }else
    if (window.innerWidth >= 700){
        all.printImages("1", cantidad);
        all.printImages("2", cantidad);
    }else
    if (window.innerWidth < 700) {
        all.printImages("1", cantidad);
    }    
       

}

buttonGet.addEventListener("click", clearWelcomeItem);

