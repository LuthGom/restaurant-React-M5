import { Api } from "../../services/api";

export function setUserLocalStorage(user) {
  localStorage.setItem("u", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("u");

  if (!json) {
    return null;
  }

  const user = JSON.parse(json);

  return user ?? null;
}

export async function LoginRequest(email, senha) {
  try {
    const request = await Api.post("login", { email, senha }, {headers: {"Content-Type": "application/json"}});

    return request.data;
  } catch (error) {
    return null;
  }
}
