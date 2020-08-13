const db = require("./../database/connection");

function getPostsData(){
    // move db query to models
    let dbStr = ("SELECT * FROM users INNER JOIN posts ON users.id = posts.user_id");
    return db.query(dbStr);
}

module.exports = { getPostsData };