const API = process.env.NEXT_PUBLIC_API_URL;

export async function api(path, options = {}) {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const res = await fetch(API + path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` })
    }
  });

  if (res.status === 401) {
    localStorage.removeItem("token");
    location.href = "/login";
  }

  return res.json();
}
