import "./style.css";
import { loadHeader } from "./header";
import { loadFooter } from "./footer";
import { loadHome } from "./home";
import { loadHours } from "./hours";
import { loadMenu } from "./menu";

// Load home page
loadHeader();
loadFooter();
loadHome();

// Get DOM elements for page navigation
const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home-link");
const menuBtn = document.querySelector("#menu-link");
const hoursBtn = document.querySelector("#hours-link");
const contactBtn = document.querySelector("#contact-link");

// Add event listeners to nav buttons
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
});

menuBtn.addEventListener("click", () => {
    // Clear main content
    content.innerHTML = "";
    // Load hours page
    loadMenu();
});
