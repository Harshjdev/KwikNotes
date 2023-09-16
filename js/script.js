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

        // Show only the relevant card that matches the input
        showMatchingCard(userData);
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

    // Show only the relevant card that matches the input
    showMatchingCard(inputBox.value.toLowerCase());
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
        card.style.display = cardContent.includes(userInput) ? "block" : "none";
    });
}

