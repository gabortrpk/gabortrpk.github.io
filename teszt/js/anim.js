let animationOne = lottie.loadAnimation({ 
	container: document.getElementById('animation'), // Required
	path: './js/data.json', // Required
	renderer: 'svg', // Required
	loop: true, // Optional
	autoplay: true, // Optional,
	name: 'bulb'
});