export default function Post() {
  return (
    <div className="post p-8 flex flex-wrap flex-col justify-between">
      <h2 className="text-2xl font-medium">Title</h2>
      <p className="my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        magnam ea necessitatibus aspernatur, illo hic exercitationem quae quas
        vel! Adipisci quibusdam excepturi necessitatibus veritatis aperiam porro
        laboriosam officia doloribus iste?
      </p>
      <div className="info opacity-50 font-semibold flex w-full justify-between">
        <div className="flex justify-between w-[25%]">
          <p>Author</p>
          <p>time ago</p>
        </div>
        <p>views</p>
      </div>
    </div>
  );
}
