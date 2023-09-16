const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// Your suggested input keywords
const suggestions = ["Operating system", "python", "new"]; // Add your keywords here

inputBox.onkeyup = (e) => {
    let userData = e.target.value.toLowerCase();
    let emptyArray = [];

    if (userData.trim() !== "") {
        emptyArray = suggestions.filter((data) => {
            return data.toLowerCase().startsWith(userData);
        });

        emptyArray = emptyArray.map((data) => {
            return `<li>${data}</li>`;
        });

        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);

        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].addEventListener("click", (e) => {
                e.stopPropagation(); // Prevent the click event from propagating to the inputBox
                select(allList[i].textContent);
            });
        }

        // Hide unmatched cards
        hideUnmatchedCards(userData);
    } else {
        searchWrapper.classList.remove("active");
        suggBox.innerHTML = "";
        // If the search input is empty, show all cards
        showAllCards();
    }
}

function select(elementText) {
    inputBox.value = elementText;
    searchWrapper.classList.remove("active");

    // Show only the relevant card
    const selectedCard = document.querySelector(`#card${suggestions.indexOf(elementText) + 1}`);
    const cards = document.querySelectorAll(".notecard");
    cards.forEach((card) => {
        if (card !== selectedCard) {
            card.style.display = "none";
        }
    });

    // Show the selected card
    if (selectedCard) {
        selectedCard.style.display = "block";
    } else {
        // If no matching card is found, show "Search not found"
        document.querySelector(".search-not-found").style.display = "block";
    }
}

function showSuggestions(list) {
    let listData = list.length ? list.join('') : "<li>No suggestions found</li>";
    suggBox.innerHTML = listData;
}

function hideAllCards() {
    // Hide all cards
    const cards = document.querySelectorAll(".notecard");
    cards.forEach((card) => card.style.display = "none");
}

function showAllCards() {
    // Show all cards
    const cards = document.querySelectorAll(".notecard");
    cards.forEach((card) => card.style.display = "block");
}

function hideUnmatchedCards(userInput) {
    // Hide cards that don't contain the user's input
    const cards = document.querySelectorAll(".notecard");
    cards.forEach((card) => {
        const cardContent = card.textContent.toLowerCase();
        if (!cardContent.includes(userInput)) {
            card.style.display = "none";
        }
    });
}
