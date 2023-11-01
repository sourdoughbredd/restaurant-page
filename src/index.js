import "./style.css";
import { loadHeader } from "./header";
import { loadHome } from "./home.js";
import { loadHours } from "./hours.js";

loadHeader();
loadHome();

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home-link");
const menuBtn = document.querySelector("#menu-link");
const hoursBtn = document.querySelector("#hours-link");
const contactBtn = document.querySelector("#contact-link");

homeBtn.addEventListener("click", () => {
    // Clear main content
    content.innerHTML = "";
    // Load home page
    loadHome();
});

hoursBtn.addEventListener("click", () => {
    // Clear main content
    content.innerHTML = "";
    // Load hours page
    loadHours();
})
