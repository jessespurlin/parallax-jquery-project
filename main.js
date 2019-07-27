document.ready = function() {
	Particles.init({
    selector: '.background',
    color: '#48F2E3',
    maxParticles: 40,
		connectParticles: true,
		maxDistance: 300,
    minDistance: 200,
    sizeVariations: 30,
		// responsive: [
		// 	{
		// 		breakpoint: 800,
		// 		options: {
		// 			maxParticles: 100,
		// 			color: '#48F2E3',
		// 			connectParticles: true
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 768,
		// 		options: {
		// 			maxParticles: 100,
		// 			color: '#48F2E3',
		// 			connectParticles: true
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 425,
		// 		options: {
		// 			maxParticles: 100,
		// 			connectParticles: true
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 320,
		// 		options: {
		// 			maxParticles: 0 // disables particles.js
		// 		}
		// 	}
		// ]
	});
};
