import ReactMarkdown from "react-markdown";
import CommentList from "../../../components/CommentList";
import CommentForm from "../../../components/CommentForm";
import { api } from "../../../lib/api";

export default async function Thought({ params }) {
  const t = await api("/thoughts/" + params.id);

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