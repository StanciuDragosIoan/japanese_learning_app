import Link from "next/link";
export const HiraganaInfo = () => {
  return (
    <p className="mt-6 leading-8">
      <Link className="p-1 hover:text-gray-800 underline" href="/hiragana">
        Hiragana
      </Link>
      is the basic Japanese alphabet. Contrary to the English alphabet however,
      each character represents one syllable sound. Below, you will find a quick
      reference for how to draw each of the symbols.
    </p>
  );
};
