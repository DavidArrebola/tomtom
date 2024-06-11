import { config } from "dotenv";
import { describe } from "@jest/globals";
import { getPlaceAutocomplete } from "../src/maps-api";
import { getAutoCompleteDetails } from "../src";
import { DEFAULT_COUNTRY_SET, ERRORS } from "../src/utilities";

config();

describe("Tomtom Places E2E Tests", () => {
  let apiKey: string = "";
  beforeEach(() => {
    if (process.env.TOMTOM_API_KEY) {
      apiKey = process.env.TOMTOM_API_KEY;
    }
    if (!apiKey) {
      throw new Error("No API key found");
    }
  });

  describe("getAutoCompleteDetails", () => {
    it("returns a promise", () => {
      const res = getAutoCompleteDetails("Charlotte Street");
      expect(res).toBeInstanceOf(Promise);
    });

    it("can fetch from the autocomplete api", async () => {
      const res = await getAutoCompleteDetails("Charlotte Street");
      const firstRes = res[0];
      expect(firstRes).toHaveProperty("placeId");
      expect(firstRes).toHaveProperty("streetNumber");
      expect(firstRes).toHaveProperty("countryCode");
      expect(firstRes).toHaveProperty("country");
      expect(firstRes).toHaveProperty("freeformAddress");
      expect(firstRes).toHaveProperty("municipality");
    });

    it("should not contain results outside of default country", async () => {
      const res = await getAutoCompleteDetails("Charlotte Street");
      const hasOnlyDefaultCountryResults = res.every(
        (item) => item.countryCode === DEFAULT_COUNTRY_SET
      );
      expect(hasOnlyDefaultCountryResults).toBe(true);
    });

    it("should handle additional params", async () => {
      const res = await getAutoCompleteDetails("Main Street", {
        limit: 1,
      });
      expect(res.length).toBe(1);
    });
  });

  describe("getPlaceAutocomplete", () => {
    it("handles no results", async () => {
      const res = await getPlaceAutocomplete("asfasffasfasafsafs");
      expect(res).toStrictEqual([]);
    });

    it("handles empty address", async () => {
      expect(getPlaceAutocomplete("")).rejects.toThrow(ERRORS.NO_SEARCH_DATA);
    });
  });
});
