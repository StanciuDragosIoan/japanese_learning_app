import { HeaderComponent } from "../../components/content/HeaderComponent";
import { KanjiExtra } from "../../components/content/kanji/KanjiExtra";
import { StrokeOrderKanji } from "../../components/content/kanji/StrokeOrderKanji";
import Image from "next/image";
import Link from "next/link";
export default function Kanji() {
  return (
    <>
      <HeaderComponent
        script="Kanji"
        imgSrc="/assets/kanji/kanji_songoku.png"
        imgAlt="songoku kanji furigana"
        kanji
      />
      <KanjiExtra />

      <StrokeOrderKanji />

      <div className="w-[100%] mx-auto md:w-[80%] text-center">
        <p>Now that you know how to get started with </p>{" "}
        <Link className="p-1 hover:text-gray-800 underline" href="/kanji">
          Kanji
        </Link>
        , you just need to practice a bit more and get used to them litle by
        little.
      </div>
      <div className="mt-10 pb-10 flex items-center justify-center">
        <Image
          src="/assets/kanji/kanji_study.webp"
          width={500}
          height={500}
          priority
          alt="girl learns kanji"
        />
      </div>
    </>
  );
}
