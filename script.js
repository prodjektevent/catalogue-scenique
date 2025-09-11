function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
function showDetails(product) {
    // ...votre code...
    detailsView.classList.remove('hidden');
    document.body.classList.add('no-scroll'); // Ajoute la classe
    detailsView.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

detailsView.addEventListener('click', e => {
    if (e.target.id === 'close-details') {
        detailsView.classList.add('hidden');
        document.body.classList.remove('no-scroll');  // Retire la classe
    }
});