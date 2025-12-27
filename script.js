// Dark/Light Mode Toggle
const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Dropdown Menu
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(drop => {
    drop.addEventListener('mouseenter', () => {
        drop.querySelector('.dropdown-menu').style.display = 'block';
    });
    drop.addEventListener('mouseleave', () => {
        drop.querySelector('.dropdown-menu').style.display = 'none';
    });
});

// Form Validation
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', e => {
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const message = form.querySelector('#message').value.trim();
        if(!name || !email || !message){
            alert('Please fill in all required fields!');
            e.preventDefault();
        }
    });
});

// Footer Year Dynamic
const footerYear = document.querySelector('footer p');
const currentYear = new Date().getFullYear();
footerYear.textContent = `© ${currentYear} MyProject`;
