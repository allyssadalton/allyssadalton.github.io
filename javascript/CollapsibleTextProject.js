// CollapsibleTextProject.js
document.querySelectorAll('.toggleBtn').forEach(button => {
  button.addEventListener('click', () => {
    const expandable = button.closest('.expandable');
    const extraText = expandable.querySelector('p');

    if (!extraText) return;

    extraText.classList.toggle('extraTextHidden');

    button.textContent = extraText.classList.contains('extraTextHidden')
      ? 'Show More'
      : 'Show Less';
  });
});