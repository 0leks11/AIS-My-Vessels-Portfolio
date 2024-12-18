// src/components/GallerySection/FormattedDate.tsx
import React from "react";
import tzLookup from "tz-lookup";
import moment from "moment-timezone";

interface FormattedDateProps {
  utcTime: string;
  latitude: number;
  longitude: number;
}

const FormattedDate: React.FC<FormattedDateProps> = ({
  utcTime,
  latitude,
  longitude,
}) => {
  const cleanUtcTime = (utcTime: string): string => {
    const noMicroseconds = utcTime.replace(/\.\d+ \+\d{4} UTC$/, "");
    return noMicroseconds.replace(/:\d{2}$/, "");
  };

  const calculateUTCOffset = (latitude: number, longitude: number): string => {
    try {
      const timeZone = tzLookup(latitude, longitude);
      const utcOffset = moment.tz(timeZone).utcOffset() / 60;

      return utcOffset >= 0 ? `UTC+${utcOffset}` : `UTC${utcOffset}`;
    } catch (error) {
      console.error("Ошибка при вычислении UTC смещения:", error);
      return "UTC";
    }
  };

  const cleanedUtcTime = cleanUtcTime(utcTime);

  const utcOffset = calculateUTCOffset(latitude, longitude);

  return (
    <span>
      {cleanedUtcTime} ({utcOffset})
    </span>
  );
};

export default FormattedDate;
