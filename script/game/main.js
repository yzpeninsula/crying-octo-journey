let __main = function() {
	let paddle = Paddle()
	let ball = Ball()

	let canvasManager = CanvasManager()
	canvasManager.addObject(paddle)
	canvasManager.addObject(ball)

	let actionManager = ActionManager()
	actionManager.bindAction('a', function() {
		paddle.moveLeft()
	})
	actionManager.bindAction('d', function() {
		paddle.moveRight()
	})

	setInterval(function() {
		actionManager.executeActions()

		canvasManager.draw()
	}, (1000 / 30))
}
__main()