import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

const Clock = ({ deadline }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <div className="contador">
      <div className="contenedor-contador">
        <div className="Clock-days col">
          <p>{leading0(days)}</p>{" "}
          <span>
            <FormattedMessage id="component.day" />
          </span>{" "}
        </div>
        <div className="Clock-hours col">
          <p>{leading0(hours)}</p>{" "}
          <span>
            {" "}
            <FormattedMessage id="component.hours" />
          </span>
        </div>
        <div className="Clock-minutes col">
          <p>{leading0(minutes)}</p>{" "}
          <span>
            {" "}
            <FormattedMessage id="component.minutes" />
          </span>
        </div>
        <div className="Clock-seconds col">
          <p>{leading0(seconds)}</p>{" "}
          <span>
            {" "}
            <FormattedMessage id="component.seconds" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Clock;
