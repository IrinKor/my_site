// Подставить текущий год
document.getElementById('year').textContent = new Date().getFullYear();

// Тема: переключение светлая/тёмная
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  // Можно сохранить выбор в localStorage:
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
// Восстановим тему при загрузке
if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');

// Простая валидация формы подписки
const form = document.getElementById('subscribeForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  if (name.length < 2) {
    message.style.color = 'crimson';
    message.textContent = 'Пожалуйста, укажите имя (минимум 2 символа).';
    return;
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    message.style.color = 'crimson';
    message.textContent = 'Введите корректный email.';
    return;
  }
  // Здесь можно отправить данные на сервер (fetch). Для демо — просто подтверждение:
  message.style.color = 'green';
  message.textContent = `Спасибо, \({name}! Подписка оформлена на \){email}.`;
  form.reset();
});