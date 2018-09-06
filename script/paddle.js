let Paddle = function() {
	let image = imageFromPath('../image/paddle.png')
	let o = {
		image: image,
		x: 200,
		y: 475,
		speed: 5,
		imageWidth: 100,
		imageHeight: 25,
	}
	o.moveLeft = function() {
		o.x -= o.speed
		o.clamp()
	}
	o.moveRight = function() {
		o.x += o.speed
		o.clamp()
	}
	o.clamp = function() {
		if (o.x < 0) {
			o.x = 0
		}
		if (o.x + o.imageWidth > 500) { // canvas.width === 500
			o.x = 500 - o.imageWidth
		}
	}
	return o
}