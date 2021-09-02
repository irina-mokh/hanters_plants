//Slider
const sliderItems = document.querySelectorAll(".slide");
const slider = document.querySelector(".gallery");
let i = 0;
const btnPrev = document.querySelector(".prev-slide");
const btnNext = document.querySelector(".next-slide");

let sliderControls = document.querySelectorAll(".slider__control");

let slideWidth = document.querySelector(".slide").offsetWidth;

btnPrev.addEventListener("click", function(evt){
  evt.preventDefault();
  i--;
  if (i < 0) {
    i = sliderItems.length - 1;
  }
  sliderRefresh(i);
  console.log(i);
});
btnNext.addEventListener("click", function(evt){
  evt.preventDefault();
  i++;
  if (i >= sliderItems.length){
    i = 0;
  }
  sliderRefresh(i);
  console.log(i);
});

function sliderRefresh(i) {
  if (i == 0) {
    btnPrev.classList.add("disabled-arrow");
    btnNext.classList.remove("disabled-arrow");
  } else if (i == sliderItems.length - 1) {
    btnNext.classList.add("disabled-arrow");
    btnPrev.classList.remove("disabled-arrow");
  } else {
    btnNext.classList.remove("disabled-arrow");
    btnPrev.classList.remove("disabled-arrow");
  }

  slider.style.marginLeft = -slideWidth * (i)  + 'px';

  let sliderItem = document.querySelector(".slide_active");
  let sliderDot = document.querySelector(".slider__control_current");
  sliderDot.classList.remove ("slider__control_current");
  sliderItem.classList.remove("slide_active");
  sliderItems[i].classList.add("slide_active");
  sliderControls[i].classList.add("slider__control_current");
};

sliderControls.forEach((dot) =>{
  dot.addEventListener("click", (evt) => {
    evt.preventDefault;
    let arr = Array.prototype.slice.call(sliderControls);
    let i = arr.indexOf(dot); 
    console.log(i);
    sliderRefresh(i);
  })
});

//Order form
let form = document.querySelector(".order__form");
let userName = document.querySelector("#name");
let tel = document.querySelector("#tel");
let email = document.querySelector("#email");
let plant = document.querySelector("#plant");
let error = 0;
form.addEventListener('submit', function(evt) {
  
  if (userName.value == "") {
    evt.preventDefault(evt);
    error = document.createElement("div");
    error.innerHTML = "Введите имя";
    error.classList.add("error");
    userName.after(error);
    userName.classList.add("error-input");
  }
  if (tel.value == "") {
    evt.preventDefault(evt);
    error = document.createElement("div");
    error.innerHTML = "Введите номер телефона";
    error.classList.add("error");
    tel.after(error);
    tel.classList.add("error-input");
  }
  if (email.value == "") {
    evt.preventDefault(evt);
    error = document.createElement("div");
    error.innerHTML = "Введите email";
    error.classList.add("error");
    email.after(error);
    email.classList.add("error-input");
  }
  if (plant.value == "") {
    evt.preventDefault(evt);
    error = document.createElement("div");
    error.innerHTML = "Выберите товар";
    error.classList.add("error");
    plant.after(error);
    plant.classList.add("error-input");
  }
  
})