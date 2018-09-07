let CanvasManager = function() {
	let o = {
		objects: [],
	}
	o.canvas = document.querySelector('#id-canvas')
	o.context = o.canvas.getContext('2d')
	o.clear = function() {
		o.context.clearRect(0, 0, o.canvas.width, o.canvas.height)
	}
	o.addObject = function(object) {
		o.objects.push(object)
	}
	o.draw = function() {
		o.clear()
		for (let i = 0; i < o.objects.length; i++) {
			let object = o.objects[i]
			o.context.drawImage(object.image, object.x, object.y, object.imageWidth, object.imageHeight)
		}
	}
	o.drawRigidBody = function(body) {
		o.clear()
		let image = imageFromPath('../image/ball.png')

		let x = body.position[0]
		let y = body.position[1]

		o.context.save()
		o.context.translate(x, y)
		o.context.rotate(body.angle)
		o.context.drawImage(image, 0, 0, 25, 25)
		o.context.restore()
	}
	return o
}