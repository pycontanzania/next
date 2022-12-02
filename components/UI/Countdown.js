import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";

function Countdown(props) {
  const { t, lang } = useTranslation("common");

  const [days,setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const [mounted, setMounted] = useState(false);

  const counter = () => {
    const eventDate = new Date("Dec 5, 2022 09:00:00").getTime();
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

    setDays(totalDays);
    setHours(totalHours);
    setMins(totalMins);
    setSecs(totalSecs);

  };

  useEffect(() => {
    setMounted(true);

    //Running counter on 1st render
    counter();

    //Updating counter every second
    const interval = setInterval(() => {
      counter()
    },1000);

    return () => clearInterval(interval)

  }, []);

  if (!mounted) return null;


  return (
    <div>
      <p className="text-gray-400 font-medium">
      {t("hero_countdown")}:{" "}
        <span className="text-green-600 text-xl md:text-2xl">
          {days}d {hours}h {mins}m {secs}s
        </span>
      </p>
    </div>
  );
}

export default Countdown;
