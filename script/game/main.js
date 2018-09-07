let __main = function() {
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

		if (!actionManager.keyPressed['a']) {
			if (!actionManager.keyPressed['d']) {
				paddle.stay()
			}
		}

		canvasManager.world.step(1 / game.fps)

		canvasManager.draw()
	}
}
__main()