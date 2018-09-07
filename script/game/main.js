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

		ball.move()

		canvasManager.draw()
	}
}
__main()