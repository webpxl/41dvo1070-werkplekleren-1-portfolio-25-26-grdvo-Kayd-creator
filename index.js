const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check opgeslagen voorkeur
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent = '🌙';
    }
});