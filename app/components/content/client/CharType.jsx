"use client";
import { useState } from "react";
export const CharType = ({ w }) => {
  const [wrong, right] = ["Boo! X__x", "Bingo! ^__^"];
  const kana = w.split("-")[1].trim().toLowerCase();
  const translation = w.split("-")[0].trim().toLowerCase();
  const [value, setValue] = useState("");
  const [colorClass, setColorClass] = useState("");

  const changeHandler = (e) => {
    console.log(e.target.value, translation);
    const input = e.target.value.trim().toLowerCase();

    if (input === translation) {
      setValue(right);
      setColorClass("text-green-800 bg-white rounded-full");
    } else {
      setValue(wrong);
      setColorClass("text-red-800 bg-white rounded-full");
    }
  };

  return (
    <div className="flex items-center justify-center border-solid border-2 border-sky-500 rounded-3xl">
      <label className="text text-3xl mx-2">{kana}</label>
      <p style={{ width: "6rem" }} className={`text ${colorClass}`}>
        {value}
      </p>
      <input
        className="w-10 rounded-full m-5 text-black text-center"
        type="tex"
        onChange={(e) => changeHandler(e)}
      />
    </div>
  );
};
