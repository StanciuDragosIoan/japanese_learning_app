import Link from "next/link";
import Image from "next/image";
import { StrokeOrder } from "@/app/components/content/StrokeOrder";
import { hiraganaAlphabet } from "./data";

export default function Hiragana() {
  const dyacritics = [
    {
      kana: "か",
      translation: "Ka",
      dakuten: "が",
      dakutenTranslation: "Ga",
    },

    {
      kana: "き",
      translation: "Ki",
      dakuten: "ぎ",
      dakutenTranslation: "Gi",
    },

    {
      kana: "く",
      translation: "Ku",
      dakuten: "ぐ",
      dakutenTranslation: "Gu",
    },

    {
      kana: "け",
      translation: "Ke",
      dakuten: "げ",
      dakutenTranslation: "Ge",
    },

    {
      kana: "こ",
      translation: "Ko",
      dakuten: "ご",
      dakutenTranslation: "Go",
    },

    {
      kana: "さ",
      translation: "Sa",
      dakuten: "ざ",
      dakutenTranslation: "Za",
    },

    {
      kana: "し",
      translation: "Shi",
      dakuten: "じ",
      dakutenTranslation: "Ji",
    },

    {
      kana: "す",
      translation: "Su",
      dakuten: "ず",
      dakutenTranslation: "Zu",
    },

    {
      kana: "せ",
      translation: "Se",
      dakuten: "ぜ",
      dakutenTranslation: "Ze",
    },

    {
      kana: "そ",
      translation: "So",
      dakuten: "ぞ",
      dakutenTranslation: "Zo",
      variant: {
        value: "ソ",
      },
    },

    {
      kana: "た",
      translation: "Ta",
      dakuten: "だ",
      dakutenTranslation: "Da",
    },

    {
      kana: "ち",
      translation: "Chi",
      dakuten: "ぢ",
      dakutenTranslation: "Dji",
    },

    {
      kana: "つ",
      translation: "Tsu",
      dakuten: "づ",
      dakutenTranslation: "Dzu",
    },

    {
      kana: "て",
      translation: "Te",
      dakuten: "で",
      dakutenTranslation: "De",
    },

    {
      kana: "と",
      translation: "To",
      dakuten: "ど",
      dakutenTranslation: "Do",
    },

    {
      kana: "は",
      translation: "Ha",
      dakuten: "ば",
      dakutenTranslation: "Ba",
      handakuten: "ぱ",
      handakutenTranslation: "Pa",
    },

    {
      kana: "ひ",
      translation: "Hi",
      dakuten: "び",
      dakutenTranslation: "Bi",
      handakuten: "ぴ",
      handakutenTranslation: "Pi",
    },

    {
      kana: "ふ",
      translation: "Fu",
      dakuten: "ぶ",
      dakutenTranslation: "Bu",
      handakuten: "ぷ",
      handakutenTranslation: "Pu",
    },

    {
      kana: "へ",
      translation: "He",
      dakuten: "ベ",
      dakutenTranslation: "Be",
      handakuten: "ペ",
      handakutenTranslation: "Pe",
    },

    {
      kana: "ほ",
      translation: "Ho",
      dakuten: "ぼ",
      dakutenTranslation: "Bo",
      handakuten: "ぽ",
      handakutenTranslation: "Po",
    },
  ];

  const dyagraphs = [
    {
      dyagraph: "きゃ",
      translation: "Kya",
      handakuten: "ぎゃ",
      handakutenTranslation: "Gya",
    },

    {
      dyagraph: "きゅ",
      translation: "Kyu",
      handakuten: "ぎゅ",
      handakutenTranslation: "Gyu",
    },

    {
      dyagraph: "きょ",
      translation: "Kyo",
      handakuten: "ぎょ",
      handakutenTranslation: "Gyo",
    },

    {
      dyagraph: "しゃ",
      translation: "Sha",
      handakuten: "じゃ",
      handakutenTranslation: "Ja",
    },

    {
      dyagraph: "しゅ",
      translation: "Shu",
      handakuten: "じゅ",
      handakutenTranslation: "Ju",
    },

    {
      dyagraph: "しょ",
      translation: "Sho",
      handakuten: "じょ",
      handakutenTranslation: "Jo",
    },

    {
      dyagraph: "ちゃ",
      translation: "Cha",
    },

    {
      dyagraph: "ちゅ",
      translation: "Chu",
    },

    {
      dyagraph: "ちょ",
      translation: "Cho",
    },

    {
      dyagraph: "にゃ",
      translation: "Nya",
    },

    {
      dyagraph: "にゅ",
      translation: "Nyu",
    },

    {
      dyagraph: "にょ",
      translation: "Nyo",
    },

    {
      dyagraph: "ひゃ",
      translation: "Hya",
      dakuten: "びゃ",
      dakutenTranslation: "Bya",
      handakuten: "ぴゃ",
      handakutenTranslation: "Pya",
    },

    {
      dyagraph: "ひゅ",
      translation: "Hyu",
      dakuten: "びゅ",
      dakutenTranslation: "Byu",
      handakuten: "ぴゅ",
      handakutenTranslation: "Pyu",
    },

    {
      dyagraph: "ひょ",
      translation: "Hyo",
      dakuten: "びょ",
      dakutenTranslation: "Byo",
      handakuten: "ぴょ",
      handakutenTranslation: "Pyo",
    },

    {
      dyagraph: "みゃ",
      translation: "Mya",
    },

    {
      dyagraph: "みゅ",
      translation: "Myu",
    },

    {
      dyagraph: "みょ",
      translation: "Myo",
    },

    {
      dyagraph: "りゃ",
      translation: "Rya",
    },

    {
      dyagraph: "りゅ",
      translation: "Ryu",
    },

    {
      dyagraph: "りょ",
      translation: "Ryo",
    },
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
      />

      <div className="text-center">
        <p className="text-3xl m-5">Dakuten and Handakuten</p>
        <p className="text-white leading-8 mx-auto px-5 py-2 w-full sm:w-6/12">
          Now that you know how to draw the characters, you should also know
          something about the
          <Link
            className="p-1 hover:text-gray-800"
            href="https://paulbaptist.com/introduction-to-japanese-writing-hiragana-group-11-dakuten-%E3%81%8C%E3%81%96%E3%81%A0%E3%81%B0-etc/"
            target="_blank"
          >
            Dakuten (゛)
          </Link>
          and
          <Link
            className="p-1 hover:text-gray-800"
            href="https://skdesu.com/en/dakuten/"
            target="_blank"
          >
            Handakuten (ﾟ)
          </Link>
          .
        </p>
        <p className="text-white leading-8 mx-auto px-5 py-2 w-full sm:w-6/12">
          These dyacritics will change a bit some of the vowels we've just
          learned:
        </p>

        {dyacritics.map((d) => {
          return d.dakuten ? (
            <p className="leading-8 pb-5" key={d.dakuten}>
              <span className="p-1 text-2xl">
                {d.kana} ({d.translation})
              </span>
              used with the dakuten (゛) will become
              <span className="p-1 text-2xl">
                {d.dakuten} ({d.dakutenTranslation})
              </span>
              {d.variant ? (
                <span className="block">
                  *The character {d.kana} also has a variant namely{" "}
                  {d.variant.value}
                </span>
              ) : (
                ""
              )}
              {d.handakuten ? (
                <span className="leading-8 block">
                  <span className="p-1 text-2xl">
                    {d.kana} ({d.translation})
                  </span>
                  used with the handakuten (ﾟ) will become
                  <span className="p-1 text-2xl">
                    {d.handakuten} ({d.handakutenTranslation})
                  </span>
                </span>
              ) : (
                ""
              )}
            </p>
          ) : (
            ""
          );
        })}
      </div>

      <div className="text-center p-5">
        <p className="text-3xl m-5">Hiragana Dyagraphs</p>
        <p className="text-white leading-8 mx-auto px-5 py-2 w-full sm:w-6/12">
          If you thought the fun part is over when it comes to this script, you
          are wrong, my friend! In hiragana we also have these
          <Link
            className="p-1 hover:text-gray-800 underline"
            href="https://www.wattpad.com/1027156152-language-book-japan-edition-hiragana-digraphs"
            target="_blank"
          >
            Dyagraphs
          </Link>
          which are basically groups of the
          <span className="text-2xl">や (Ya), ゆ (Yu), よ (Yo)</span> vowels
          plus a consonant. Let's have a look at them:
        </p>

        {dyagraphs.map((d) => {
          return (
            <p
              className="text-white leading-8 mx-auto px-5 py-2 w-full sm:w-6/12"
              key={d.dyagraph}
            >
              <span className="p-1 text-2xl">
                {d.dyagraph} ({d.translation})
              </span>
              {d.dakuten ? (
                <span className="block">
                  used with the dakuten (゛) will become
                  <span className="p-1 text-2xl">
                    {d.dakuten} ({d.dakutenTranslation})
                  </span>
                </span>
              ) : (
                ""
              )}
              {d.handakuten ? (
                <span className="block">
                  used with the handakuten (ﾟ) will become
                  <span className="p-1 text-2xl">
                    {d.handakuten} ({d.handakutenTranslation})
                  </span>
                </span>
              ) : (
                ""
              )}
            </p>
          );
        })}
      </div>
    </>
  );
}
