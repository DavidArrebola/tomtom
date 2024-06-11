import { ERRORS } from "./error-messages";

export function setApiKey(): string {
  const apiKey = process.env.TOMTOM_API_KEY;
  if (!apiKey) {
    throw new Error(ERRORS.NO_API_KEY);
  }
  return apiKey;
}
