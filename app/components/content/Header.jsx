import Link from "next/link";
import Image from "next/image";
import { KatakanaInfo } from "./katakana/KatakanaInfo";
import { HiraganaInfo } from "./hiragana/HiraganaInfo";
import { KanjiInfo } from "./kanji/KanjiInfo";
export const HeaderComponent = ({
  script,
  imgSrc,
  imgAlt,
  katakana = false,
  hiragana = false,
  kanji = false,
}) => {
  return (
    <div className="text-white w-80 mx-auto py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Learn {script}
        </h1>
        <p className="mt-6 leading-8">
          There are 3 alphabetes in Japanese:
          <Link className="p-1 hover:text-gray-800 underline" href="/hiragana">
            Hiragana
          </Link>
          ,
          <Link className="p-1 hover:text-gray-800 underline" href="/katakana">
            Katakana
          </Link>
          and
          <Link className="p-1 hover:text-gray-800 underline" href="/kanji">
            Kanji
          </Link>
          .
        </p>

        <div className="mt-10 flex items-center justify-center">
          <Image src={imgSrc} width={500} height={500} priority alt={imgAlt} />
        </div>
        {katakana && <KatakanaInfo />}
        {hiragana && <HiraganaInfo />}
        {kanji && <KanjiInfo />}
      </div>
    </div>
  );
};
