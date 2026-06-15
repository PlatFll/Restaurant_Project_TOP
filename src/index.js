import "./styles.css";
import { renderHome } from "./home.js";

const content = document.querySelector("#content");

function clearContent() {
    content.textContent = "";
}

function loadHome() {
    clearContent();
    renderHome(content);
}

loadHome();