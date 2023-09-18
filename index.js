document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.testimonial .card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function showCards() {
        cards.forEach((card, index) => {
            if (index >= currentIndex && index < currentIndex + 3) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    function updateButtons() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex + 3 >= cards.length;
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= 3; // Change all three cards at once
            showCards();
            updateButtons();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex + 3 < cards.length) {
            currentIndex += 3; // Change all three cards at once
            showCards();
            updateButtons();
        }
    });

    // Initial display
    showCards();
    updateButtons();
});