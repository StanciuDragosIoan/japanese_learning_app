"use client";
import { useState } from "react";
export const Char = ({ w }) => {
  const [show, setShow] = useState(false);
  return (
    <p
      key={w.word}
      className="border-solid border-2 border-sky-500 rounded-3xl"
    >
      <span className="text-2xl">{w.word} </span>
      <span style={{ opacity: Number(show) }}>({w.translation})</span>

      <button
        type="button"
        className="border rounded-full border-indigo-500 bg-orange-500 text-white  px-2 py-2 m-2 transition duration-500 ease select-none hover:bg-orange-600 focus:outline-none focus:shadow-outline"
        onClick={() => setShow(!show)}
      >
        Translation
      </button>
    </p>
  );
};
