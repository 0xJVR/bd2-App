function submitPokemonForm() {
    const form = document.getElementById('newPokemonForm');
    const formData = new FormData(form);

    const pokemonData = {
        name: formData.get('name'),
        type: formData.get('type'),
        level: parseInt(formData.get('level'), 10)
    };

    const imageFile = formData.get('image');
    if (imageFile && imageFile.size > 0) {
        const reader = new FileReader();
        reader.onload = function(loadEvent) {
            pokemonData.image = loadEvent.target.result;  // This will be the base64 encoded image
            sendPokemonData(pokemonData);
        };
        reader.readAsDataURL(imageFile);  // Convert image file to base64
    } else {
        sendPokemonData(pokemonData);  // Send without image
    }
}

function sendPokemonData(pokemonData) {
    fetch('/api/pokemon/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pokemonData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Optionally close the modal, clear the form, refresh part of your page, etc.
        $('#addPokemonModal').modal('hide');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}