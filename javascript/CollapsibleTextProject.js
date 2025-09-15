 document.querySelectorAll('.toggleBtn').forEach(button => {
  button.addEventListener('click', () => {
    const expandable = button.closest('.expandable');
    const extraText = expandable.querySelector('p');

    if (!extraText) return;

    extraText.classList.toggle('show');

    button.textContent = extraText.classList.contains('show')
      ? 'Show Less'
      : 'Show More';
  });
});
