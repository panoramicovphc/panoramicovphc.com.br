document.addEventListener('DOMContentLoaded', function() {
  const welcomeMessage = document.getElementById('welcome-message');
  welcomeMessage.textContent = 'Bem-vindo ao Panorâmico Vila Prudente Home Club!';

  const toggleButton = document.getElementById('toggle-info');
  toggleButton.addEventListener('click', function() {
    const infoSection = document.getElementById('info-section');
    infoSection.classList.toggle('hidden');
    toggleButton.textContent = infoSection.classList.contains('hidden') ? 'Mostrar Mais Informações' : 'Mostrar Menos Informações';
  });
});
