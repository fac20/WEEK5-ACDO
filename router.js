//we need handlers for home, public, missing, submit
//also for the model so the server can talk to the database?

const homeHandler = require("./handlers/home");
const publicHandler = require("./handlers/public");
const missingHandler = require("./handlers/missing");
const submitHandler = require("./handlers/submit");

function router(request, response) {
    const url = request.url;
    const method = request.method;

    if (url === "/") {
        homeHandler(request, response);
    } else if (url.includes("public")) {
        publicHandler(request, response);
    } else if (url.includes("submit" && method == "POST")) {
        submitHandler(request, response);
    } else {
        missingHandler(request, response);
    }
}

module.exports = router;