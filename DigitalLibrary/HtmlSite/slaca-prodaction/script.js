document.addEventListener('DOMContentLoaded', function() {
    // Получаем все кнопки вкладок
    const tabButtons = document.querySelectorAll('.tab-button');
    // Получаем все содержимое вкладок
    const tabContents = document.querySelectorAll('.tab-content');

    // Добавляем обработчик клика для каждой кнопки вкладки
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-tab');

            // Удаляем активный класс у всех кнопок
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Добавляем активный класс к нажатой кнопке
            button.classList.add('active');

            // Удаляем активный класс у всех вкладок и прячем их
            tabContents.forEach(content => {
                content.classList.remove('active');
                content.style.display = 'none';
            });

            // Добавляем активный класс к соответствующей вкладке и показываем её
            const activeTab = document.getElementById(target);
            activeTab.classList.add('active');
            activeTab.style.display = 'block';
        });
    });

    // Активируем первую вкладку по умолчанию
    if (tabButtons.length > 0) {
        tabButtons[0].click();
    }
});
