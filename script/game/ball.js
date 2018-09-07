let Ball = function() {
	let image = imageFromPath('../image/ball.png')
	let o = {
		image: image,
		x: 0,
		y: 0,
		speedX: 5,
		speedY: 5,
		imageWidth: 25,
		imageHeight: 25,
	}
	o.fired = false
	o.fire = function() {
		o.fired = true
	}
	o.move = function() {
		if (!o.fired) {
			return
		}
		o.x += o.speedX
		o.y += o.speedY
	}
	return o
}