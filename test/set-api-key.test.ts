import { ERRORS } from "../src/utilities/error-messages";
import { setApiKey } from "../src/utilities/set-api-key";

describe("setApiKey", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("should return the API key from environment variables", () => {
    process.env.TOMTOM_API_KEY = "test_api_key";
    const apiKey = setApiKey();
    expect(apiKey).toBe("test_api_key");
  });

  it("should throw an error if the API key is not found in environment variables", () => {
    delete process.env.TOMTOM_API_KEY;
    expect(() => setApiKey()).toThrow(ERRORS.NO_API_KEY);
  });
});
