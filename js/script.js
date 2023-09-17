// New JavaScript code
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// Import the suggestions array from your suggestion file
import suggestions from '../js/suggestions.js'; // Adjust the path to your suggestion file

inputBox.onkeyup = (e) => {
    let userData = e.target.value.toLowerCase();
    let emptyArray = [];

    if (userData.trim() !== "") {
        // Filter suggestions based on user input (case-insensitive)
        emptyArray = suggestions.filter((data) => {
            return data.toLowerCase().includes(userData);
        });

        emptyArray = emptyArray.map((data) => {
            return `<li>${data}</li>`;
        });

        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);

        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].addEventListener("click", (e) => {
                e.stopPropagation();
                select(allList[i].textContent);
            });
        }

        // Show only the relevant card that matches the input
        showMatchingCard(userData);
    } else {
        searchWrapper.classList.remove("active");
        suggBox.innerHTML = "";
        // If the search input is empty, show all cards
        showAllCards();
    }
}

icon.addEventListener("click", () => {
    const userInput = inputBox.value.toLowerCase();
    if (userInput.trim() !== "") {
        select(userInput);
    }
});

function select(elementText) {
    inputBox.value = elementText;
    searchWrapper.classList.remove("active");

    // Get the target anchor tag with the matching data-card attribute
    const userInput = elementText.toLowerCase();
    const targetAnchor = document.querySelector(`a[data-card="${userInput}"]`);

    if (targetAnchor) {
        // Scroll to the target anchor tag's parent div
        targetAnchor.parentElement.scrollIntoView({ behavior: "smooth" });
    } else {
        // If no matching card is found, scroll to the search icon
        icon.scrollIntoView({ behavior: "smooth" });
    }
}

function showSuggestions(list) {
    let listData = list.length ? list.join('') : "<li>No suggestions found</li>";
    suggBox.innerHTML = listData;
}

function showAllCards() {
    // Show all cards
    const cards = document.querySelectorAll(".notecard");
    cards.forEach((card) => card.style.display = "block");
}

function showMatchingCard(userInput) {
    const cards = document.querySelectorAll(".notecard");

    cards.forEach((card) => {
        const cardContent = card.textContent.toLowerCase();
        const cardId = cardContent.replace(/[^a-zA-Z0-9]/g, ''); // Generate a consistent ID from card content
        card.id = cardId; // Set the ID of the card

        if (cardContent.includes(userInput)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

    // Get the "Search not found" message element
    const searchNotFound = document.querySelector(".search-not-found");

    // If no matching card is found, display the message and center it
    const matchingCards = document.querySelectorAll(".notecard[style='display: block;']");
    if (matchingCards.length === 0) {
        searchNotFound.style.display = "block";
    } else {
        searchNotFound.style.display = "none";
    }
}









