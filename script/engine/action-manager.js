let ActionManager = function() {
	let o = {
		keyPressed: {},
		pressActions: {},
		tapActions: {},
	}

	o.bindPressAction = function(key, action) {
		o.pressActions[key] = action
	}
	o.executePressActions = function() {
		let keys = Object.keys(o.keyPressed)
		for (let i = 0; i < keys.length; i++) {
			let key = keys[i]
			if (o.keyPressed[key]) {
				if (Object.keys(o.pressActions).indexOf(key) !== -1) {
					o.pressActions[key]()
				}
			}
		}
	}
	window.addEventListener('keydown', function(event) {
		let k = event.key
		o.keyPressed[k] = true
	})
	window.addEventListener('keyup', function(event) {
		let k = event.key
		o.keyPressed[k] = false
	})

	o.bindTapAction = function(key, action) {
		o.tapActions[key] = action
	}
	window.addEventListener('keyup', function(event) {
		let k = event.key
		let keys = Object.keys(o.tapActions)
		for (let i = 0; i < keys.length; i++) {
			if (k === keys[i]) {
				o.tapActions[k]()
			}
		}
	})
	return o
}