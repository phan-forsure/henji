import { fetchPost } from "@/app/lib/data";
import CommentSection from "./CommentSection";
import Image from "@/app/ui/image";
import type { Metadata, ResolvedMetadata } from "next";
import { X } from "lucide-react";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

function TextWithLinks({ text }: { text: string }) {
  // Regular expression to match URLs starting with http:// or https://
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  // Keep track of where we are in the text
  let lastIndex = 0;
  // Array to store our final JSX elements
  const result = [];
  // Variable to store each URL match
  let match;

  // Loop through the text finding all URLs
  while ((match = urlRegex.exec(text)) !== null) {
    // match.index is the position where the URL starts in the text

    // If there's text before this URL, add it
    if (match.index > lastIndex) {
      result.push(text.slice(lastIndex, match.index));
    }

    result.push(
      <a
        key={match.index}
        href={match[0]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        {match[0]}
      </a>
    );

    // Update our position to after this URL
    lastIndex = match.index + match[0].length;
  }

  // If there's any text left after the last URL, add it
  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex));
  }

  return <>{result}</>;
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvedMetadata
): Promise<Metadata> {
  const id = (await params).id;
  const post = await fetchPost(id);

  return {
    title: post[0].post_title,
    description: post[0].post_text,
  };
}

export default async function Post({ id }: { id: string }) {
  const post = await fetchPost(id);

  if (!post[0]) {
    return (
      <div className="p-4 w-full flex flex-wrap items-center py-12">
        <h1 className="text-3xl p-4">
          The post you are looking for does not exist
        </h1>
      </div>
    );
  }

  const { post_title, post_author, post_text, created_at, post_image } =
    post[0];

  return (
    <>
      <article className="post w-full p-12 max-sm:p-4 max-md:px-8 max-sm:py-4 flex flex-col gap-4 border-b-2 shadow-sm bg-sidebar-accent border-[1px] transition-all">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold mb-4 break-words">
            {post_title}
          </h2>
          <p className="leading-relaxed text-lg">
            <TextWithLinks text={post_text} />
          </p>
        </div>

        <div className="image w-full flex justify-center">
          <Image path={post_image} />
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center justify-between gap-2 w-full">
            <div className="flex items-center gap-2">
              <span className="font-medium">{post_author}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span className="opacity-50">
                {created_at.toString().slice(0, 15)}
              </span>
            </div>
          </div>
        </div>
      </article>
      <CommentSection id={id} />
    </>
  );
}
