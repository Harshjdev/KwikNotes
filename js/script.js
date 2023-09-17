// // New JavaScript code
// const searchWrapper = document.querySelector(".search-input");
// const inputBox = searchWrapper.querySelector("input");
// const suggBox = searchWrapper.querySelector(".autocom-box");
// const icon = searchWrapper.querySelector(".icon");
// let linkTag = searchWrapper.querySelector("a");
// let webLink;

// // Import the suggestions array from your suggestion file
// // import suggestions from '../js/suggestions.js'; // Adjust the path to your suggestion file

// let suggestions = [
//     "Computer Graphics",
//     "Computer Networks",
//     "Data Structures and algorithms",
//     "Software Engineering",
//     "Python",
//     "C++",
//     "C",
//     "java programming",
//     "Javascript",
//     "Maths",
//     "Database Management system",
//     "DBMS",
//     "OOPS",
//     "Information Technology",
//     "Web Development",
// ];

// inputBox.onkeyup = (e) => {
//     let userData = e.target.value.toLowerCase();
//     let emptyArray = [];

//     if (userData.trim() !== "") {
//         // Filter suggestions based on user input (case-insensitive)
//         emptyArray = suggestions.filter((data) => {
//             return data.toLowerCase().includes(userData);
//         });

//         emptyArray = emptyArray.map((data) => {
//             return `<li>${data}</li>`;
//         });

//         searchWrapper.classList.add("active");
//         showSuggestions(emptyArray);

//         let allList = suggBox.querySelectorAll("li");
//         for (let i = 0; i < allList.length; i++) {
//             allList[i].addEventListener("click", (e) => {
//                 e.stopPropagation();
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

// icon.addEventListener("click", () => {
//     const userInput = inputBox.value.toLowerCase();
//     if (userInput.trim() !== "") {
//         select(userInput);
//     }
// });

// function select(elementText) {
//     inputBox.value = elementText;
//     searchWrapper.classList.remove("active");

//     // Show only the relevant cards that match the input
//     const userInput = elementText.toLowerCase();
//     showMatchingCards(userInput);
// }

// function showMatchingCards(userInput) {
//     const cards = document.querySelectorAll(".notecard");

//     cards.forEach((card) => {
//         const cardContent = card.textContent.toLowerCase();
//         const cardId = cardContent.replace(/[^a-zA-Z0-9]/g, ''); // Generate a consistent ID from card content
//         card.id = cardId; // Set the ID of the card

//         if (cardContent.includes(userInput)) {
//             card.style.display = "block";

//             // Scroll to the matching card
//             card.scrollIntoView({ behavior: "smooth" });
//         } else {
//             card.style.display = "none";
//         }
//     });

//     // Get the "Search not found" message element
//     const searchNotFound = document.querySelector(".search-not-found");

//     // If no matching cards are found, display the message and center it
//     const matchingCards = document.querySelectorAll(".notecard[style='display: block;']");
//     if (matchingCards.length === 0) {
//         searchNotFound.style.display = "block";
//     } else {
//         searchNotFound.style.display = "none";
//     }
// }


const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");

import suggestions from '../js/suggestions.js'; // Make sure the path to your suggestions file is correct

inputBox.addEventListener("input", (e) => {
    let userData = e.target.value.toLowerCase();
    let emptyArray = [];

    if (userData.trim() !== "") {
        emptyArray = suggestions.filter((data) => {
            return data.toLowerCase().includes(userData);
        });

        emptyArray = emptyArray.map((data) => {
            return `<li>${data}</li>`;
        });

        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);
    } else {
        searchWrapper.classList.remove("active");
        suggBox.innerHTML = "";
    }
});

icon.addEventListener("click", () => {
    const userInput = inputBox.value.toLowerCase();
    if (userInput.trim() !== "") {
        select(userInput);
    }
});

// ... (previous code)

// ... (previous code)

function select(elementText) {
    inputBox.value = elementText;
    searchWrapper.classList.remove("active");

    // Show only the relevant cards that match the input
    const userInput = elementText.toLowerCase();
    showMatchingCards(userInput);

    // Scroll to the first matching card
    const firstMatchingCard = document.querySelector(".notecard[style='display: block;']");
    if (firstMatchingCard) {
        firstMatchingCard.scrollIntoView({ behavior: "smooth" });
    }
}

// Add this event listener to handle clicks on the suggested keywords
suggBox.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        const selectedKeyword = e.target.textContent;
        select(selectedKeyword);
    }
});

// Add an event listener to the input box to handle Enter key press
inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const userInput = inputBox.value.toLowerCase();
        if (userInput.trim() !== "") {
            select(userInput);
        }
    }
});

// ... (rest of the code remains the same)



function showMatchingCards(userInput) {
    const cards = document.querySelectorAll(".notecard");

    cards.forEach((card) => {
        const cardContent = card.textContent.toLowerCase();
        const cardId = cardContent.replace(/[^a-zA-Z0-9]/g, '');
        card.id = cardId;

        if (cardContent.includes(userInput)) {
            card.style.display = "block";
            card.scrollIntoView({ behavior: "smooth" });
        } else {
            card.style.display = "none";
        }
    });

    const searchNotFound = document.querySelector(".search-not-found");

    const matchingCards = document.querySelectorAll(".notecard[style='display: block;']");
    if (matchingCards.length === 0) {
        searchNotFound.style.display = "block";
    } else {
        searchNotFound.style.display = "none";
    }
}

function showSuggestions(list) {
    let listData = list.length ? list.join('') : "<li>No suggestions found</li>";
    suggBox.innerHTML = listData;
}














