document.addEventListener('DOMContentLoaded', function() {    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    tabButtons.forEach(button => {        button.addEventListener('click', () => {
            const target = button.getAttribute('data-tab');
            tabButtons.forEach(btn => btn.classList.remove('active'));            button.classList.add('active');
            tabContents.forEach(content => {
                if (content.id === target) {                    content.classList.add('active');
                } else {                    content.classList.remove('active');
                }            });
        });    });
});