function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(p, comp) {
  if (p == comp) return "seri";
  if (p == "gajah") return comp == "orang" ? "menang" : "kalah";
  if (p == "orang") return comp == "semut" ? "menang" : "kalah";
  if (p == "semut") return comp == "gajah" ? "menang" : "kalah";
}

function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuAwal = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - waktuAwal > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "gambar/" + gambar[i++] + ".png");
    if (i === gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (e) {
  e.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = e.className;
    const hasil = getHasil(pilihanPlayer, pilihanComputer);

    putar();

    setTimeout(() => {
      const imgkomputer = document.querySelector(".img-komputer");
      imgkomputer.setAttribute("src", "gambar/" + pilihanComputer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanPlayer, pilihanComputer);

//   const imgkomputer = document.querySelector(".img-komputer");
//   imgkomputer.setAttribute("src", "gambar/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
