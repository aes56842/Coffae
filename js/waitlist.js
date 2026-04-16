const joinBtn = document.getElementById('joinBtn');

joinBtn.addEventListener('click', () => {
	const email = document.getElementById('email');

	if (!email.value || !email.value.includes('@')) {
		alert('Enter a valid email');
		return;
	}

	window.location.href = 'thankyou.html';
});
