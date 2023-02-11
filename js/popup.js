const popupButton = document.querySelector(".reserve__button");
const body = document.querySelector("body");


if (popupButton){
    const popup = document.querySelector('.popup');
    popupButton.addEventListener("click", function (){
        popupButton.classList.toggle("_click");
        popup.classList.toggle("_open");
        document.body.classList.toggle("_lock");
     });
  }

const popupCancel = document.querySelector('.form__cancel');
  
if(popupCancel){
    popupCancel.addEventListener("click", function(){
        popup.classList.remove("_open");
    });
}

popup.addEventListener("click", function(e){
    if(!e.target.closest(".popup__form")) {
        popup.classList.remove("_open");
    };
})

  