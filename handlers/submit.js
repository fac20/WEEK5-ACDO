const fs = require("fs");
const path = require("path");
const db = require("../database/connection");

function submitHandler(request, response) {
    let body = "";
    request.on("data", chunk => {
        body += chunk;
    });
    request.on("end", () => {
        const data = new URLSearchParams(body);
        const name = data.get("name");
        const msgtitle = data.get("msgtitle");
        const message = data.get("message");
        // const date = data.get("date");
        console.log(data)

        const add = async function() {
            await db.query("INSERT INTO users(username) VALUES($1)", [name])//if duplicate values then unique constraint will throw error. Need to have an error block to handle this.
            await db.query("INSERT INTO posts(post_title, text_content, user_id) VALUES($1, $2, (SELECT id FROM users WHERE username = $3))", [msgtitle, message, name])
        }
        add();

        // (if (db.query("SELECT username FROM users WHERE $1"))
        response.writeHead(302, { "location": "/" });
        response.end();
    });
    request.on("error", error => {
        response.writeHead(500, { "content-type" : "text/html" });
        response.end("<h1>B!tch please! You broke the server!!</h1>");
    }) 
    
    
};


module.exports = submitHandler;