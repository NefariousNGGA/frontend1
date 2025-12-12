export default function CommentList({ comments }) {
  if (!comments.length) return null;

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-serif text-accent">Comments</h2>
      {comments.map(c => (
        <div key={c.id} className="card">
          <p className="whitespace-pre-wrap">{c.content}</p>
        </div>
      ))}
    </div>
  );
}