// Fonction pour afficher les projets un par un
function showProjects() {
    const projects = document.querySelectorAll('.project');
    const projectsContainer = document.getElementById('projects');
    projectsContainer.style.visibility = 'visible'; // Rendre le conteneur visible

    // Inverser l'ordre d'affichage des projets
    for (let index = projects.length - 1; index >= 0; index--) {
        const project = projects[index];

        setTimeout(() => {
            project.classList.add('visible'); // Ajoute la classe visible
            
            // Gérer l'affichage du GIF et de la vidéo
            const gifContainer = project.querySelector('.gif-container');
            const videoContainer = project.querySelector('.video-container');
            const projectVideo = project.querySelector('video');

            // Afficher le GIF
            gifContainer.style.display = 'flex';

            // Masquer le GIF après 5 secondes et lancer la vidéo
            setTimeout(() => {
                gifContainer.style.display = 'none'; // Masquer le GIF
                const videoSrc = videoContainer.getAttribute('data-video'); // Récupérer la source de la vidéo
                projectVideo.src = videoSrc; // Définir la source de la vidéo
                projectVideo.play(); // Joue la vidéo
                videoContainer.style.display = 'block'; // Affiche le conteneur de vidéo
            }, 2000); // Délai de 5 secondes
        }, (projects.length - 1 - index) * 400); // Décalage de 400ms entre chaque projet
    }
}
const projectVideo = document.querySelector('#projectVideo');

// Assurez-vous que le son est désactivé au chargement
projectVideo.volume = 0;
projectVideo.muted = true; // Désactive le son par défaut

// Pour garantir que la vidéo reste muette sur mobile
projectVideo.addEventListener('volumechange', () => {
    if (projectVideo.volume > 0 || !projectVideo.muted) {
        projectVideo.volume = 0; // Réinitialiser à zéro
        projectVideo.muted = true; // S'assurer que le son est désactivé
    }
});


// Afficher les projets après un délai de 400ms
setTimeout(showProjects, 400);
