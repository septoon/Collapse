const btn = document.getElementById('btn');

const text = document.getElementById('text-wrapper');


const wrapper = document.getElementById('wrapper');
wrapper.appendChild(text);
btn.addEventListener('click', () => {
  if (text.classList.contains('hide')) {
    text.classList.remove('hide');
    text.classList.add('active');
  } else {
    text.classList.remove('active');
    text.classList.add('hide');
  }
});

const copyButton = document.getElementById('copy');
// Копирование в буфер нажатием на "Copy" (не работает)
copyButton.addEventListener('click', () => {
  const copyText = document.getElementById('text');
  if (document.selection) {
    const range = document.body.createTextRange();
    range.moveToElementText(copyText);
    range.select();
  } else if (window.getSelection) {
    const range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().addRange(range);
  }
  document.execCommand('copy');
});
