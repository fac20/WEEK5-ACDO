const http = require("http");
const PORT = process.env.port || 3000;

const server = http.createServer((request, response) => {
    response.end("woof");
});

server.listen(PORT, () => console.log(`Woof! Listening on http://localhost:${PORT}`));