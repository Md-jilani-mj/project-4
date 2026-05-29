function searchBooks() {

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let title = card
            .querySelector("h4")
            .innerText
            .toLowerCase();

        let author = card
            .querySelector("p")
            .innerText
            .toLowerCase();

        if (
            title.includes(input) ||
            author.includes(input)
        ) {
            card.style.display = "block";
        } 
        
        else {
            card.style.display = "none";
        }
    });
}