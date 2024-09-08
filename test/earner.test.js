const Earner = require("../src/earner");

it("Happy path: API call gives OK.", async () => {
  let earner = new Earner("2500000", "1");
  let response = await earner.callAPI();

  expect(response.ok).toBe(true);
}, 10000);
