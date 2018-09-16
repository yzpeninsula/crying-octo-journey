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
		//
		Body.setVelocity(rigidPaddle, {x: -5, y: 0})
	})
	actionManager.bindPressAction('d', function() {
		paddle.moveRight()
		//
		Body.setVelocity(rigidPaddle, {x: 5, y: 0})
	})
	actionManager.bindTapAction('s', function() {
		ball.fire()
		//
		Body.setVelocity(rigidBall, {x: 5, y: 5})
	})
	actionManager.bindTapAction('p', function() {
		game.pause()
	})

	//
	let Engine = Matter.Engine
	let Render = Matter.Render
	let World = Matter.World
	let Bodies = Matter.Bodies
	let Body = Matter.Body

	let engine = Engine.create()
	engine.world.gravity.y = 0

	let render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 500,
			height: 500,
			wireframes: false,
		}
	})

	let rigidBall = Bodies.circle(12.5, 12.5, 12.5, {
		render: {
			sprite: {
				texture: '../image/ball.png',
				xScale: 0.1953125,
				yScale: 0.1953125,
			}
		},
		friction: 0,
		frictionAir: 0,
		restitution: 1,
	})

	let rigidPaddle = Bodies.rectangle(100, 100, 100, 25, {
		render: {
			sprite: {
				texture: '../image/paddle.png',
				xScale: 0.20491803278688525,
				yScale: 0.1953125,
			}
		},
		friction: 0,
		frictionAir: 0,
		restitution: 1,
	})

	let rigidUpWall = Bodies.rectangle(250, 0, 500, 1, {
		isStatic: true,
		friction: 0,
		frictionAir: 0,
		restitution: 1,
	})
	let rigidDownWall = Bodies.rectangle(250, 499, 500, 1, {
		isStatic: true,
		friction: 0,
		frictionAir: 0,
		restitution: 1,
	})
	let rigidLeftWall = Bodies.rectangle(0.5, 250, 1, 500, {
		isStatic: true,
		friction: 0,
		frictionAir: 0,
		restitution: 1,
	})
	let rigidRightWall = Bodies.rectangle(499, 250, 1, 500, {
		isStatic: true,
		friction: 0,
		frictionAir: 0,
		restitution: 1,
	})

	World.add(engine.world, [rigidBall, rigidPaddle, rigidUpWall, rigidDownWall, rigidLeftWall, rigidRightWall])
	Engine.run(engine)
	Render.run(render)
	//

	game.thingsToDoPerFrame = function() {
		actionManager.executePressActions()

		if (!actionManager.keyPressed['a']) {
			if (!actionManager.keyPressed['d']) {
				paddle.stay()
				//
				Body.setVelocity(rigidPaddle, {x: 0, y: 0})
			}
		}

		canvasManager.draw()
	}
}
__main()