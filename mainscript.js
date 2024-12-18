//кнопки black/white version
//https://www.w3schools.com/howto/howto_js_full_page_tabs.asp
function openPage(pageName, elmnt, bgColor, textColor, bodycolour) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
      tablinks[i].style.color = "";
  }

  document.getElementById(pageName).style.display = "flex";

  elmnt.style.backgroundColor = bgColor;
  elmnt.style.color = textColor;
  document.body.classList.toggle('alternate');
}

  
  document.getElementById("defaultOpen").click();
// кінець кнопок

//слайдер
const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");
const slider3 = document.getElementById("slider3");
const slider4 = document.getElementById("slider4");
const slider5 = document.getElementById("slider5");
const slider6 = document.getElementById("slider6");
const slider7 = document.getElementById("slider7");
const slider8 = document.getElementById("slider8");
const slider9 = document.getElementById("slider9");
const slider10 = document.getElementById("slider10");
const slider11 = document.getElementById("slider11");
const slider12 = document.getElementById("slider12");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length/6-6;

let currentIndex = 0;

const elementsToToggle = document.querySelectorAll(".toggle-element");

function updateVisibility() {
    const normalizedIndex = currentIndex % elementsToToggle.length;

    elementsToToggle.forEach((element, index) => {
        if (index === normalizedIndex) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
}

function moveSlide(step) {
    currentIndex += step;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    const offset = -currentIndex * 100;
    slider1.style.transform = `translateX(${offset}%)`;
    slider2.style.transform = `translateX(${offset}%)`;
    slider3.style.transform = `translateX(${offset}%)`;
    slider4.style.transform = `translateX(${offset}%)`;
    slider5.style.transform = `translateX(${offset}%)`;
    slider6.style.transform = `translateX(${offset}%)`;
    slider7.style.transform = `translateX(${offset}%)`;
    slider8.style.transform = `translateX(${offset}%)`;
    slider9.style.transform = `translateX(${offset}%)`;
    slider10.style.transform = `translateX(${offset}%)`;
    slider11.style.transform = `translateX(${offset}%)`;
    slider12.style.transform = `translateX(${offset}%)`;

    //видимість елементів
    updateVisibility();
}

//видимість під час завантаження
updateVisibility();
//кінець слайдера
