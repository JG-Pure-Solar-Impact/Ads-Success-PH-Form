document.getElementById('campaign-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('https://script.google.com/macros/s/AKfycbx54A5G8QTAbpukuTPg2Lq6jeRQq_GYkUG6cZHZ5rjXwg4UyQYnnocg5N_GUHGpoZUg3w/exec', {  // Use the URL from your Apps Script
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        alert('Form submitted successfully!');
    })
    .catch(error => {
        alert('Error submitting form: ' + error);
    });
});
