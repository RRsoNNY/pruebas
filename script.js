document.addEventListener('DOMContentLoaded', function() {
    const cvForm = document.getElementById('cvForm');
    const cvPreview = document.getElementById('cvPreview');

    cvForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const experience = document.getElementById('experience').value;

        // Basic validation (can be expanded)
        if (!name || !email || !experience) {
            alert('Por favor, complete todos los campos obligatorios.');
            return;
        }

        // Generate CV HTML content
        let cvHTML = `
            <h2>${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <h3>Experiencia Profesional</h3>
            <p>${experience.replace(/\n/g, '<br>')}</p>
        `;
        // .replace(/\n/g, '<br>') ensures that line breaks in the textarea are rendered as line breaks in HTML

        // Display the generated CV in the preview area
        cvPreview.innerHTML = cvHTML;
    });
});
