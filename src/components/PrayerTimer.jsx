import { useEffect, useRef, useState } from "react";

function PrayerTimer({ prayerTimesInMins = [] }) {
  const [label, setLabel] = useState("--:--:--");
  const intervalRef = useRef(null);
  const SKIP_INDEX = 1; // Sunrise

  const pad = (value) => String(value).padStart(2, "0");

  const formatMs = (ms) => {
    if (ms <= 0) return "00:00:00";
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  const getNextPrayerIndex = (nowMins) => {
    for (let i = 0; i < prayerTimesInMins.length; i++) {
      if (i === SKIP_INDEX) continue;
      if (prayerTimesInMins[i] > nowMins) return i;
    }
    for (let i = 0; i < prayerTimesInMins.length; i++) {
      if (i === SKIP_INDEX) continue;
      return i;
    }
    return -1;
  };

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const nowMins = now.getHours() * 60 + now.getMinutes();
      const nowMs = now.getTime();

      const nextIndex = getNextPrayerIndex(nowMins);
      if (nextIndex === -1) {
        setLabel("--:--:--");
        return;
      }

      const targetMins = prayerTimesInMins[nextIndex];
      const targetHour = Math.floor(targetMins / 60);
      const targetMinute = targetMins % 60;

      let target = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        targetHour,
        targetMinute,
        0,
        0,
      );

      if (target.getTime() <= nowMs) {
        target = new Date(target.getTime() + 24 * 60 * 60 * 1000);
      }

      setLabel(formatMs(target.getTime() - nowMs));
    };

    tick();
    intervalRef.current = window.setInterval(tick, 1000);

    return () => window.clearInterval(intervalRef.current);
  }, [prayerTimesInMins]);

  return (
    <p className="text-center font-extrabold font-sans text-9xl my-10">
      {label}
    </p>
  );
}

export default PrayerTimer;
