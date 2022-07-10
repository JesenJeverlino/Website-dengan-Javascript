const container = document.querySelector(".container");
const besar = document.querySelector(".besar");
const semuaKecil = document.querySelectorAll(".kecil");

container.addEventListener("click", function (e) {
  if (e.target.className == "kecil") {
    besar.src = e.target.src;
    besar.classList.add("fade");
    setTimeout(function () {
      besar.classList.remove("fade");
    }, 500);

    semuaKecil.forEach(function (e) {
      //   if (e.classList.contains("active")) {
      //     e.classList.remove("active");
      //   }
      e.className = "kecil";
    });
    e.target.classList.add("active");
  }
});
