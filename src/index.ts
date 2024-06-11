import { config } from "dotenv";
import { getPlaceAutocomplete } from "./maps-api";
import { PlaceDetails } from "./types";
import { ERRORS } from "./utilities";
import { get } from "http";

config();

export async function getAutoCompleteDetails(
  address: string,
  additionalParams = {}
): Promise<PlaceDetails[]> {
  try {
    return await getPlaceAutocomplete(address, additionalParams);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`${ERRORS.FETCH_FAILED}: ${error.message}`);
    }
    throw new Error(ERRORS.FETCH_FAILED);
  }
}
