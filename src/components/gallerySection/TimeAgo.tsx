// src/components/GallerySection/TimeAgo.tsx
import React from "react";

interface TimeAgoProps {
  utcTime?: string;
}

const TimeAgo: React.FC<TimeAgoProps> = ({ utcTime }) => {
  const calculateTimeDifference = () => {
    const currentTime = new Date();
    const eventTime = new Date(utcTime || "");
    const differenceInSeconds = Math.floor(
      (currentTime.getTime() - eventTime.getTime()) / 1000
    );

    const days = Math.floor(differenceInSeconds / (3600 * 24));
    const hours = Math.floor((differenceInSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((differenceInSeconds % 3600) / 60);
    const seconds = differenceInSeconds % 60;

    const parts = [];
    if (days > 0) parts.push(`${days} d`);
    if (hours > 0) parts.push(`${hours} h`);
    if (minutes > 0) parts.push(`${minutes} m`);
    if (seconds > 0 || (days === 0 && hours === 0 && minutes === 0))
      parts.push(`${seconds} sec`);

    return parts.join(" ");
  };

  const timeDifference = calculateTimeDifference();

  return <span>{timeDifference}</span>;
};

export default TimeAgo;
