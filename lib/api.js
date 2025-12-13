// lib/api.js
// Use server-side API_URL for server components
const SERVER_API = process.env.API_URL; // server-only
const CLIENT_API = process.env.NEXT_PUBLIC_API_URL; // client-side

export async function api(path, options = {}, isServer = true) {
  const BASE = isServer ? SERVER_API : CLIENT_API;

  if (!BASE) throw new Error("API_URL is not defined");

  const res = await fetch(BASE + path, {
    cache: "no-store",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });

  if (!res.ok) throw new Error("API error");
  return res.json();
}