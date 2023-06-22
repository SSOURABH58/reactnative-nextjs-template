import { createElement, useState } from "react";

export const MyWebDatePicker = () => {
  const [date, setDate] = useState(new Date(Date.now()));

  return createElement("input", {
    type: "date",
    value: date.toISOString().split("T")[0],
    onChange: (event) => {
      setDate(new Date(event.target.value));
    },
    style: {
      height: 30,
      padding: 5,
      border: "2px solid #677788",
      borderRadius: 5,
      width: 250,
    },
  });
};
