import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Same crop anchor for both layers so object-cover maps the same bust/face region (pair assets should match framing). */
const OBJECT_POSITION = "50% 12%" as const;

/** Slight zoom on the after layer so subject scale matches the before photo (tune if assets change). */
const AFTER_SCALE = 1.275;

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  /** Combined description for assistive tech */
  comparisonLabel: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
  /** Badge below the image (AI live, etc.) */
  overlay?: React.ReactNode;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  comparisonLabel,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
  overlay,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [pct, setPct] = useState(50);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPct(Math.max(0, Math.min(100, x)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    setFromClientX(e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    draggingRef.current = false;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPct((p) => Math.max(0, p - 5));
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setPct((p) => Math.min(100, p + 5));
    }
    if (e.key === "Home") {
      e.preventDefault();
      setPct(0);
    }
    if (e.key === "End") {
      e.preventDefault();
      setPct(100);
    }
  };

  useEffect(() => {
    const stop = () => {
      draggingRef.current = false;
    };
    window.addEventListener("blur", stop);
    return () => window.removeEventListener("blur", stop);
  }, []);

  return (
    <div className={cn("relative flex w-full justify-center", className)}>
      <div
        ref={containerRef}
        className="relative aspect-square w-[min(92vw,min(34vh,360px))] cursor-ew-resize touch-none overflow-hidden rounded-2xl border-4 border-white shadow-2xl outline-none select-none focus-visible:ring-2 focus-visible:ring-[#74593f] focus-visible:ring-offset-2 sm:w-[min(88vw,min(44vh,420px))] md:w-[min(80vw,min(48vh,460px))] lg:w-[min(38vw,min(58vh,520px))] xl:w-[min(36vw,min(60vh,560px))]"
        aria-label={comparisonLabel}
        tabIndex={0}
        role="slider"
        aria-valuenow={Math.round(pct)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuetext={`Divider at ${Math.round(pct)} percent from the left`}
        aria-orientation="horizontal"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={onKeyDown}
      >
        <img
          src={beforeSrc}
          alt=""
          width={900}
          height={900}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: OBJECT_POSITION }}
          draggable={false}
          loading="eager"
          decoding="async"
        />
        <span className="pointer-events-none absolute bottom-3 left-3 z-[1] rounded bg-black/45 px-2 py-1 font-body text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
          {beforeLabel}
        </span>

        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{ clipPath: `inset(0 0 0 ${pct}%)` }}
        >
          <img
            src={afterSrc}
            alt=""
            width={900}
            height={900}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            style={{
              objectPosition: OBJECT_POSITION,
              transform: `scale(${AFTER_SCALE}) translateX(-8px)`,
              transformOrigin: OBJECT_POSITION,
            }}
            draggable={false}
            loading="eager"
            decoding="async"
          />
        </div>
        <span className="pointer-events-none absolute right-3 bottom-3 z-[2] rounded bg-black/45 px-2 py-1 font-body text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
          {afterLabel}
        </span>

        <div
          className="pointer-events-none absolute top-0 bottom-0 z-[3] w-0.5 bg-white shadow-md"
          style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-1/2 z-[3] flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white/95 shadow-lg"
          style={{ left: `${pct}%` }}
          aria-hidden
        >
          <ChevronsLeftRight className="h-5 w-5 text-[#4e453d]" />
        </div>

        {overlay ? (
          <div className="pointer-events-none absolute bottom-4 left-1/2 z-[4] max-w-[calc(100%-2rem)] -translate-x-1/2 sm:bottom-6">
            {overlay}
          </div>
        ) : null}
      </div>
    </div>
  );
}
