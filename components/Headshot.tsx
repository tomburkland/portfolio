import Image from "next/image";
import { User } from "lucide-react";
import { profile } from "@/lib/content";

/**
 * Oval headshot frame for the hero.
 * - Set `profile.headshot` (e.g. "/headshot.jpg") to render a photo.
 * - Left empty, it shows a calm placeholder in the Fog palette.
 * The ellipse is produced by `rounded-[50%]` on a portrait-ratio box;
 * `overflow-hidden` clips the image to the oval.
 */
export default function Headshot() {
  const { headshot, name } = profile;

  return (
    <div className="relative h-[220px] w-[178px] shrink-0 overflow-hidden rounded-[50%] border border-hairline bg-surface sm:h-[248px] sm:w-[198px]">
      {headshot ? (
        <Image
          src={headshot}
          alt={name}
          fill
          sizes="198px"
          priority
          className="object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-b from-surface to-bg text-ink-4">
          <User size={30} strokeWidth={1.5} />
          <span className="eyebrow">Headshot</span>
        </div>
      )}
    </div>
  );
}
