const action = Bloggify.pulseWs = Bloggify.actions.ws("pulse", (err, data, cb) => {
	console.log("Connected")
})


// Send data to the client
//action.data(/* ... */)
