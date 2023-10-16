import { StrokeOrder } from "../../components/content/StrokeOrder";
import { Diacritics } from "../../components/content/Diacritics";
import { Dyagraphs } from "../../components/content/Dyagraphs";
import { PracticeSection } from "../../components/content/PracticeSection";
import { HeaderComponent } from "../../components/content/Header";
import { ImageComponent } from "../../components/content/ImageComponent";
import { diacritics, dyagraphs } from "../../(site)/katakana/data";
import { katakanaWords, katakanaAlphabet } from "../../(site)/katakana/data";
export const metadata = {
  title: "Katakana",
  description: "Page to learn Katakana",
};
export default function Katakana() {
  return (
    <>
      <HeaderComponent
        script="Katakana"
        imgSrc="/assets/katakana/katakana_fu_bu.webp"
        imgAlt="Katakana fu bu"
        katakana
      />

      <StrokeOrder
        script={katakanaAlphabet}
        indexes={[35, 38, 43]}
        scriptName="katakana"
      />
      <Diacritics diacritics={diacritics} />
      <Dyagraphs dyagraphs={dyagraphs} katakana />
      <PracticeSection
        words={katakanaWords}
        alphabet={katakanaAlphabet}
        type="katakana"
      />

      <ImageComponent
        script="katakana"
        imageAlt="katakana fu bu girl"
        imageSrc="/assets/katakana/katakana_characters.jpg"
      />
    </>
  );
}
