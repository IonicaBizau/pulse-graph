const fs = require('fs');
const Tail = require("tail").Tail

const tail = new Tail(Bloggify.options.input_file);

tail.on('line', str => {
	  console.log(str.toString())
	PulseService.onChange(+str.toString())
});

class PulseService {
  static onChange (val) {

    debugger
    // To be overridden 
  }
}
