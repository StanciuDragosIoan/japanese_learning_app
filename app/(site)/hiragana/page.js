import Link from "next/link";
import Image from "next/image";
import { StrokeOrder } from "@/app/components/content/StrokeOrder";
import { hiraganaAlphabet, diacritics, dyagraphs } from "./data";
import { Diacritics } from "@/app/components/content/Diacritics";
import { Dyagraphs } from "@/app/components/content/Dyagraphs";
import { PracticeSection } from "@/app/components/content/PracticeSection";
export default function Hiragana() {
  return (
    <>
      <div className="text-white w-80 mx-auto py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Learn Hiragana
          </h1>
          <p className="mt-6 leading-8">
            There are 3 alphabetes in Japanese:
            <Link
              className="p-1 hover:text-gray-800 underline"
              href="/hiragana"
            >
              Hiragana
            </Link>
            ,
            <Link
              className="p-1 hover:text-gray-800 underline"
              href="/katakana"
            >
              Katakana
            </Link>
            and
            <Link className="p-1 hover:text-gray-800 underline" href="/kanji">
              Kanji
            </Link>
            .
          </p>

          <div className="mt-10 flex items-center justify-center">
            <Image
              src="/hiragana_gomenasai.jpg"
              width={500}
              height={500}
              priority
              alt="Gomenasai hiragana"
            />
          </div>
          <p className="mt-6 leading-8">
            <Link
              className="p-1 hover:text-gray-800 underline"
              href="/hiragana"
            >
              Hiragana
            </Link>
            is the basic Japanese alphabet. Contrary to the English alphabet
            however, each character represents one syllable sound. Below, you
            will find a quick reference for how to draw each of the symbols.
          </p>
        </div>
      </div>

      <StrokeOrder
        script={hiraganaAlphabet}
        indexes={[35, 38, 43, 46, 47, 48]}
        scriptName="hiragana"
      />

      <Diacritics />

      <Dyagraphs />

      <PracticeSection />

      <p className="text-white leading-8 mx-auto px-5 py-2 w-full sm:w-6/12">
        As a final practice material, I will also give you this cute little
        table with hiragana characters:
      </p>

      <div className="mt-10 flex items-center justify-center p-5">
        <Image
          src="/assets/hiragana/hiragana_characters.jpg"
          width={600}
          height={600}
          priority
          alt="Gomenasai hiragana"
        />
      </div>
    </>
  );
}
