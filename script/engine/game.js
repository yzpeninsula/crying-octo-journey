let Game = function() {
	let o = {
		fps: 30,
		paused: false,
	}
	o.pause = function() {
		o.paused = !o.paused
	}
	o.thingsToDoPerFrame = function() {

	}
	setInterval(function() {
		if (o.paused) {
			return
		}
		o.thingsToDoPerFrame()
	}, (1000 / o.fps))
	return o
}