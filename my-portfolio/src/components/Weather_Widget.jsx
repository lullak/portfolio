import React, { useEffect } from "react";

const WeatherWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://weatherwidget.io/js/widget.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
   <a className="weatherwidget-io mb-5 mt-5" href="https://forecast7.com/en/59d3318d07/stockholm/" 
          data-label_1="STOCKHOLM"
          data-label_2="WEATHER"
          data-icons="Climacons Animated"
          data-days="3">STOCKHOLM WEATHER</a>
  );
};

export default WeatherWidget;