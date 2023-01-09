export const signup = (firstname, lastname, email, password, username) => {
  const data = { username: username, password: password, email: email, firstname: firstname, lastname: lastname};
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  const response = fetch("https://reddit-dot-cloud-work-314310.ew.r.appspot.com/auth/signup", options);
  //   const json = await response.json();
  //   if (response.ok) {
  //     localStorage.setItem("authToken", json.token);
  //     return true;
  //   }
  //   return false;
  return response;
}

async function setToken(username, password) {
  const data = { username: username, password: password };
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  const response = await fetch("https://reddit-dot-cloud-work-314310.ew.r.appspot.com/auth/login", options);
  //   const json = await response.json();
  //   if (response.ok) {
  //     localStorage.setItem("authToken", json.token);
  //     return true;
  //   }
  //   return false;
  return response;
}

export default setToken;