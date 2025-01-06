const exploreBtn = document.getElementById('explore-btn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');

exploreBtn.addEventListener('click', () => {
    popup.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    popup.classList.remove('show');
});

// Close popup when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.remove('show');
    }
});
