"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Spinner from "./spinner";
import { Loader2 } from "lucide-react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ImageComponent({ path }: { path: string | undefined }) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      if (!path) {
        setImageUrl(null);
        return;
      }

      setIsLoading(true);
      try {
        const { data, error } = await supabase.storage
          .from("images")
          .download(path);

        if (error) {
          setError(error.message);
          return;
        }

        if (!data) {
          setError("No image data received");
          return;
        }

        const url = URL.createObjectURL(data);
        setImageUrl(url);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImage();
  }, [path]);

  if (error) {
    console.error("Image error:", error);
    return null;
  }

  if (isLoading)
    return (
      <div className="spinner flex justify-center">
        <Loader2 className="animate-spin" size={25} />
      </div>
    );
  if (!imageUrl) return null;
  return <img src={imageUrl} alt="Post Image" className="rounded-xl" />;
}
