
const menuIcon = document.querySelector(".menu__icon");
if (menuIcon) {
   const headMenu = document.querySelector(".header__nav");
   menuIcon.addEventListener("click", function (e){
      menuIcon.classList.toggle("_active");
      headMenu.classList.toggle("_actived");
      document.body.classList.toggle("_lock");
   });
}