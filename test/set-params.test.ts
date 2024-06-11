import {
  DEFAULT_COUNTRY_SET,
  DEFAULT_LIMIT,
  DEFAULT_TYPEAHEAD,
} from "../src/utilities/constants";
import { setApiKey } from "../src/utilities/set-api-key";
import { setParams } from "../src/utilities/set-params";

jest.mock("../src/utilities/set-api-key");

describe("setParams", () => {
  beforeEach(() => {
    (setApiKey as jest.Mock).mockReturnValue("mock_api_key");
  });

  it("should return default parameters including the API key", () => {
    const params = setParams();
    expect(params).toEqual({
      key: "mock_api_key",
      countrySet: DEFAULT_COUNTRY_SET,
      limit: DEFAULT_LIMIT,
      typeahead: DEFAULT_TYPEAHEAD,
    });
  });

  it("should merge additional parameters with default parameters", () => {
    const additionalParams = {
      limit: 50,
      countrySet: "NZ",
    };
    const params = setParams(additionalParams);
    expect(params).toEqual({
      key: "mock_api_key",
      countrySet: "NZ",
      limit: 50,
      typeahead: DEFAULT_TYPEAHEAD,
    });
  });

  it("should handle empty additional parameters", () => {
    const params = setParams({});
    expect(params).toEqual({
      key: "mock_api_key",
      countrySet: DEFAULT_COUNTRY_SET,
      limit: DEFAULT_LIMIT,
      typeahead: DEFAULT_TYPEAHEAD,
    });
  });
});
