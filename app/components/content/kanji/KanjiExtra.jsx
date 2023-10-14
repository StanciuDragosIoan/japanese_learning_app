import Link from "next/link";
import Image from "next/image";
export const KanjiExtra = () => {
  return (
    <div className="mt-10 text-center p-5 w-120">
      <p>
        <Link className="p-1 hover:text-gray-800 underline" href="/kanji">
          Kanji characters
        </Link>
        are not sylables (unlike
        <Link className="p-1 hover:text-gray-800 underline" href="/hiragana">
          Hiragana
        </Link>
        or
        <Link className="p-1 hover:text-gray-800 underline" href="/katakana">
          Katakana
        </Link>
        ). The characters actually represent a concept or an idea.
      </p>
      <p>I will give you another quick example for starters:</p>
      <Image
        src="/assets/kanji/japan_kanji.webp"
        width={300}
        height={300}
        alt="Japan kanji"
        className="mx-auto my-5"
      />
      <p>
        As you notice from the picture, the
        <Link
          className="p-1 hover:text-gray-800 underline"
          href="/hiragana"
          target="_blank"
        >
          Hiragana
        </Link>
        characters alongside the
        <Link
          className="p-1 hover:text-gray-800 underline"
          href="/kanji"
          target="_blank"
        >
          Kanji
        </Link>
        are called
        <Link
          className="p-1 hover:text-gray-800 underline"
          href="/https://storylearning.com/learn/japanese/japanese-tips/what-is-furigana"
          target="_blank"
        >
          furigana
        </Link>
        and their role is to help us understand the prononciation of the
        <Link
          className="p-1 hover:text-gray-800 underline"
          href="/kanji"
          target="_blank"
        >
          Kanji
        </Link>
        .
      </p>
      <div className="w-[100%] mx-auto md:w-[80%]">
        <p>
          The word <span className="text-2xl">日本</span> can also be written as
          <span className="text-2xl"> にほん</span> or
          <span className="text-2xl"> にっぽん</span>.
        </p>
        <p className="text-center text-2xl my-5">Kanji pronounciation</p>
        <p className="text-center">
          <Link
            className="p-1 hover:text-gray-800 underline"
            href="/kanji"
            target="_blank"
          >
            Kanji
          </Link>
          characters have multiple pronounciations, which makes it tricky to
          learn them, but getting started should not be that hard. I will give
          you a quick example.
        </p>
        <p className="text">
          The symbol: <span className="text-2xl">人</span> is the{" "}
          <Link
            className="p-1 hover:text-gray-800 underline"
            href="/kanji"
            target="_blank"
          >
            kanji
          </Link>
          for person. It is normally pronounced
          <span className="text-2xl">ひと</span>. Yet, if we combine it with
          another
          <Link
            className="p-1 hover:text-gray-800 underline"
            href="/kanji"
            target="_blank"
          >
            kanji
          </Link>
          such as <span className="text-2xl">日本人</span> we get the word{" "}
          <span className="text-2xl">にほんじん</span> (this being the word for
          Japanese person).
        </p>

        <p className="text-center text-2xl my-5">Onyomi and Kunyomi</p>
        <p className="text-center">
          These are the 2 main ways in which{" "}
          <Link
            className="p-1 hover:text-gray-800 underline"
            href="/kanji"
            target="_blank"
          >
            Kanji
          </Link>
          are read. Onyomi is the original Chinese pronounciation of the
          character (and it is used in compond words), while Kunyomi is the
          Japanese reading (and used in stand alone words).
        </p>
        <p className="text">
          Let's go back to the <span className="text-2xl">人</span>. The Kunyomi
          reading for this character is <span className="text-2xl">ひと</span>
          while the Onyomi reading is <span className="text-2xl">ジン</span>.
        </p>
      </div>
    </div>
  );
};
