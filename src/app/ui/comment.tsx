export default function Comment({ text, date }: comment) {
  return (
    <div className="p-4 rounded-lg shadow-sm bg-accent border-[1px] flex items-center justify-between">
      <p>{text}</p>
      <p className="opacity-50 text-sm">{date.toString().slice(0, 15)}</p>
    </div>
  );
}
