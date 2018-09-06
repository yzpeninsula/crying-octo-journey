let __main = function() {
	let paddle = Paddle()

	let canvasManager = CanvasManager()
	canvasManager.addObject(paddle)

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