
const botaoAvancar = document.getElementById('meuBotao');
const inputEmail = document.getElementById('emailInput');   
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
botaoAvancar.addEventListener('click', () => {
  const email = inputEmail.value.trim();

  if (validateEmail(email)) {
    
    window.location.href = './index2.html'; 
  } else {
    alert('Por favor, digite um email válido antes de avançar.');
    inputEmail.focus();
  }
});
