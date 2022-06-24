const toTop = document.querySelector('.toTop');

window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
	if (window.pageYOffset > 250) {
		if (!toTop.classList.contains('entradaBotao')) {
			toTop.classList.remove('saidaBotao');
			toTop.classList.add('entradaBotao');
			toTop.style.display = 'block';
		}
	} else {
		if (toTop.classList.contains('entradaBotao')) {
			toTop.classList.remove('entradaBotao');
			toTop.classList.add('saidaBotao');
			setTimeout(function () {
				toTop.style.display = 'none';
			}, 250);
		}
	}
}

toTop.addEventListener('click', backToTop);

function backToTop() {
	window.scrollTo(0, 0);
}
