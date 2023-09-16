// // New JavaScript code
// const searchWrapper = document.querySelector(".search-input");
// const inputBox = searchWrapper.querySelector("input");
// const suggBox = searchWrapper.querySelector(".autocom-box");
// const icon = searchWrapper.querySelector(".icon");
// let linkTag = searchWrapper.querySelector("a");
// let webLink;

// inputBox.onkeyup = (e) => {
//     let userData = e.target.value.toLowerCase();
//     let emptyArray = [];

//     if (userData.trim() !== "") {
//         emptyArray = suggestions.filter((data) => {
//             return data.toLowerCase().startsWith(userData);
//         });

//         emptyArray = emptyArray.map((data) => {
//             return `<li>${data}</li>`;
//         });

//         searchWrapper.classList.add("active");
//         showSuggestions(emptyArray);

//         let allList = suggBox.querySelectorAll("li");
//         for (let i = 0; i < allList.length; i++) {
//             allList[i].addEventListener("click", (e) => {
//                 e.stopPropagation(); // Prevent the click event from propagating to the inputBox
//                 select(allList[i].textContent);
//             });
//         }

//         // Show only the relevant card that matches the input
//         showMatchingCard(userData);
//     } else {
//         searchWrapper.classList.remove("active");
//         suggBox.innerHTML = "";
//         // If the search input is empty, show all cards
//         showAllCards();
//     }
// }

// function select(elementText) {
//     inputBox.value = elementText;
//     searchWrapper.classList.remove("active");

//     // Show only the relevant card that matches the input
//     const userInput = inputBox.value.toLowerCase();
//     showMatchingCard(userInput);

//     // Scroll to the selected card
//     const selectedCard = document.getElementById(userInput);
//     if (selectedCard) {
//         selectedCard.scrollIntoView({ behavior: "smooth" });
//     } else {
//         // If no matching card is found, scroll to the search icon
//         icon.scrollIntoView({ behavior: "smooth" });
//     }
// }

// function showSuggestions(list) {
//     let listData = list.length ? list.join('') : "<li>No suggestions found</li>";
//     suggBox.innerHTML = listData;
// }

// function showAllCards() {
//     // Show all cards
//     const cards = document.querySelectorAll(".notecard");
//     cards.forEach((card) => card.style.display = "block");
// }

// function showMatchingCard(userInput) {
//     const cards = document.querySelectorAll(".notecard");

//     cards.forEach((card) => {
//         const cardContent = card.textContent.toLowerCase();
//         const cardId = cardContent.replace(/[^a-zA-Z0-9]/g, ''); // Generate a consistent ID from card content
//         card.id = cardId; // Set the ID of the card

//         if (cardContent.includes(userInput)) {
//             card.style.display = "block";
//         } else {
//             card.style.display = "none";
//         }
//     });

//     // Get the "Search not found" message element
//     const searchNotFound = document.querySelector(".search-not-found");

//     // If no matching card is found, display the message and center it
//     const matchingCards = document.querySelectorAll(".notecard[style='display: block;']");
//     if (matchingCards.length === 0) {
//         searchNotFound.style.display = "block";
//     } else {
//         searchNotFound.style.display = "none";
//     }
// }




// New JavaScript code
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

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
    const userInput = inputBox.value.toLowerCase();
    showMatchingCard(userInput);

    // Scroll to the selected card
    const selectedCard = document.getElementById(userInput);
    if (selectedCard) {
        const cardPosition = selectedCard.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const cardTop = cardPosition.top + scrollTop;
        window.scrollTo({ top: cardTop - 100, behavior: "smooth" }); // Adjust the offset as needed
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









