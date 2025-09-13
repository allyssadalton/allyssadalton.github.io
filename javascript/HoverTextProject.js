document.querySelectorAll('.hoverTarget').forEach(target => {
  const text = target.nextElementSibling; // assumes hoverText comes right after
  if (!text) return;

  target.addEventListener('mouseenter', () => {
    text.style.display = 'block';
  });

  target.addEventListener('mouseleave', () => {
    text.style.display = 'none';
  });
});
