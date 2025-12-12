"use client";

export default function Submit() {
  async function submit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    await fetch(process.env.NEXT_PUBLIC_API_URL + "/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    alert("Submitted! Awaiting approval.");
    e.target.reset();
  }

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-serif text-accent mb-4">Submit a Thought</h1>

      <form onSubmit={submit} className="space-y-4">
        <input
          name="author"
          placeholder="Your name (optional)"
          className="input"
        />

        <textarea
          name="content"
          required
          placeholder="Write freely… Markdown supported"
          className="input h-48"
        />

        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </main>
  );
}