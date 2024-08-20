document.addEventListener('DOMContentLoaded', function() {
    const photosSection = document.getElementById('photos');

    // Exemple de photos ajoutées manuellement
    const photos = [
        'photo1.jpg',
        'photo2.jpg',
        'photo3.jpg',
        'photo4.jpg'
    ];

    photos.forEach(photo => {
        const imgElement = document.createElement('img');
        imgElement.src = photo;
        photosSection.appendChild(imgElement);
    });
});
