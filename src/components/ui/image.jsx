import { cn } from "@/lib/utils";

function Image({ className, fallbackSrc, onError, ...props }) {
  const handleError = (e) => {
    if (fallbackSrc && e.currentTarget.dataset.fallbackApplied !== "true") {
      e.currentTarget.dataset.fallbackApplied = "true";
      e.currentTarget.src = fallbackSrc;
      return;
    }
    e.currentTarget.style.visibility = "hidden";
    onError?.(e);
  };
  return (
    <img
      data-slot="image"
      className={cn(className)}
      onError={handleError}
      {...props}
    />
  );
}

export { Image };
