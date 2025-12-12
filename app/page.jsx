import { api } from "../lib/api";

export default async function Home() {
  const thoughts = await api("/thoughts");

  return (
    <main className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-serif text-accent mb-6">Unsaid Thoughts</h1>

      {thoughts.map(t => (
        <a
          key={t.id}
          href={`/thought/${t.id}`}
          className="card block"
        >
          <p className="whitespace-pre-wrap opacity-80">{t.content.slice(0, 140)}…</p>
        </a>
      ))}

      <a
        href="/submit"
        className="inline-block mt-6 underline opacity-80 hover:text-accent"
      >
        Submit a thought
      </a>
    </main>
  );
}