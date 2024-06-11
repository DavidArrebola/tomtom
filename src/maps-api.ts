import axios from "axios";
import { FuzzySearchResponse, PlaceDetails } from "./types";
import { BASE_URL } from "./utilities/constants";
import { setParams } from "./utilities/set-params";
import { ERRORS } from "./utilities/error-messages";

export async function getPlaceAutocomplete(
  address: string,
  additionalParams = {}
): Promise<PlaceDetails[]> {
  if (!address) throw new Error(ERRORS.NO_SEARCH_DATA);

  try {
    const { data } = await axios.get<FuzzySearchResponse>(
      `${BASE_URL}/${address}.json`,
      {
        params: setParams(additionalParams),
      }
    );

    return data.results.map((result) => {
      const {
        id,
        address: {
          country,
          countryCode,
          countryCodeISO3,
          countrySecondarySubdivision,
          countrySubdivision,
          countrySubdivisionCode,
          countrySubdivisionName,
          freeformAddress,
          localName,
          municipality,
          municipalitySubdivision,
          postalCode,
          streetName,
          streetNumber,
        },
      } = result;
      return {
        placeId: id,
        country,
        countryCode,
        countryCodeISO3,
        countrySecondarySubdivision,
        countrySubdivision,
        countrySubdivisionCode,
        countrySubdivisionName,
        freeformAddress,
        localName,
        municipality,
        municipalitySubdivision,
        postalCode,
        streetName,
        streetNumber,
      };
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`${ERRORS.FETCH_FAILED}: ${error.message}`);
    }
    throw new Error(`${ERRORS.FETCH_FAILED}`);
  }
}
