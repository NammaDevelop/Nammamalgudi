import { cn } from "@/lib/utils";

function Card({ className, ...props }) {
  return (
    <div
      data-slot="card"
      className={cn(
        "relative overflow-hidden rounded-2xl bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    />
  );
}

function CardMedia({ className, ...props }) {
  return (
    <div
      data-slot="card-media"
      className={cn("absolute inset-0", className)}
      {...props}
    />
  );
}

function CardOverlay({ className, ...props }) {
  return (
    <div
      data-slot="card-overlay"
      className={cn(
        "absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent pointer-events-none",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }) {
  return (
    <div
      data-slot="card-content"
      className={cn("relative p-5 sm:p-6", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }) {
  return (
    <h3
      data-slot="card-title"
      className={cn("font-serif text-2xl sm:text-3xl font-semibold leading-tight text-white", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-sm sm:text-base text-white/85 mt-2 leading-snug", className)}
      {...props}
    />
  );
}

export { Card, CardMedia, CardOverlay, CardContent, CardTitle, CardDescription };
