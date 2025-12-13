// lib/api.js
const SERVER_API = process.env.API_URL;
const CLIENT_API = process.env.NEXT_PUBLIC_API_URL;

export async function api(path, options = {}, isServer = true) {
  const BASE = isServer ? SERVER_API : CLIENT_API;
  if (!BASE) throw new Error("API_URL not defined");

  const url = BASE.endsWith("/") ? BASE.slice(0, -1) + path : BASE + path;

  const res = await fetch(url, {
    cache: "no-store",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });

  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}