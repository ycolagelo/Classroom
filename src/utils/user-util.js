const user = JSON.parse(document.getElementById("user_info").innerHTML);

export function getUser() {
  return user.first_name;
}

export function getUserInitials() {
  if (!user) {
    return null;
  }
  return {
    first: user.first_name[0].toUpperCase(),
    last: user.last_name[0].toUpperCase(),
  };
}

export function isAuthenticated() {
  // const user = getUser();
  return user ? true : false;
}
