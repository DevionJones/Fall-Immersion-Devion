function formSubmission() {
   document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault()
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");
        if (name && email && message) {
            alert(`Form submitted successfully!\nName: ${name}}\nEmail: ${email}\nMessage: ${message}`);
        } else {
            alert('Please fill all the fields');
        }
    });
});
}
