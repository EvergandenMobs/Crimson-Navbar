const bars = document.getElementById("barsCheck");
const navContent = document.getElementById("nav-content");
let opsi2 = document.getElementById("option_2");
let opsi3 = document.getElementById("option_3");
let navTitle = document.getElementById("navListTitle");
const sideList = document.getElementById("side-list");
const labelopsi2 = document.getElementById("labelOpsi2");
const labelopsi3 = document.getElementById("labelOpsi3");
bars.addEventListener("change", function () {
  if (bars.checked == true) {
    navContent.classList.add("navReveal");
  } else if (bars.checked == false) {
    navContent.classList.remove("navReveal");
  }
});

function reset() {
  navContent.classList.remove("navReveal");
  opsi2.style.left = "100%";
  opsi3.style.left = "100%";
  navTitle.innerHTML = "";
  sideList.style.backgroundColor = "transparent";
  labelopsi2.classList.remove("listActive");
  labelopsi3.classList.remove("listActive");
  bars.checked = false;
}

let option_2 = document.getElementById("option2");
option_2.addEventListener("change", function () {
  revealList(option_2, "About", labelopsi2, labelopsi3, opsi2, opsi3);
});

let option_3 = document.getElementById("option3");
option_3.addEventListener("change", function () {
  revealList(option_3, "Portfolio", labelopsi3, labelopsi2, opsi3, opsi2);
});

function revealList(
  opsi,
  title,
  label,
  removeClass,
  revealListChild,
  removeListChild
) {
  if (opsi.checked == true) {
    label.classList.add("listActive");
    removeClass.classList.remove("listActive");
    opsi.checked = false;
    navTitle.innerHTML = title;
    revealListChild.style.left = "0%";
    revealListChild.style.transition = "0.2s";
    removeListChild.style.left = "100%";
    sideList.style.backgroundColor = "rgb(248, 103, 132)";
  }
}
