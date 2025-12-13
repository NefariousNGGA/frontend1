import ReactMarkdown from "react-markdown";
import CommentList from "../../../components/CommentList";
import CommentForm from "../../../components/CommentForm";
import { api } from "../../../lib/api";

export default async function Thought({ params }) {
  let t = null;
  let error = null;

  try {
    t = await api("/thoughts/" + params.id, {}, true); // server fetch
  } catch (err) {
    console.error("Thought page fetch error:", err);
    error = err.message;
  }

  if (error) return <div className="max-w-2xl mx-auto p-6">Error: {error}</div>;
  if (!t) return <div className="max-w-2xl mx-auto p-6">Thought not found</div>;

  return (
    <main className="max-w-2xl mx-auto p-6 space-y-6">
      <article className="card prose prose-invert">
        <ReactMarkdown>{t.content}</ReactMarkdown>
      </article>

      <CommentList comments={t.comments} />
      <CommentForm thoughtId={t.id} />
    </main>
  );
}