const headerImg = document.querySelector(".navigation");

console.log(headerImg);

// url(/images/mobile/imgae-header.jpg)

if (window.screen.width <= 767) {
  headerImg.style.backgroundImage = "url(/images/mobile/image-header.jpg)";
} else {
  headerImg.style.backgroundImage = "url(/images/desktop/image-header.jpg)";
}

const btnMenu = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu-mobile");
const triangleMenu = document.querySelector(".conect");

document.addEventListener("click", (e) => {
  let target = e.target;

  if (target == btnMenu) {
    menu.classList.add("show");
    triangleMenu.classList.add("show");
  } else {
    menu.classList.remove("show");
    triangleMenu.classList.remove("show");
  }
});
