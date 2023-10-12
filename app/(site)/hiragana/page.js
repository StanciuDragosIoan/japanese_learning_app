import Link from "next/link";
import Image from "next/image";
export default function Hiragana() {
  const hiraganaAlphabet = [
    "A - あ",
    "I - い",
    "U - う",
    "E - え",
    "O - お",
    "Ka - か",
    "Ki - き",
    "Ku - く",
    "Ke - け",
    "Ko - こ",
    "Sa - さ",
    "Shi - し",
    "Su - す",
    "Se - せ",
    "So - そ",
    "Ta - た",
    "Chi - ち",
    "Tsu - つ",
    "Te - て",
    "To - と",
    "Na - な",
    "Ni - に",
    "Nu - ぬ",
    "Ne - ね",
    "Ne - no",
    "Ha - は",
    "Hi - ひ",
    "Fu - ふ",
    "He - へ",
    "Ho - ほ",
  ];
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
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Image
              src="/hiragana_gomenasai.jpg"
              width={500}
              height={500}
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-4 center">
        {hiraganaAlphabet.map((i) => {
          const hiraganaChar = i.split("-")[1].toLocaleLowerCase().trim();
          const translation = i.split("-")[0].toLocaleLowerCase().trim();
          console.log(translation, hiraganaChar);
          return (
            <div className="text-center">
              <p className="text-xl">
                {translation} - {hiraganaChar}
              </p>
              <Image
                className="mx-auto m-5 rounded-full"
                src={`/assets/hiragana/hiragana_${translation}.gif`}
                width={90}
                height={90}
                alt={`hriagana ${translation}`}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
