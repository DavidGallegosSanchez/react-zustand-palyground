import { useEffect, useState } from "react";

type TrafficLightColor = keyof typeof colors;

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

export const useTrafficLight = () => {
  const [light, setLight] = useState<TrafficLightColor>("red");
  const [countDown, setCountDown] = useState(5);

  // countDown Effect
  useEffect(() => {
    if (countDown === 0) return;

    const intervalId = setInterval(() => {
      console.log("setInterval llamando");
      setCountDown((prev) => prev - 1);
    }, 1000);

    return () => {
      // Cleanup effect
      clearInterval(intervalId);
    };
  }, [countDown]);

  // chance light color effect
  useEffect(() => {
    if (countDown > 0) return;
    setCountDown(5);
    if (light === "red") {
      setLight("green");
      return;
    }
    if (light === "green") {
      setLight("yellow");
      return;
    }
    if (light === "yellow") {
      setLight("red");
      return;
    }
  }, [countDown, light]);

  return {
    // Props
    countDown,
    light,
    colors,

    // Computed
    percentage: (countDown / 5) * 100,
    greenLight: light === "green" ? colors.green : "bg-gray-500",
    yellowLight: light === "yellow" ? colors.yellow : "bg-gray-500",
    redLight: light === "red" ? colors.red : "bg-gray-500",

    // Methods
  };
};
