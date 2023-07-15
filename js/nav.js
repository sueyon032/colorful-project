// class 이름으로 가져오기
const navListUl0 = document.getElementsByClassName("nav-list")[0];
const navListUl1 = document.getElementsByClassName("nav-list")[1];

// Event Handling
nav_toggle0.onclick = () => {
    if(navListUl1.classList.contains("show-mode")) {
        navListUl1.classList.remove("show-mode");
        navListUl0.classList.add("show-menu");
    }
    else {
        navListUl0.classList.toggle("show-menu");
    }
}
nav_toggle1.onclick = () => {
    if(navListUl0.classList.contains("show-menu")) {
        navListUl0.classList.remove("show-menu");
        navListUl1.classList.add("show-mode");
    }
    else {
        navListUl1.classList.toggle("show-mode");
    }
}