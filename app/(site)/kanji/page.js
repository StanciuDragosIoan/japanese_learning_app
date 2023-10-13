import { HeaderComponent } from "../../components/content/HeaderComponent";
import { KanjiExtra } from "../../components/content/kanji/KanjiExtra";
export default function Kanji() {
  return (
    <>
      <h1>Learn Kanji</h1>
      <HeaderComponent
        script="Katakana"
        imgSrc="/assets/kanji/kanji_songoku.png"
        imgAlt="songoku kanji furigana"
        kanji
      />
      <KanjiExtra />
    </>
  );
}
