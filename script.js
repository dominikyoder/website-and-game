document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("game-board");
    const cards = ["1", "2", "3", "4", "1", "2", "3", "4"];
    let flippedCards = [];
    let matchedCards = 0;

    // Shuffle cards
    cards.sort(() => 0.5 - Math.random());

    // Create the card elements
    cards.forEach(value => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-value", value);
        card.addEventListener("click", flipCard);
        board.appendChild(card);
    });

    // Flip card function
    function flipCard(event) {
        const card = event.target;

        if (flippedCards.length < 2 && !card.classList.contains("flipped")) {
            card.classList.add("flipped");
            card.textContent = card.getAttribute("data-value");
            flippedCards.push(card);

            if (flippedCards.length === 2) {
                setTimeout(checkMatch, 1000);
            }
        }
    }

    // Check for a match
    function checkMatch() {
        const [card1, card2] = flippedCards;

        if (card1.textContent === card2.textContent) {
            matchedCards++;
            if (matchedCards === cards.length / 2) {
                setTimeout(() => alert("You win!"), 500);
            }
        } else {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
            card1.textContent = "";
            card2.textContent = "";
        }

        flippedCards = [];
    }
});
