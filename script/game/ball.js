let Ball = function() {
	let image = imageFromPath('../image/ball.png')
	let o = {
		image: image,
		imageWidth: 25,
		imageHeight: 25,
		speedX: 5,
		speedY: 5,
		x: 0,
		y: 0,
	}

	o.fire = function() {

	}

	return o
}