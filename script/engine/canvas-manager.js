// http://www.box2d.org/forum/viewtopic.php?t=8198
let positionP2ToCanvas = function(body) {
	let p2X = body.position[0]
	let p2Y = body.position[1]
	return [p2X, 500 - p2Y]
}
let positionCanvasToP2 = function(x, y) {
	return [x, 500 - y]
}
let speedXCanvasToP2 = function(x) {
	return x * 30 // 30 fps
}
let speedYCanvasToP2 = function(y) {
	return -y * 30
}

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
		o.world.addBody(object.body)
	}
	let world = new p2.World({
		gravity: [0, 0],
	})
	o.world = world
	o.draw = function() {
		o.clear()
		for (let i = 0; i < o.objects.length; i++) {
			let object = o.objects[i]
			o.context.drawImage(object.image, positionP2ToCanvas(object.body)[0], positionP2ToCanvas(object.body)[1], object.imageWidth, object.imageHeight)
		}
	}
	return o
}