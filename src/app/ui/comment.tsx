export default function Comment() {
  return (
    <div className="space-y-6">
      <form className="space-y-4">
        <textarea
          placeholder="Write a comment..."
          className="w-full text-accent-foreground p-4 rounded-lg border border-accent-600 bg-accent focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
          rows={3}
        />
        <button
          type="submit"
          className="px-4 py-2 text-accent-foreground bg-black hover:bg-neutral-900 transition-colors cursor-pointer"
        >
          Post Comment
        </button>
      </form>

      <div className="space-y-4">
        <div className="p-4 rounded-lg shadow-sm bg-accent border-[1px]">
          <p>This is a sample comment.</p>
        </div>
      </div>
    </div>
  );
}
