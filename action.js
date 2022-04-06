const contWelcome = document.getElementById("container-welcome");
const buttonGet = document.getElementById("button__get");
const welcome = document.getElementById("welcome__text");



const clearWelcomeItem = () => {
    contWelcome.removeChild(buttonGet);
    contWelcome.removeChild(welcome);
}




buttonGet.addEventListener("click", clearWelcomeItem)

