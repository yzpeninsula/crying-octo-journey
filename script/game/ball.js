let Ball = function() {
	let image = imageFromPath('../image/ball.png')
	let o = {
		image: image,
		imageWidth: 25,
		imageHeight: 25,
		speedX: 5,
		speedY: 5,
	}

	let ballBody = new p2.Body({
		mass: 5,
		position: positionCanvasToP2(1, 1),
		collisionResponse: true,
	})
	let ballShape = new p2.Circle({
		radius: 25 / 2,
		collisionResponse: true,
	})
	ballBody.addShape(ballShape)
	o.body = ballBody

	o.fire = function() {
		o.body.velocity[0] = speedXCanvasToP2(o.speedX)
		o.body.velocity[1] = speedYCanvasToP2(o.speedY)
	}

	return o
}