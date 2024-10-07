document.querySelector('.gallery-container').addEventListener('wheel', function(e) {
    if (e.deltaY !== 0) {
        e.preventDefault();
        this.scrollLeft += e.deltaY;
    }
});
