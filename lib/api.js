const API = process.env.NEXT_PUBLIC_API_URL;

export async function api(path, options = {}) {
  const res = await fetch(API + path, {
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