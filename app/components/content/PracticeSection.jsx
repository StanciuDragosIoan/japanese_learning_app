import { Char } from "./client/Char";
import { CharType } from "./client/CharType";
export const PracticeSection = ({ words, alphabet, type }) => {
  return (
    <>
      <div className="mt-10 text-center p-5">
        <h1 className="text-2xl m-5">Practice time!</h1>
        <p>
          Practice makes perfect so for starters I will give you some words with
          the {type} characters.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-4 center">
          {words.map((w) => {
            return <Char w={w} />;
          })}
        </div>
      </div>

      <div className="mt-10 text-center p-5">
        <h1 className="text-2xl m-5">Writing time!</h1>
        <p>Let's see if you can recognize the characters correctly</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-4 center">
          {alphabet.map((w) => {
            return <CharType w={w} />;
          })}
        </div>
      </div>
    </>
  );
};
