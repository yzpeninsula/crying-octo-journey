let log = console.log.bind(console)

let imageFromPath = function(path) {
	let img = new Image()
	img.src = path
	return img
}