const fs = require("fs");
const path = require("path");
const db = require("./../database/connection");


function getPostsHandler(request, response) {
  // move db query to models
  let dbStr = ("SELECT * FROM users INNER JOIN posts ON users.id = posts.user_id");
  db.query(dbStr)
  .then((result) => {
    const users = result.rows;
    response.writeHead(200, { "content-type": "text/html" });
    response.end(`${JSON.stringify(users)}`);
  });
};

module.exports = getPostsHandler;