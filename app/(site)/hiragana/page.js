import { StrokeOrder } from "../../components/content/StrokeOrder";
import { hiraganaAlphabet, hiraganaWords, diacritics, dyagraphs } from "./data";
import { Diacritics } from "../../components/content/Diacritics";
import { Dyagraphs } from "../../components/content/Dyagraphs";
import { PracticeSection } from "../../components/content/PracticeSection";
import { ImageComponent } from "../../components/content/ImageComponent";
import { HeaderComponent } from "../../components/content/Header";
export const metadata = {
  title: "Hiragana",
  description: "Page to learn Hiragana",
};
export default function Hiragana() {
  return (
    <>
      <HeaderComponent
        script="Hiragana"
        imgAlt="hiragana gomenasai girl"
        imgSrc="/hiragana_gomenasai.jpg"
        hiragana
      />

      <StrokeOrder
        script={hiraganaAlphabet}
        indexes={[35, 38, 43, 46, 47, 48]}
        scriptName="hiragana"
      />

      <Diacritics diacritics={diacritics} />

      <Dyagraphs dyagraphs={dyagraphs} hiragana />

      <PracticeSection
        words={hiraganaWords}
        alphabet={hiraganaAlphabet}
        type="hiragana"
      />

      <ImageComponent
        script="hiragana"
        imageSrc="/assets/hiragana/hiragana_characters.jpg"
        imageAlt="Gomenasai hiragana girl"
      />
    </>
  );
}
