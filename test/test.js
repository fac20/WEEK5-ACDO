const test = require("tape");
const supertest = require("supertest");
const router = require("./../router");

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