function submitGormitiForm() {
    const form = document.getElementById('newGormitiForm');
    const formData = new FormData(form);

    const gormitiData = {
        name: formData.get('name'),
        type: formData.get('type'),
        level: parseInt(formData.get('level'), 10)
    };

    const imageFile = formData.get('image');
    if (imageFile && imageFile.size > 0) {
        const reader = new FileReader();
        reader.onload = function(loadEvent) {
            gormitiData.image = loadEvent.target.result;
            sendGormitiData(gormitiData);
        };
        reader.readAsDataURL(imageFile);
    } else {
        sendGormitiData(gormitiData);
    }
}

function sendGormitiData(gormitiData) {
    fetch('/api/gormiti/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(gormitiData)
    })
    .then(response => {
        if (response.status === 201) {
            console.log('Success:', response);
            window.location.reload();
        } else if (response.status === 500) {
            console.error('Server Error:', response);
            alert('Error: The gormiti already exists!');
        }
        return response.json();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}