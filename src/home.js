function renderHome(content) {
    const homePage = document.createElement("div");
    homePage.classList.add("home-page");

    const heroSection = document.createElement("section");
    heroSection.classList.add("hero-section");

    const title = document.createElement("h1");
    title.classList.add("restaurant-title");
    title.textContent = "Dragon's Hearth";

    const description = document.createElement("p");
    description.classList.add("restaurant-description");
    description.textContent = "A cozy medieval-style restaurant serving warm meals, fresh bread, and hearty feasts.";

    const openHoursSection = document.createElement("section");
    openHoursSection.classList.add("hours-section");

    const openHours = document.createElement("h3");
    openHours.classList.add("hours");
    openHours.textContent = "Sunday : -- \nMonday : 9 AM - 9 PM\nTuesday : 9 AM - 9 PM\nWednesday : 9 AM - 9 PM\nThursday : 9 AM - 9 PM\nFriday : --\nSaturday : 9 AM - 9 PM";

    const locationSection = document.createElement("section");
    locationSection.classList.add("location-section");

    const location = document.createElement("p");
    location.classList.add("location");
    location.textContent = "DragonClaw, Between the 3rd and the 5th roads.";

    heroSection.appendChild(title);
    heroSection.appendChild(description);

    homePage.appendChild(heroSection);

    openHoursSection.appendChild(openHours);

    homePage.appendChild(openHoursSection);

    locationSection.appendChild(location);

    homePage.appendChild(locationSection);

    content.appendChild(homePage);
};

export { renderHome };