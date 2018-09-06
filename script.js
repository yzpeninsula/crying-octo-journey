let log = console.log.bind(console)

let imageFromPath = function(path) {
	let img = new Image()
	img.src = path
	return img
}

let Paddle = function() {
	let image = imageFromPath('paddle.png')
	let o = {
		image: image,
		x: 200,
		y: 475,
		speed: 5,
		imageWidth: 100,
		imageHeight: 25,
	}
	o.moveLeft = function() {
		o.x -= o.speed
		o.clamp()
	}
	o.moveRight = function() {
		o.x += o.speed
		o.clamp()
	}
	o.clamp = function() {
		if (o.x < 0) {
			o.x = 0
		}
		if (o.x + o.imageWidth > 500) { // canvas.width === 500
			o.x = 500 - o.imageWidth
		}
	}
	return o
}

let __main = function() {
	let canvas = document.querySelector('#id-canvas')
	let context = canvas.getContext('2d')

	let paddle = Paddle()

	let leftDown = false
	let rightDown = false

	let keyDowns = {}
	let actions = {}

	let bindAction = function(key, action) {
		actions[key] = action
	}

	let executeActions = function() {
		let keys = Object.keys(keyDowns)
		for (let i = 0; i < keys.length; i++) {
			let key = keys[i]
			if (keyDowns[key]) {
				actions[key]()
			}
		}
	}

	bindAction('a', function() {
		paddle.moveLeft()
	})
	bindAction('d', function() {
		paddle.moveRight()
	})

	window.addEventListener('keydown', function(event) {
		let k = event.key
		keyDowns[k] = true
	})
	window.addEventListener('keyup', function(event) {
		let k = event.key
		keyDowns[k] = false
	})

	setInterval(function() {
		executeActions()

		context.clearRect(0, 0, canvas.width, canvas.height)
		context.drawImage(paddle.image, paddle.x, paddle.y, paddle.imageWidth, paddle.imageHeight)
	}, (1000 / 30))
}
__main()
