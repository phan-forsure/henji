export default function Post({ title, author, text, date }: post) {
  return (
    <div className="post p-6 max-md:p-4 flex flex-col gap-4 border-b-2 last:border-b-0">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="leading-relaxed">{text}</p>
      </div>
      
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="font-medium">{author}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          <span className="opacity-50">{date}</span>
        </div>
      </div>
    </div>
  );
}
