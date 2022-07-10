//btn toggle
const btn = document.createElement("button");
const btntxt = document.createTextNode("Pencet gw");
btn.appendChild(btntxt);
btn.setAttribute("type", "button");
const kntl = document.getElementById("kontol");
kntl.appendChild(btn);

btn.addEventListener("click", function () {
  document.body.classList.toggle("birum");
});

//btn warna acak
const btn2 = document.createElement("button");
const btntxt2 = document.createTextNode("warna acak");
btn2.appendChild(btntxt2);
btn2.setAttribute("type", "button");
btn.after(btn2);

btn2.addEventListener("click", function () {
  var r = Math.round(Math.random() * 255 + 1);
  var g = Math.round(Math.random() * 255 + 1);
  var b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + ", " + b + ", " + g + ")";
});

//slider
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

document.body.addEventListener("mousemove", function (e) {
  const xPos = Math.round((e.clientX / window.innerWidth) * 255);
  const yPos = Math.round((e.clientY / window.innerWidth) * 255);
  document.body.style.backgroundColor = "rgb(" + xPos + ", " + yPos + ", 100)";
});
