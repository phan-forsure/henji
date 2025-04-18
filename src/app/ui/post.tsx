import Link from "next/link";

import { MessageCircle } from "lucide-react";
import Image from "./image";

export default async function Post({
  id,
  title,
  author,
  text,
  date,
  commentCount,
  image,
}: post) {
  return (
    <Link
      href={`/posts/${id}`}
      className="block bg-accent rounded-xl shadow-sm transition-all mb-6 overflow-hidden"
    >
      <div className="p-6 text-accent-foreground">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold line-clamp-2">{title}</h2>
          <p className="line-clamp-3">{text}</p>

          {image && (
            <div className="rounded-lg overflow-hidden shadow-sm">
              <Image path={image} />
            </div>
          )}

          <div className="flex items-center gap-3 text-sm text-accent-foreground mt-4 opacity-70">
            <span className="font-medium">{author}</span>
            <span className="w-1 h-1 rounded-full"></span>
            <span>{date}</span>
            <span className="w-1 h-1 rounded-full"></span>
            <span className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" />
              {commentCount}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
