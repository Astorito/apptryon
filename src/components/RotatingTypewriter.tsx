import { useEffect, useState } from "react";

const phrases = [
  "More Sales",
  "Fewer Returns",
  "Higher Conversion",
];

export default function RotatingTypewriter({
  speed = 50,
  pause = 1200,
}: {
  speed?: number;
  pause?: number;
}) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, speed / 2);
    } else {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, speed, pause]);

  return <span>{text}<span className="animate-pulse">|</span></span>;
}
