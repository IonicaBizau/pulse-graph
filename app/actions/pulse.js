const action = Bloggify.actions.ws("pulse", (err, data, cb) => {
	console.log("Connected")
})

Bloggify.ready(() => {
	Bloggify.services.pulse.onChange = newVal => {
		action.data(newVal)
	}
})


// Send data to the client
//action.data(/* ... */)
