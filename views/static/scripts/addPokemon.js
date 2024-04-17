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
            const base64Image = loadEvent.target.result.split(',')[1];
            pokemonData.image = base64Image;
            sendPokemonData(pokemonData);
        };
        reader.readAsDataURL(imageFile);
    } else {
        sendPokemonData(pokemonData);
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
    .then(response => {
        if (response.status === 201) {
            console.log('Success:', response);
            window.location.reload();
        } else if (response.status === 500) {
            console.error('Server Error:', response);
            alert('Error: The pokemon already exists!');
        }
        return response.json();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}