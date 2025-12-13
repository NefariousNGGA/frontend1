const API = process.env.NEXT_PUBLIC_API_URL;

export async function api(path, options = {}) {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const res = await fetch(`${API}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...(options.headers || {})
    }
  });

  if (!res.ok) {
    if (res.status === 401) {
      localStorage.removeItem("token");
      location.href = "/login";
    }
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}