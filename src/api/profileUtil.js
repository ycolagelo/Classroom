import { fetchHelper } from "./fetch-util";

export function getProfile() {
  return fetchHelper("/api/user_profile");
}
