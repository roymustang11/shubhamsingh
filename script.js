const exploreBtn = document.getElementById('explore-btn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');

exploreBtn.addEventListener('click', () => {
    popup.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
});
