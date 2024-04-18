function submitInvizimalForm() {
    const form = document.getElementById('newInvizimalForm');
    const formData = new FormData(form);

    const invizimalData = {
        name: formData.get('name'),
        type: formData.get('type'),
        level: parseInt(formData.get('level'), 10)
    };

    const imageFile = formData.get('image');
    if (imageFile && imageFile.size > 0) {
        const reader = new FileReader();
        reader.onload = function(loadEvent) {
            invizimalData.image = loadEvent.target.result;
            sendInvizimalData(invizimalData);
        };
        reader.readAsDataURL(imageFile);
    } else {
        sendInvizimalData(invizimalData);
    }
}

function sendInvizimalData(invizimalData) {
    fetch('/api/invizimal/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(invizimalData)
    })
    .then(response => {
        if (response.status === 201) {
            console.log('Success:', response);
            window.location.reload();
        } else if (response.status === 500) {
            console.error('Server Error:', response);
            alert('Error: The invizimal already exists!');
        }
        return response.json();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}