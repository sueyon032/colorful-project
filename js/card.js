//속성 불러오기
const cardShow = document.getElementsByTagName("footer")[0];

nav_toggle.onclick = () => {
    cardShow.classList.add("hidden-card");
}