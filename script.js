let setDark = function(){
    let main = document.querySelector("main");
    main.style.backgroundColor = "#a9a9a9";
    main.style.color = "white";
    main.style.borderColor = "white";

    let nav = document.querySelector("nav");
    nav.style.backgroundColor = "#a9a9a9";
    nav.style.color = "white";

    let body = document.querySelector("body");
    body.style.backgroundColor = "#242526";

    let link = document.querySelector("a.menuLink:link");
    link.style.color = "white";

    let linkclicked = document.querySelector("a.menuLink:visited");
    linkclicked.style.color = "lightgray";
}

let dmButton = document.querySelector("button#darkMode");
dmButton.addEventListener("click", setDark);