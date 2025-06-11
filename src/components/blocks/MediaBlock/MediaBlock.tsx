import { Video, Image } from "lucide-react";
import React, { useState, useEffect, useRef, useCallback } from "react";
import YouTube, { YouTubeEvent } from "react-youtube";

function extractYouTubeId(url: string) {
  const regExp =
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : url;
}

export interface MediaItem {
  type: "image" | "video" | "youtube";
  src: string; // For YouTube, this will be the video ID or full URL
  alt?: string;
  caption?: string;
  thumbnail?: string;
}

export interface MediaBlockData {
  customNextInTime?: number;
  items: MediaItem[];
}

interface MediaBlockProps {
  data: MediaBlockData;
}

const COUNTDOWN_SECONDS = 7;

export const MediaBlock = ({ data }: MediaBlockProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countdown, setCountdown] = useState(
    data?.customNextInTime ?? COUNTDOWN_SECONDS
  );
  const [autoplay, setAutoplay] = useState(() => {
    // Read autoplay from localStorage, default true if nothing saved
    const saved = localStorage.getItem("mediaBlockAutoplay");
    return saved !== "false"; // default true
  });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const imageTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const countdownIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const current = data.items[currentIndex];

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % data.items.length);
  }, [data.items.length]);

  const goPrev = () => {
    setCurrentIndex((i) => (i - 1 + data.items.length) % data.items.length);
  };

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []);

  // Save autoplay setting to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("mediaBlockAutoplay", autoplay ? "true" : "false");
  }, [autoplay]);

  // Clear timers on index change or unmount
  useEffect(() => {
    setIsLoaded(false);
    setCountdown(data?.customNextInTime ?? COUNTDOWN_SECONDS);
    if (imageTimeoutRef.current) {
      clearTimeout(imageTimeoutRef.current);
    }
    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
    }
  }, [currentIndex, data?.customNextInTime]);

  // Auto-advance and countdown for images — only if autoplay enabled
  useEffect(() => {
    if (current.type === "image" && autoplay && isVisible) {
      countdownIntervalRef.current = setInterval(() => {
        setCountdown((c) => {
          if (c <= 1) {
            if (countdownIntervalRef.current) {
              clearInterval(countdownIntervalRef.current);
            }
            return 0;
          }
          return c - 1;
        });
      }, 1000);

      imageTimeoutRef.current = setTimeout(
        () => {
          goNext();
        },
        (data?.customNextInTime ?? COUNTDOWN_SECONDS) * 1000
      );

      return () => {
        if (imageTimeoutRef.current) clearTimeout(imageTimeoutRef.current);
        if (countdownIntervalRef.current)
          clearInterval(countdownIntervalRef.current);
      };
    }
  }, [current, autoplay, isVisible, goNext, data?.customNextInTime]);

  // YouTube player options
  const youtubeOpts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 1,
      modestbranding: 1,
      rel: 0,
      fs: 0,
    },
  };

  // Called when YouTube video ends
  const onYouTubeEnd = (event: YouTubeEvent) => {
    goNext();
  };

  // Called when YouTube video is ready
  const onYouTubeReady = (event: YouTubeEvent) => {
    setIsLoaded(true);
    event.target.playVideo();
  };

  return (
    <div ref={containerRef} className="space-y-4">
      <div className="relative rounded-lg overflow-hidden glass">
        {current.type === "image" && (
          <>
            <img
              src={current.src}
              alt={current.alt || ""}
              className={`w-full h-auto max-h-screen object-contain transition-all duration-500 ${
                isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
              onLoad={() => setIsLoaded(true)}
            />
            {/* Countdown overlay + autoplay toggle */}
            {isLoaded && current.type === "image" && (
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white text-xs rounded px-2 py-1 select-none pointer-events-auto flex flex-col items-end space-y-1">
                {autoplay && countdown > 0 ? (
                  <div className="flex items-center space-x-1">
                    <div>Next in {countdown} sec</div>
                    <button
                      className="underline hover:text-red-400 text-[10px]"
                      onClick={() => {
                        // Stop autoplay
                        setAutoplay(false);
                        if (imageTimeoutRef.current)
                          clearTimeout(imageTimeoutRef.current);
                        if (countdownIntervalRef.current)
                          clearInterval(countdownIntervalRef.current);
                      }}
                    >
                      Stop autoplay
                    </button>
                  </div>
                ) : (
                  <button
                    className="underline hover:text-green-400 text-[10px]"
                    onClick={() => {
                      setAutoplay(true);
                      setCountdown(10); // reset countdown
                    }}
                  >
                    Enable autoplay
                  </button>
                )}
              </div>
            )}
          </>
        )}

        {current.type === "video" && (
          <video
            src={current.src}
            poster={current.thumbnail}
            controls
            className="w-full h-auto max-h-screen object-contain rounded-lg"
            onLoadedData={() => setIsLoaded(true)}
            onEnded={goNext}
          />
        )}

        {current.type === "youtube" && (
          <div className="relative pt-[56.25%] rounded-lg overflow-hidden">
            <YouTube
              videoId={extractYouTubeId(current.src)}
              opts={youtubeOpts}
              onReady={onYouTubeReady}
              onEnd={onYouTubeEnd}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "0.5rem",
              }}
            />
          </div>
        )}

        {!isLoaded && current.type !== "youtube" && (
          <div className="absolute inset-0 bg-muted/20 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-neon-blue border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Navigation Buttons */}
        {data.items.length > 1 && (
          <>
            <button
              onClick={() => {
                if (imageTimeoutRef.current)
                  clearTimeout(imageTimeoutRef.current);
                if (countdownIntervalRef.current)
                  clearInterval(countdownIntervalRef.current);
                goPrev();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-muted/70 rounded-full p-2 hover:bg-muted"
            >
              ◀
            </button>
            <button
              onClick={() => {
                if (imageTimeoutRef.current)
                  clearTimeout(imageTimeoutRef.current);
                if (countdownIntervalRef.current)
                  clearInterval(countdownIntervalRef.current);
                goNext();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-muted/70 rounded-full p-2 hover:bg-muted"
            >
              ▶
            </button>
          </>
        )}
      </div>
      {current.caption && (
        <p className="text-sm text-muted-foreground italic text-center">
          {current.caption}
        </p>
      )}
      {/* Optional: dots indicator */}
      {data.items.length > 1 && (
        <div className="flex justify-center gap-2 mt-2 flex-wrap">
          {(() => {
            const dots: React.ReactNode[] = [];
            const total = data.items.length;
            const range = 5;
            const start = Math.max(0, currentIndex - range);
            const end = Math.min(total - 1, currentIndex + range);

            if (start > 0) {
              dots.push(<span key="start-ellipsis">…</span>);
            }

            for (let i = start; i <= end; i++) {
              const isActive = i === currentIndex;
              let Icon;
              switch (data.items[i].type) {
                case "image":
                  Icon = Image;
                  break;
                default:
                  Icon = Video;
              }

              dots.push(
                <button
                  key={i}
                  onClick={() => {
                    if (imageTimeoutRef.current)
                      clearTimeout(imageTimeoutRef.current);
                    if (countdownIntervalRef.current)
                      clearInterval(countdownIntervalRef.current);
                    setCurrentIndex(i);
                  }}
                  className={`transition-all duration-200 ${
                    isActive
                      ? "text-neon-blue scale-110"
                      : "text-muted-foreground hover:text-foreground opacity-60"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </button>
              );
            }

            if (end < total - 1) {
              dots.push(
                <span className="text-muted-foreground px-1 select-none">
                  …
                </span>
              );
            }

            return dots;
          })()}
        </div>
      )}
    </div>
  );
};
