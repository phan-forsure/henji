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
    <Link href={`/posts/${id}`}>
      <article className="post-small p-8 max-md:p-4 flex flex-col gap-4 border-b-2 transition-all">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="leading-relaxed overflow-ellipsis overflow-hidden  line-clamp-6 whitespace-wrap">
            {text}
          </p>
        </div>

        <div className="image w-full flex justify-center">
          <Image path={image} />
        </div>

        <div className="flex flex-wrap items-center justify-between text-sm gap-4">
          <div className="flex items-center justify-between gap-2 w-full">
            <div className="flex items-center gap-2">
              <span className="font-medium">{author}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span className="opacity-50">{date}</span>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <div className="comment bg-accent rounded-3xl py-2 px-4 flex items-center gap-2">
              <MessageCircle focusable={true} size={19} />
              <div className="flex items-center h-full">{commentCount}</div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
