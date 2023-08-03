const modalBtn = document.querySelector(".modalBtn");
const modal = document.querySelector(".modal");
const body = document.querySelector("body");
const subModal = document.querySelector(".subModal");

window.addEventListener("DOMContentLoaded", () => {
	modal.style.display = "none";
});

modalBtn.addEventListener("click", (e) => {
	e.stopPropagation();
	modal.style.display = "flex";
});
body.addEventListener("click", () => {
	modal.style.display = "none";
});
subModal.addEventListener("click", (e) => {
	e.stopPropagation();
});
