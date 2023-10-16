"use client";
import { useState } from "react";
export const StorySentence = ({ text }) => {
  const [isShow, setShow] = useState(false);
  const toggle = () => {
    setShow(!isShow);
  };
  return (
    <div className="flex flex-col md:flex-col pt-10 justify-center text-2xl w-[80%] md:w-[60%] mx-auto">
      <p className="m-5">
        <span className="underline block m-2">Kanji:</span>
        {text.kanji}
      </p>
      <p className="m-5">
        <span className="underline block m-2">Hiragana:</span>
        {text.hiragana}
      </p>

      <p className="m-5">
        <span className="underline block m-2">Romaji:</span>
        <span style={{ opacity: Number(isShow) }}> {text.romaji}</span>
        <button
          onClick={toggle}
          className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full mx-5"
        >
          See reading
        </button>
      </p>
      <p className="m-5">
        <span className="underline block m-2">Translation:</span>
        {text.translation}
      </p>
    </div>
  );
};
