const test = require("tape");
const supertest = require("supertest");
const router = require("./../router");

// testing for index.html
test("Home route", t => {
    supertest(router)
      .get("/")
      .expect(200)
      .expect("Content-Type", "text/html")
      .end((err, res) => {
        t.error(err);
        t.equal(res.text.includes("Woofus"), true);
        t.end();
      });
  });

// Test for CSS static page
test("Correctly gets CSS", t => {
    supertest(router)
      .get("/")
      .expect(200)
      .expect("Content-Type", "text/css")
      .end((err, res) => {
        t.error(err);
        t.equal(res.text.includes("body"), true);
        t.end();
      });
  });