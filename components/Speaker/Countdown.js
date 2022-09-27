import { useState, useEffect } from "react";

function Countdown(props) {
  const counter =  () => {
    const eventDate = new Date("Dec 5, 2022 07:00:00").getTime();
    const now = new Date().getTime();

    const gap = eventDate - now;

    //Defns
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //Calculate final results
    const totalDays = Math.floor(gap / day);
    const totalHours = Math.floor((gap % day) / hour);
    const totalMins = Math.floor((gap % hour) / minute);
    const totalSecs = Math.floor((gap % minute) / second);

    return {
      days: totalDays,
      hours: totalHours,
      mins: totalMins,
      secs: totalSecs,
    };
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;


  const { days, hours, mins, secs } = counter();
  return (
    <div>
      <p className="text-gray-400 font-medium">
        Time Left until event:{" "}
        <span className="text-green-600 text-2xl">
          {days}d {hours}h {mins}m {secs}s
        </span>
      </p>
    </div>
  );
}

export default Countdown;
