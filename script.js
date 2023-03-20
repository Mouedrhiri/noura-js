var img = document.getElementById("img");
var btn = document.getElementById("btn");
var btn1 = document.getElementById("btn1");
var h1 = document.getElementById("h1");
var write = document.getElementById("write");
var btn2 = document.getElementById("btn2");
var h2 = document.getElementById("h2");
var btn3 = document.getElementById("btn3");
var aler = document.getElementById("alert");
var consol = document.getElementById("consol");
var prin = document.getElementById("print");

var click = 0;

//With if :

/*btn.addEventListener("click", () => {
  if (click == 0) {
    img.src = "./pic_bulbon.gif";
    click += 1;
  } else {
    img.src = "./pic_bulboff.gif";
    click = 0;
  }
});*/

//With Switch Case :
btn.addEventListener("click", function () {
  switch (click) {
    case 0:
      img.src = "./pic_bulbon.gif";
      click += 1;
      break;
    default:
      img.src = "./pic_bulboff.gif";
      click = 0;
      break;
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

write.addEventListener("click", function () {
  document.write("<h1>Salaam Noura</h1>");
});

aler.addEventListener("click", function () {
  alert("Salam");
});

consol.addEventListener("click", function () {
  console.log("Chi haja");
});

prin.addEventListener("click", function () {
  window.print();
});
