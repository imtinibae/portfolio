// Sélectionne le dossier et la fenêtre Finder
const folder1 = document.getElementById('folder1');
const finder1 = document.getElementById('finder1');
const closeBtn = document.querySelector('.close-btn');

// Quand on clique sur le dossier
folder1.addEventListener('click', () => {
    finder1.style.display = 'block'; // Afficher la fenêtre Finder
});

// Quand on clique sur le bouton de fermeture
closeBtn.addEventListener('click', () => {
    finder1.style.display = 'none'; // Cacher la fenêtre Finder
});
