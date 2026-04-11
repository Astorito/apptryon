import { useEffect } from "react";

const WIDGET_SCRIPT = "/api/widget";
const TRYON_KEY = "tryon_mmtd5r46_vk0irkw0";

/**
 * Inyecta el script del widget Try Look vía `/api/widget` (misma lógica que la página Demo).
 */
export function useDemoTryOnWidget() {
  useEffect(() => {
    const oldScripts = document.querySelectorAll(
      'script[src*="organic-space-fishstick"], script[src*="tryon-backend-definitivo"]',
    );
    oldScripts.forEach((s) => s.remove());

    const existingScript = document.querySelector(`script[src="${WIDGET_SCRIPT}"]`);
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = WIDGET_SCRIPT;
      script.async = true;
      script.setAttribute("data-tryon-key", TRYON_KEY);
      document.head.appendChild(script);
    }
  }, []);
}
