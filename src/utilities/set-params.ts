import {
  DEFAULT_COUNTRY_SET,
  DEFAULT_LIMIT,
  DEFAULT_TYPEAHEAD,
} from "./constants";
import { setApiKey } from "./set-api-key";

export function setParams(additionalParams = {}) {
  return {
    key: setApiKey(),
    countrySet: DEFAULT_COUNTRY_SET,
    limit: DEFAULT_LIMIT,
    typeahead: DEFAULT_TYPEAHEAD,
    ...additionalParams,
  };
}
