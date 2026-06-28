import steakImg from "./images/dragon-steak.png";
import bassImg from "./images/seared-bass.png";


function itemGenerator(titleOfItem, picture, ingredients, price){
    const itemCard = document.createElement("div");
    itemCard.classList.add("item-card");

    const itemTitle = document.createElement("h3");
    itemTitle.textContent = titleOfItem;

    const itemImage = document.createElement("img");
    itemImage.classList.add("item-image");
    itemImage.src = picture;
    itemImage.alt = titleOfItem;

    const itemIngredients = document.createElement("p");
    itemIngredients.textContent = ingredients;

    const itemPrice = document.createElement("p");
    itemPrice.textContent = price;

    itemCard.appendChild(itemTitle);
    itemCard.appendChild(itemImage);
    itemCard.appendChild(itemIngredients);
    itemCard.appendChild(itemPrice);

    return itemCard;
};


function renderMenu (content) {
    const menuPage = document.createElement("div");
    menuPage.classList.add("menu-page");

    const pageTitle = document.createElement("h1");
    pageTitle.classList.add("page-title");
    pageTitle.textContent = "Our Menu.";

    menuPage.appendChild(pageTitle);

    const firstItem = itemGenerator(
        "Dragon Steak",
        steakImg,
        "Grilled dragon meat, roasted potatoes, garlic butter",
        "15 Silver Coins"
    );

    const secondItem = itemGenerator(
        "Fisherman's Joy",
        bassImg,
        "Seared sea bass, broccolli, sliced mushrooms",
        "8 Silver Coins"
    );

    menuPage.appendChild(firstItem);
    menuPage.appendChild(secondItem);

    content.appendChild(menuPage);
};

export { renderMenu };