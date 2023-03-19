var img = document.getElementById("img");
var btn = document.getElementById("btn");
var btn1 = document.getElementById("btn1");
var h1 = document.getElementById("h1");

var btn2 = document.getElementById("btn2");
var h2 = document.getElementById("h2");

var btn3 = document.getElementById("btn3");

var click = 0;
btn.addEventListener("click", () => {
  if (click == 0) {
    img.src = "./pic_bulbon.gif";
    click += 1;
  } else {
    img.src = "./pic_bulboff.gif";
    click = 0;
  }
});

btn1.addEventListener("click", () => {
  h1.style.color = "red";
});

btn2.addEventListener("click", function () {
  h2.style.display = "none";
});

btn3.addEventListener("click", function () {
  h2.style.display = "block";
});
