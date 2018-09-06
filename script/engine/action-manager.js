let ActionManager = function() {
	let o = {
		keyDowns: {},
		actions: {},
	}
	o.bindAction = function(key, action) {
		o.actions[key] = action
	}
	o.executeActions = function() {
		let keys = Object.keys(o.keyDowns)
		for (let i = 0; i < keys.length; i++) {
			let key = keys[i]
			if (o.keyDowns[key]) {
				o.actions[key]()
			}
		}
	}
	window.addEventListener('keydown', function(event) {
		let k = event.key
		o.keyDowns[k] = true
	})
	window.addEventListener('keyup', function(event) {
		let k = event.key
		o.keyDowns[k] = false
	})
	return o
}