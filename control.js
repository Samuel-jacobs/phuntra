function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


function toggleFaq() {
  var element = document.querySelector(".faqHeader");
  element.classList.toggle("faq-header-new");
}
function toggleFaq1() {
  var element = document.querySelector("#faqHeader");
  element.classList.toggle("faq-header-new");
}
function toggleFaq2() {
  var element = document.querySelector("#faqHeader2");
  element.classList.toggle("faq-header-new");
}
function toggleFaq3() {
  var element = document.querySelector("#faqHeader3");
  element.classList.toggle("faq-header-new");
}
function toggleFaq4() {
  var element = document.querySelector("#faqHeader4");
  element.classList.toggle("faq-header-new");
}
function toggleFaq5() {
  var element = document.querySelector("#faqHeader5");
  element.classList.toggle("faq-header-new");
}
