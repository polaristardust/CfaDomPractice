let setDark = function(){
    let main = document.querySelector("main");
    main.style.backgroundColor = "black";
    main.style.color = "white";

    let nav = document.querySelector("nav");
    nav.style.backgroundColor = "black";
    nav.style.color = "white";
}

let dmButton = document.querySelector("button#darkMode");
dmButton.addEventListener("click", setDark);