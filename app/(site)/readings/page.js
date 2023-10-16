import Image from "next/image";
import { readings } from "./data";
import { StorySentence } from "../../components/content/client/StorySentence";
import Link from "next/link";

export const metadata = {
  title: "Readings",
  description: "Page to learn Readings",
};
export default function Katakana() {
  return (
    <>
      <h1 className="text-center m-auto text-3xl py-5">
        The story of Momotaro
      </h1>
      <div className="flex flex-col md:flex-col pt-10 justify-center text-2xl w-[80%] md:w-[60%] mx-auto">
        <p className="m-5">
          If you want to practice a bit your knowledge, feel free to read the
          story below:
        </p>
      </div>
      <div className="mt-10 pb-10 flex items-center justify-center">
        <Image
          src="/momotaro-densetsu.jpg"
          width={500}
          height={500}
          priority
          alt="girl learns kanji"
        />
      </div>
      {readings.map((r) => {
        return <StorySentence text={r} />;
      })}
      <div className="flex flex-col md:flex-col pt-10 justify-center text-2xl w-[80%] md:w-[60%] mx-auto">
        <p className="m-5">
          Now, if I did pique your interest, you can read the full story here:
          <Link
            className="p-5 hover:text-gray-800 underline"
            href="https://www.lingual-ninja.com/folktales/Momotaro#Momotaro%20Story"
            target="_blank"
          >
            Full Momotaro story
          </Link>
        </p>
      </div>
    </>
  );
}
