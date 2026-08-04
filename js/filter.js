document.addEventListener("DOMContentLoaded", function () {

    const filterInput = document.getElementById("filter-input");
    const noResults = document.getElementById("no-results");

    const cards = document.querySelectorAll(".product-card");

    filterInput.addEventListener("input", function () {

        const query = this.value.toLowerCase().trim();
        let visibleCount = 0;

        cards.forEach(function (card) {

            // Card Title
            const title = card
                .querySelector(".card-title")
                .textContent
                .toLowerCase();

            // Card Description
            const description = card
                .querySelector(".card-description")
                .textContent
                .toLowerCase();

            if (
                title.includes(query) ||
                description.includes(query)
            ) {
                card.style.display = "";
                visibleCount++;

            } else {
                card.style.display = "none";
            }
        });

        if (visibleCount === 0) {
            noResults.style.display = "block";
        } else {
            noResults.style.display = "none";
        }

    });
});