'use client';

interface VideoBackgroundProps {
  src: string;
  posterSrc?: string;
}

export function VideoBackground({ src, posterSrc }: VideoBackgroundProps) {
  return (
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={posterSrc}
        className="h-full w-full object-cover"
        aria-hidden="true"
        // Performance optimizations
        disablePictureInPicture
        disableRemotePlayback
      >
        <source src={src} type="video/mp4" />
      </video>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
