import request from "../utils/request";
import { _setup, end, setEnv } from "../utils/serverRunner";
import sleep from "../utils/sleep";
import fs from "fs";

jest.setTimeout(15000);

beforeAll(async () => {
  setEnv("MONGO_URI", "mongodb://mongo_db:27017");
  await sleep(4000);
})

afterAll(() => {
  end();
});

describe("GET /tickets/:number", () => {
  it("should respond with status 422", async () => {
    await _setup();

    const malformatted = "malformatted";

    const response = await request.get(`/tickets/${malformatted}`);

    expect(response.status).toBe(422);
  });
});

describe("POST /tickets/", () => {
  it("should respond with status 422", async () => {
    await _setup();

    const response = await request.post('/tickets/', { full_name: 'Test', age: 20, ticket_number: "malformatted" });

    expect(response.status).toBe(422);
  });
});

describe("Usage of Async/Await", () => {
  it("should be used async/await with try/catch instead of .then() and .catch()", async () => {
    const code = fs.readFileSync("./src/app.js", "utf8");

    expect(code.indexOf("async")).toBeGreaterThan(-1);
    expect(code.indexOf("await")).toBeGreaterThan(-1);
    expect(code.indexOf("try")).toBeGreaterThan(-1);
    expect(code.indexOf("catch")).toBeGreaterThan(-1);

    expect(code.indexOf(".then(product")).toBe(-1);
    expect(code.indexOf(".catch(")).toBe(-1);
  });
});
