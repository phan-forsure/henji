import { Loader2 } from "lucide-react";

export default function Spinner() {
  return (
    <div className="spinner flex justify-center ">
      <Loader2 className="animate-spin" size={45} />
    </div>
  );
}
