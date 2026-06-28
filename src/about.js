function renderAbout (content){
    const aboutPage = document.createElement("div");
    aboutPage.classList.add("about-page");

    const aboutText = document.createElement("p");
    aboutText.textContent = "Welcome to The Red Wyrmminn, We are but a humble Inn located between the two common roads in DragonClaw. Stop by for all your travelling needs.";

    aboutPage.appendChild(aboutText);

    content.appendChild(aboutPage)
};  

export { renderAbout };