import Link from "next/link";
export const KatakanaInfo = () => {
  return (
    <p className="mt-6 leading-8">
      <Link className="p-1 hover:text-gray-800 underline" href="/katakana">
        Katakana
      </Link>
      is the exact equivalent of
      <Link className="p-1 hover:text-gray-800 underline" href="/hiragana">
        Hiragana
      </Link>
      when it comes to pronounciation. The main difference is how the characters
      look and when they are used. They look completely different from{" "}
      <Link className="p-1 hover:text-gray-800 underline" href="/hiragana">
        Hiragana
      </Link>
      and are more angular. Only a few characters look similar (like か
      -hiragana / カ -katakana)
    </p>
  );
};
