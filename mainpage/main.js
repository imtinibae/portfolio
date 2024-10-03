// Fonction pour rediriger vers une autre page
function goToPage(page) {
    window.location.href = page;
}

document.addEventListener('DOMContentLoaded', function() {
    const educationFolder = document.getElementById('education-folder');
    const educationFinder = document.getElementById('education-finder');
    const closeEducationFinder = document.getElementById('close-education-finder');
    const moreInfoButton = document.getElementById('more-info-btn');

    const cardContainer = document.getElementById('card-container');
    const backCard = document.getElementById('back-card');
    const frontCard = document.getElementById('front-card');
    const closeCardButton = document.getElementById('close-card-btn');

    // Quand on clique sur le dossier education
    educationFolder.addEventListener('click', () => {
        educationFinder.style.display = 'block'; 
        
        const rect = educationFolder.getBoundingClientRect();
        educationFinder.style.top = `${rect.top + window.scrollY - educationFinder.offsetHeight}px`;
    });

    // Quand on clique sur le bouton de fermeture
    closeEducationFinder.addEventListener('click', () => {
        educationFinder.style.display = 'none'; // Cacher la fenêtre Finder
    });

    // Quand on clique sur le bouton "Wanna know more about me?"
    moreInfoButton.addEventListener('click', () => {
        cardContainer.style.display = 'block'; // Affiche le conteneur de la carte

        // Position initiale (dos de la carte)
        backCard.style.transform = 'rotateY(0deg)'; 
        frontCard.style.transform = 'rotateY(180deg)'; // Position initiale (face de la carte)

        // Délai avant de faire apparaître la face avant
        setTimeout(() => {
            // Rotation de la carte arrière avant d'afficher la face avant
            backCard.style.transform = 'rotateY(180deg)'; // Retourne la carte pour montrer le dos
            frontCard.style.display = 'block'; // Affiche la face avant

            // Laisse le temps à la carte arrière de se retourner
            setTimeout(() => {
                frontCard.style.transform = 'rotateY(0deg)'; // Tourne la face avant vers l'avant
            }, 300); // Ajuste ce délai selon tes besoins
        }, 800); // Ajuste ce délai selon tes besoins
    });

    // Ajouter un gestionnaire d'événements pour le bouton de sortie
    closeCardButton.addEventListener('click', () => {
        // Masque le conteneur de la carte
        cardContainer.style.display = 'none';
        
        // Réinitialise les transformations des cartes
        backCard.style.transform = 'rotateY(0deg)'; // Position initiale
        frontCard.style.transform = 'rotateY(180deg)'; // Masquer la face avant
        frontCard.style.display = 'none'; // Masque la face avant
    });

    // Gestion des pièces d'échecs pour la section Contact Me
    const pieces = document.querySelectorAll('.piece');
    pieces.forEach(piece => {
        piece.addEventListener('click', () => {
            switch (piece.id) {
                case 'email':
                    window.location.href = 'mailto:tineni0@gmail..com';
                    break;
                case 'linkedin':
                    window.open('https://www.linkedin.com/in/tin%C3%A9ni-baeyens-5908391ab/', '_blank');
                    break;
                case 'github':
                    window.open('https://github.com/imtinibae', '_blank');
                    break;
                default:
                    alert('Contact method not available');
            }
        });
    });

    // Création de lignes dans la fenêtre Finder
    const content = document.querySelector('.content');
    const lineCount = 10; // Nombre total de lignes que tu veux afficher

    for (let i = 0; i < lineCount; i++) {
        const line = document.createElement('div');
        line.className = i % 2 === 0 ? 'line line-gray' : 'line line-white';
        content.appendChild(line);
    }

    // Gestion des tooltips pour la fenêtre Finder
    const tooltips = document.createElement('div');
    tooltips.className = 'tooltip';
    document.body.appendChild(tooltips);

    const paragraphs = document.querySelectorAll('.content p');
    
    paragraphs.forEach(paragraph => {
        let tooltipVisible = false;

        // Affichage du tooltip au survol de la souris (ou clic sur mobile)
        paragraph.addEventListener('mouseenter', function(event) {
            const tooltipText = this.getAttribute('data-tooltip');
            tooltips.textContent = tooltipText;
            tooltips.style.display = 'block';
            tooltips.style.left = `${event.pageX + 10}px`; // Position à droite du curseur
            tooltips.style.top = `${event.pageY + 10}px`; // Position en bas du curseur
        });

        // Quand la souris quitte le paragraphe
        paragraph.addEventListener('mouseleave', function() {
            tooltips.style.display = 'none';
        });

        // Suivi du mouvement de la souris pour le tooltip
        paragraph.addEventListener('mousemove', function(event) {
            tooltips.style.left = `${event.pageX + 10}px`;
            tooltips.style.top = `${event.pageY + 10}px`;
        });

        // Pour les appareils tactiles, on remplace l'événement 'mouseenter' par un 'click'
        paragraph.addEventListener('click', function(event) {
            const tooltipText = this.getAttribute('data-tooltip');

            if (!tooltipVisible) {
                // Afficher le tooltip
                tooltips.textContent = tooltipText;
                tooltips.style.display = 'block';
                tooltips.style.left = `${event.pageX + 10}px`; // Position à droite du tap
                tooltips.style.top = `${event.pageY + 10}px`; // Position en bas du tap
                tooltipVisible = true;
            } else {
                // Cacher le tooltip
                tooltips.style.display = 'none';
                tooltipVisible = false;
            }
        });
    });

    // Si vous souhaitez fermer le tooltip si on appuie en dehors
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.content p')) {
            tooltips.style.display = 'none'; // Cacher le tooltip quand on clique ailleurs
        }
    });
});
