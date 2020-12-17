const fs = require('fs');
const Tail = require("tail").Tail

const tail = new Tail(Bloggify.options.input_file);

tail.on('line', str => {
	str = str.toString()
  	console.log(str.toString())
	const [val, voltage] = str.split(" ").map(Number)
	PulseService.onChange({
		val,
		voltage
	})
});

class PulseService {
  static onChange (val) {
     Bloggify.pulseWs.data(val)
  }
}

module.exports = PulseService
