let router = require('./router.js')
let start = require('./server.js')
start.start(router.route);