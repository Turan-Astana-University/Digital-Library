function toggleMenu_lang() {
    const menu = document.getElementById('dropdownMenu-lang');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    const menu2 = document.getElementById('dropdownMenu-profile');
    if (menu2.style.display === 'block') {
        menu2.style.display = 'none';
    }
}
function toggleMenu_profile() {
    const menu = document.getElementById('dropdownMenu-profile');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    const menu2 = document.getElementById('dropdownMenu-lang');
    if (menu2.style.display === 'block') {
        menu2.style.display = 'none';
    }
}

window.onclick = function(event) {
    console.log('hello2');
    if (!event.target.matches('.menu-button')) {
        const dropdowns = document.getElementsByClassName('dropdown-menu');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}