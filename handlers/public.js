const fs = require("fs");
const path = require("path");

//check what file is being requested
const types = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    jpg: "image/jpeg",
    ico: "image/x-icon",
};

function publicHandler(request, response){
    const url = request.url;
    console.log(url);
    const filePath = path.join(__dirname, "../public/index.html");
    fs.readFile(filePath, (error, file) => {
        if (error){
            console.error(error);
            response.writeHead(404, {"content-type" : "text/html"});
            response.end("<h1>Not Found</h1>");
        } else {
          response.writeHead(200, {"content-type" : "text/html"});
          response.end(file);
        }
});

}

module.exports = publicHandler;