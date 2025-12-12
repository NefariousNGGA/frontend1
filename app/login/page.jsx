"use client";

export default function Login() {
  async function login(e) {
    e.preventDefault();
    const form = new FormData(e.target);

    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/admin/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form))
      }
    );

    if (!res.ok) return alert("Invalid login");

    const { token } = await res.json();
    localStorage.setItem("token", token);
    location.href = "/dashboard";
  }

  return (
    <main className="h-screen flex items-center justify-center">
      <form
        onSubmit={login}
        className="bg-zinc-800 p-6 rounded w-80 space-y-4"
      >
        <h1 className="text-xl font-semibold">Admin Login</h1>

        <input
          name="email"
          placeholder="Email"
          className="w-full p-2 bg-zinc-700 rounded"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full p-2 bg-zinc-700 rounded"
        />

        <button className="w-full bg-white text-black py-2 rounded">
          Login
        </button>
      </form>
    </main>
  );
        }
