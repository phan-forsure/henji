export default function Post({ title, author, text, date }: post) {
  return (
    <div className="post p-8 max-md:p-4 flex flex-wrap flex-col justify-between">
      <h2 className="text-2xl font-medium">{title}</h2>
      <p className="my-4">{text}</p>
      <div className="info opacity-50 font-semibold flex w-full justify-between">
        <div className="flex justify-between">
          <p className="px-4">{author}</p>
          <p className="px-4">{date}</p>
        </div>
        {/* <p>likes</p> */}
      </div>
    </div>
  );
}
