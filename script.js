// ===== Dark Mode Toggle =====
const darkModeBtn = document.getElementById('darkModeBtn');

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // تغيير أيقونة القمر/الشمس
    if(document.body.classList.contains('dark-mode')){
        darkModeBtn.classList.remove('fa-moon');
        darkModeBtn.classList.add('fa-sun');
    } else {
        darkModeBtn.classList.remove('fa-sun');
        darkModeBtn.classList.add('fa-moon');
    }
});

// ===== Dropdown Menu Hover =====
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(drop => {
    drop.addEventListener('mouseenter', () => {
        const menu = drop.querySelector('.dropdown-menu');
        if(menu) menu.style.display = 'block';
    });
    drop.addEventListener('mouseleave', () => {
        const menu = drop.querySelector('.dropdown-menu');
        if(menu) menu.style.display = 'none';
    });
});

// ===== Form Validation =====
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const message = form.querySelector('#message').value.trim();

        if(!name || !email || !message){
            alert('Please fill in all required fields!');
            e.preventDefault();
            return;
        }

        // Basic email format check
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!email.match(emailPattern)){
            alert('Please enter a valid email address!');
            e.preventDefault();
            return;
        }

        alert('Form submitted successfully!');
    });
});

// ===== Modal / Popup Example =====
function showModal(message){
    // إنشاء عنصر مودال
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <p>${message}</p>
        </div>
    `;
    document.body.appendChild(modal);

    // إغلاق المودال عند الضغط على X
    modal.querySelector('.close-btn').addEventListener('click', () => {
        modal.remove();
    });

    // إغلاق عند الضغط خارج المحتوى
    modal.addEventListener('click', (e) => {
        if(e.target === modal) modal.remove();
    });
}

// مثال على استخدام المودال عند الضغط على زر Banner
const bannerButton = document.querySelector('.banner button');
if(bannerButton){
    bannerButton.addEventListener('click', () => {
        showModal('Welcome to the Professional HTML Project!');
    });
}

// ===== Dynamic Footer Year =====
const footerYear = document.querySelector('footer p');
const currentYear = new Date().getFullYear();
footerYear.textContent = `© ${currentYear} MyProject`;

