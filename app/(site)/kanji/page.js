import { HeaderComponent } from "../../components/content/HeaderComponent";
import { KanjiExtra } from "../../components/content/kanji/KanjiExtra";
import { StrokeOrderKanji } from "../../components/content/kanji/StrokeOrderKanji";
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
    </>
  );
}
