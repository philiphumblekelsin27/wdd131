document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
const menuBtn = document.querySelector("#menu-btn");
const navList = document.querySelector("#nav-list");

menuBtn.addEventListener("click", () => {
    navList.classList.toggle("open");
    menuBtn.textContent = navList.classList.contains("open") ? "❌" : "☰";
});
let visitCount = Number(window.localStorage.getItem("visitCount-ls")) || 0;
visitCount++;
window.localStorage.setItem("visitCount-ls", visitCount);
document.getElementById("visit-count").textContent = visitCount;