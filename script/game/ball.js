let Ball = function() {
	let image = imageFromPath('../image/ball.png')
	let o = {
		image: image,
		x: 0,
		y: 0,
		speed: 5,
		imageWidth: 25,
		imageHeight: 25,
	}
	return o
}