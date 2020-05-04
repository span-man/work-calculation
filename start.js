let connect = require("connect");
let path = require("path");
let serveStatic = require("serve-static");

let app = connect();
let p = path.resolve(__dirname, './dist')
console.log(p)
app.use(serveStatic(p));

app.listen(7722, console.log(111));