let Paddle = function() {
	let image = imageFromPath('../image/paddle.png')
	let o = {
		image: image,
		imageWidth: 100,
		imageHeight: 25,
		speed: 5,
		x: 100,
		y: 100,
	}
	o.moveLeft = function() {

	}
	o.moveRight = function() {

	}
	o.stay = function() {

	}
	// o.clamp = function() {
	// 	if (o.x < 0) {
	// 		o.x = 0
	// 	}
	// 	if (o.x + o.imageWidth > 500) { // canvas.width === 500
	// 		o.x = 500 - o.imageWidth
	// 	}
	// }
	return o
}