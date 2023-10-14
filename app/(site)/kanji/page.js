import { HeaderComponent } from "../../components/content/HeaderComponent";
import { KanjiExtra } from "../../components/content/kanji/KanjiExtra";
import Image from "next/image";
import { kanji } from "./data";
export default function Kanji() {
  return (
    <>
      <h1>Learn Kanji</h1>
      <HeaderComponent
        script="Kanji"
        imgSrc="/assets/kanji/kanji_songoku.png"
        imgAlt="songoku kanji furigana"
        kanji
      />
      <KanjiExtra />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-4 center">
        {kanji.map((k) => {
          return (
            <div className="text-center" key={k.kanji}>
              <p className="text-xl">
                {k.meaning} - {k.kanji}
              </p>
              <Image
                className="mx-auto m-5 rounded-full"
                src={`/assets/kanji/kanji_${k.kanji}.gif`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "90px", height: "auto" }}
                alt={`${k.kanji} ${k.meaning}`}
              />
              <p className="text-2xl">Readings:</p>
              <p className="text-2xl">onyomi: {k.onyomi.map((i) => `${i},`)}</p>
              <p className="text-2xl mb-5">
                kunyomi: {k.kunyomi.map((i) => `${i},`)}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
