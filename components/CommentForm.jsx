"use client";

export default function CommentForm({ thoughtId }) {
  async function submit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    await fetch(process.env.NEXT_PUBLIC_API_URL + "/comments/" + thoughtId, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    e.target.reset();
    location.reload();
  }

  return (
    <form onSubmit={submit} className="space-y-3 mt-4">
      <textarea
        name="content"
        required
        placeholder="Write a comment…"
        className="input h-24"
      />
      <button className="button">Comment</button>
    </form>
  );
}