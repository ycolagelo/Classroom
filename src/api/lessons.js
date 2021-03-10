import { fetchHelper } from "./fetch-util";

export function getLessons() {
  return fetchHelper("/api/lessons");
}
