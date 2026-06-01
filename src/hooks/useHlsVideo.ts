import { useEffect, useRef } from "react";
import Hls from "hls.js";

/**
 * Attaches an HLS stream to a video element using hls.js when supported,
 * falling back to native HLS playback (Safari) otherwise.
 */
export function useHlsVideo(src: string) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | undefined;

    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true, lowLatencyMode: false });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Native HLS support (Safari / iOS).
      video.src = src;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }

    return () => {
      hls?.destroy();
    };
  }, [src]);

  return videoRef;
}
