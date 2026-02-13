import * as chai from "chai";
import { request } from "chai-http";
import app from "../src/server.js";
const { expect } = chai;

let server;

before(function (done) {
  // Start the app on a test port
  server = app.listen(3001, () => done());
});

after(function (done) {
  if (server && server.listening) {
    server.close(done);
  } else {
    done();
  }
});

describe("Server Tests", () => {
  describe("GET /", () => {
    it("should return HTML home page", (done) => {
      request
        .agent(server)
        .get("/")
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.status).to.equal(200);
          expect(res.headers["content-type"]).to.match(/html/);
          done();
        });
    });
  });

  describe("GET /api", () => {
    it("should return API JSON with hello message", (done) => {
      request
        .agent(server)
        .get("/api")
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an("object");
          expect(res.body.message).to.equal("Hello from the API endpoint!");
          done();
        });
    });
  });

  describe("GET /healthz", () => {
    it("should return healthy status JSON", (done) => {
      request
        .agent(server)
        .get("/healthz")
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an("object");
          expect(res.body.status).to.equal("ok");
          done();
        });
    });
  });
});

