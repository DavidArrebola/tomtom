export type FuzzySearchResponse = {
  summary: {
    query: string;
    queryType: QueryType;
    queryTime: number;
    numResults: number;
    offset: number;
    totalResults: number;
    fuzzyLevel: number;
    geoBias: GeoLocation;
    queryIntent: QueryIntent[];
  };
  results: FuzzySearchResult[];
};

export type FuzzySearchResult = {
  type: string;
  id: string;
  score: number;
  dist: number;
  address: Address;
  position: GeoLocation;
  viewport: {
    topLeftPoint: GeoLocation;
    btmRightPoint: GeoLocation;
  };
};

export type Address = {
  country: string;
  countryCode: string;
  countryCodeISO3: string;
  countrySecondarySubdivision: string;
  countrySubdivision: string;
  countrySubdivisionCode: string;
  countrySubdivisionName: string;
  freeformAddress: string;
  localName: string;
  municipality: string;
  municipalitySubdivision: string;
  postalCode: string;
  streetName: string;
  streetNumber: string;
};

export type GeoLocation = {
  lat: number;
  lon: number;
};

export type QueryType = "NEARBY" | "NON_NEAR";

export type QueryIntent = {
  type: "COORIDNATE" | "NEARBY" | "W3W" | "BOOKMARK";
  details: Object;
};

export type PlaceDetails = {
  placeId: string;
  country: string;
  countryCode: string;
  countryCodeISO3: string;
  countrySecondarySubdivision: string;
  countrySubdivision: string;
  countrySubdivisionCode: string;
  countrySubdivisionName: string;
  freeformAddress: string;
  localName: string;
  municipality: string;
  municipalitySubdivision: string;
  postalCode: string;
  streetName: string;
  streetNumber: string;
};
