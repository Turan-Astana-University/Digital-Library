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
