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
    <div
      className={`relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-screen ${className}`}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Optional: overlay semitransparente encima del video */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
};

export default VideoBackground;
