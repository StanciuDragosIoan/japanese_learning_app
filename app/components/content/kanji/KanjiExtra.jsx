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
      <p>
        The word <span className="text-2xl">日本</span> can also be written as
        <span className="text-2xl"> にほん</span> or
        <span className="text-2xl"> にっぽん</span>.
      </p>
    </div>
  );
};
