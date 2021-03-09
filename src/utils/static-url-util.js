// /images/google-icon.png
export function getStaticUrl(url) {
  if (process.env.REACT_APP_MODE === "django") {
    return `http://localhost:3000/${url}`;
  }
  return url;
}
