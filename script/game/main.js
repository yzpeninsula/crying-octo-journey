let __main = function() {
	/////
	let circleBody = new p2.Body({
		mass: 5,
		position: [0, 10],
	})
	let circleShape = new p2.Circle({
		radius: 1,
	})
	circleBody.addShape(circleShape)

	let groundBody = new p2.Body({
		mass: 0,
	})
	let groundShpae = new p2.Plane()
	groundBody.addShape(groundShpae)

	let world = new p2.World({
		gravity: [0, -9.82],
	})
	world.addBody(circleBody)
	world.addBody(groundBody)
	/////

	let game = Game()

	let paddle = Paddle()
	let ball = Ball()

	let canvasManager = CanvasManager()
	canvasManager.addObject(paddle)
	canvasManager.addObject(ball)

	let actionManager = ActionManager()
	actionManager.bindPressAction('a', function() {
		paddle.moveLeft()
	})
	actionManager.bindPressAction('d', function() {
		paddle.moveRight()
	})
	actionManager.bindTapAction('s', function() {
		ball.fire()
	})
	actionManager.bindTapAction('p', function() {
		game.pause()
	})

	game.thingsToDoPerFrame = function() {
		actionManager.executePressActions()

		ball.move()

		world.step(1 / game.fps)
		log(circleBody.position[0])
		log(circleBody.position[1])
		log(circleBody.angle)

		

		canvasManager.draw()
	}
}
__main()