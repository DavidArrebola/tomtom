import { config } from "dotenv";
import { getPlaceAutocomplete } from "./maps-api";
import { PlaceDetails } from "./types";
import { ERRORS } from "./utilities/error-messages";

config();

export async function getAutoCompleteDetails(
  address: string,
  additionalParams = {}
): Promise<PlaceDetails[]> {
  try {
    const res = await getPlaceAutocomplete(address, additionalParams);
    return res;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`${ERRORS.FETCH_FAILED}: ${error.message}`);
    }
    throw new Error(ERRORS.FETCH_FAILED);
  }
}
