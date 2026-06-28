import "./styles.css";
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";

const content = document.querySelector("#content");

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");


function clearContent() {
    content.textContent = "";
};

function loadHome() {
    clearContent();
    renderHome(content);
};

function loadMenu() {
    clearContent();
    renderMenu(content);
};

loadHome();

homeBtn = addEventListener("click", loadHome);
menuBtn = addEventListener("click", loadMenu);