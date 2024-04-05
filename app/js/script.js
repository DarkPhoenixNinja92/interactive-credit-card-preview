const form = document.querySelector('.card__input-form');
const btn = document.getElementById('btn');
const confirmBtn = document.getElementById('confirm-btn');
const complete = document.querySelector('.completed');

btn.addEventListener('click', () => {
	form.style.display = 'none';
	complete.classList.add('completed-show');
});

form.addEventListener('submit', (e) => {
	e.preventDefault();
});

confirmBtn.addEventListener('click', () => {
	form.style.display = 'initial';
	complete.classList.remove('completed-show');
});