const ws = require("bloggify-ws");

debugger
const socket = ws("pulse", (err, data, cb) => {
  document.write(String(data))
})
