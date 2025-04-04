document.getElementById('campaign-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('https://script.google.com/macros/s/your-google-apps-script-url/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        alert('Form submitted successfully! (Matagumpay na naisumite ang form!)');
    })
    .catch(error => {
        alert('Error submitting form: (May error sa pagsusumite ng form): ' + error);
    });
});
