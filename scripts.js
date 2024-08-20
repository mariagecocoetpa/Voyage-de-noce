document.getElementById('uploadForm').onsubmit = function(event) {
    event.preventDefault();

    var file = document.getElementById('file').files[0];
    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'votre-upload-preset');

    fetch('https://api.cloudinary.com/v1_1/votre-cloud-name/image/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Photo téléchargée avec succès!');
        // Vous pouvez mettre à jour la galerie ici
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
};
