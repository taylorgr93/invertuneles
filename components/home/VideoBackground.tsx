// components/home/VideoBackground.tsx
import React from "react";

interface VideoBackgroundProps {
  src: string;
  className?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  src,
  className,
}) => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBackground;
