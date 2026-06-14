'use client';

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

function applyFallback(el, fallbackSrc) {
  if (!el) return;
  if (fallbackSrc && el.dataset.fallbackApplied !== "true") {
    el.dataset.fallbackApplied = "true";
    el.src = fallbackSrc;
    return;
  }
  el.style.visibility = "hidden";
}

function Image({ className, fallbackSrc, onError, ...props }) {
  const ref = useRef(null);

  const handleError = (e) => {
    applyFallback(e.currentTarget, fallbackSrc);
    onError?.(e);
  };

  // SSR safety: in Next.js these <img> tags ship in the server-rendered HTML,
  // so a 404 can fire its error event before React hydrates and attaches
  // onError — the event is then lost and the image stays broken. On mount,
  // detect an already-failed image (complete + zero natural size) and apply
  // the fallback ourselves.
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) {
      applyFallback(el, fallbackSrc);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <img
      ref={ref}
      data-slot="image"
      className={cn(className)}
      onError={handleError}
      {...props}
    />
  );
}

export { Image };
