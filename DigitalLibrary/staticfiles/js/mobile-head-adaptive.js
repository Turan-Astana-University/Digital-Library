document.addEventListener('DOMContentLoaded', function() {
    const menumobileToggle = document.getElementById('menu-mobileToggle');
    const menumobile = document.getElementById('menu-mobile');

    menumobileToggle.addEventListener('click', function() {
        menumobile.classList.toggle('active');
        if (menumobileToggle.textContent==='☰') {
            menumobileToggle.textContent='✕';
        } else {
            menumobileToggle.textContent='☰';
        }
    });

    
});
