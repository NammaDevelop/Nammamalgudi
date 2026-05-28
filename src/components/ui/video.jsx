import { cn } from "@/lib/utils";

function Video({
  className,
  sources = [],
  poster,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = "metadata",
  children,
  ...props
}) {
  return (
    <video
      data-slot="video"
      className={cn(className)}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={preload}
      poster={poster}
      {...props}
    >
      {sources.map((s, i) => (
        <source key={i} src={s.src} type={s.type || "video/mp4"} />
      ))}
      {children}
    </video>
  );
}

export { Video };
