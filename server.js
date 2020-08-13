const http = require("http");
const PORT = process.env.port || 3000;
const router = require("./router");

const server = http.createServer(router);


server.listen(PORT, () => console.log(`Woof! Listening on http://localhost:${PORT}`));

// catch server error here 