// Select all the anchor links
const links = document.querySelectorAll('aside a');

// Select the iframe
const iframe = document.getElementById('recipe-frame');

// Add click event listener to each link
links.forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevent default link behavior
        event.preventDefault();

        // Update the iframe src with the href of the clicked link
        iframe.src = this.href;
    });
});