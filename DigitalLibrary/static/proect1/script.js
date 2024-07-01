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
function showTab(tabId) {
    const tabs = document.querySelectorAll('.notification-content-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}

// Пример обновления количества уведомлений
function updateCounts(updates1, social2, important3) {
    document.getElementById('updates1-count').textContent = updates1;
    document.getElementById('social2-count').textContent = social2;
    document.getElementById('important3-count').textContent = important3;
}

// Инициализация начальных значений
updateCounts(5, 3, 1);
showTab('updates1');  // Показываем первую вкладку по умолчанию
// Скрывать или показывать полосу прокрутки в зависимости от наличия прокрутки
function toggleScrollbar() {
  var container = document.querySelector('.containerOUT');
  if (container.scrollHeight > container.clientHeight) {
    container.classList.add('no-scrollbar');
  } else {
    container.classList.remove('no-scrollbar');
  }
}

function limitTextarea(element, maxLines, maxLength) {
  const lines = element.value.split('\n');
  const linesLength = lines.length;
  const currentLength = element.value.length;

  if (linesLength > maxLines || currentLength > maxLength) {
    let croppedText = '';
    for (let i = 0; i < maxLines; i++) {
      if (croppedText.length + lines[i].length <= maxLength) {
        croppedText += lines[i] + '\n';
      } else {
        const remainingChars = maxLength - croppedText.length;
        croppedText += lines[i].substring(0, remainingChars);
        break;
      }
    }
    element.value = croppedText.trim();
  }
}
function validateNumber(input) {
    // Удаляем все нецифровые символы из введенного значения
    input.value = input.value.replace(/\D/g, '');

    // Обрезаем значение до 11 символов
    if (input.value.length > 11) {
        input.value = input.value.slice(0, 11);
    }
}
