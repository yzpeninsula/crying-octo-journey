let Paddle = function() {
	let image = imageFromPath('../image/paddle.png')
	let o = {
		image: image,
		imageWidth: 100,
		imageHeight: 25,
		speed: 5,
	}
	o.moveLeft = function() {
		o.body.velocity[0] = -speedXCanvasToP2(o.speed)
	}
	o.moveRight = function() {
		o.body.velocity[0] = speedXCanvasToP2(o.speed)
	}
	o.stay = function() {
		o.body.velocity[0] = 0
	}
	// o.clamp = function() {
	// 	if (o.x < 0) {
	// 		o.x = 0
	// 	}
	// 	if (o.x + o.imageWidth > 500) { // canvas.width === 500
	// 		o.x = 500 - o.imageWidth
	// 	}
	// }

	let paddleBody = new p2.Body({
		mass: 1000,
		position: positionCanvasToP2(200, 475),
		collisionResponse: true,
	})
	let paddleShape = new p2.Box({
		width: 100,
		height: 25,
		collisionResponse: true,
	}) 
	paddleBody.addShape(paddleShape)
	o.body = paddleBody

	return o
}