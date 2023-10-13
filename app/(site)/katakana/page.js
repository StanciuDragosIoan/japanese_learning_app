import Link from "next/link";
import Image from "next/image";
import { StrokeOrder } from "@/app/components/content/StrokeOrder";
import { katakanaAlphabete } from "./data";
import { Diacritics } from "@/app/components/content/Diacritics";
import { Dyagraphs } from "@/app/components/content/Dyagraphs";
import { PracticeSection } from "@/app/components/content/PracticeSection";
import { HeaderComponent } from "@/app/components/content/HeaderComponent";
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
        script={katakanaAlphabete}
        indexes={[35, 38, 43, 46, 47, 48]}
        scriptName="katakana"
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
          width={0}
          height={0}
          priority
          sizes="100vw"
          style={{ width: "600px", height: "auto" }}
          alt="Gomenasai hiragana"
        />
      </div>
    </>
  );
}
