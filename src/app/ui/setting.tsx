export default function Setting({ option }: option) {
  return (
    <div className="option p-8 flex items-center justify-between">
      <p>{option}</p> <input type="checkbox" name="" id="" />
    </div>
  );
}
