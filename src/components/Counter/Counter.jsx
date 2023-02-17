import React, { useState, useRef, useEffect } from "react";
import "../Counter/Counter.css";

const Counter = () => {
  const [dayTimer, setDayTimer] = useState(0);
  const [hourTimer, setHourTimer] = useState(0);
  const [minuteTimer, setMinuteTimer] = useState(0);
  const [secondTimer, setSecondTimer] = useState(0);

  let interval = useRef();

  const startTimer = () => {
    const CounterDate = new Date("March 20, 2023 12:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = CounterDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop timer
        clearInterval(interval.current);
      } else {
        setDayTimer(days);
        setHourTimer(hours);
        setMinuteTimer(minutes);
        setSecondTimer(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="Counter">
      <div className="Counter_section">
        <div className="Counter_timer">
          <div className="Counter_time">
            <div className="Counter_time_heading">
              <h1>{dayTimer}</h1>
            </div>
            <div className="Counter_time_para">
              <p>D</p>
            </div>
          </div>
          <div className="Counter_time">
            <div className="Counter_time_heading">
              <h1>{hourTimer}</h1>
            </div>
            <div className="Counter_time_para">
              <p>H</p>
            </div>
          </div>
          <div className="Counter_time">
            <div className="Counter_time_heading">
              <h1>{minuteTimer}</h1>
            </div>
            <div className="Counter_time_para">
              <p>M</p>
            </div>
          </div>
          <div className="Counter_time">
            <div className="Counter_time_heading">
              <h1>{secondTimer}</h1>
            </div>
            <div className="Counter_time_para">
              <p>S</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;