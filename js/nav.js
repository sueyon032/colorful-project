// class 이름으로 가져오기
const navListUl0 = document.getElementsByClassName("nav-list")[0];
const navListUl1 = document.getElementsByClassName("nav-list")[1];

// Event Handling
nav_toggle0.onclick = () => {
    navListUl0.classList.toggle("show-menu");
}
nav_toggle1.onclick = () => {
    navListUl1.classList.toggle("show-mode");
}