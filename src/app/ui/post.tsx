import Link from "next/link";

export default function Post({ id, title, author, text, date }: post) {
  return (
    <Link href={`/posts/${id}`}>
      <div className="post-small p-12 max-md:p-4 flex flex-col gap-4 border-b-2 transition-all">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="leading-relaxed overflow-ellipsis overflow-hidden  line-clamp-6 whitespace-wrap">{text}</p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center justify-between gap-2 w-full">
            <div className="flex items-center gap-2">
              <span className="font-medium">{author}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span className="opacity-50">{date}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
