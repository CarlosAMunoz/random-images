const main = document.getElementById("main");
const contWelcome = document.getElementById("container-welcome");
const buttonGet = document.getElementById("button__get");


import * as all from "./script.js";
let cantidad = 10;

const clearWelcomeItem = () => {
    main.classList.remove("main");
    main.className = "under-main"

    main.removeChild(contWelcome);
    all.printImages("1", cantidad);
    // all.printImages("2", cantidad);
}

buttonGet.addEventListener("click", clearWelcomeItem);

