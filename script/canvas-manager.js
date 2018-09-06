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
	return o
}