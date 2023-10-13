import Link from "next/link";

export const KatakanaDyagraphsInfo = () => {
  return (
    <>
      <p className="text-3xl m-5">Katakana Dyagraphs</p>
      <p className="text-white leading-8 mx-auto px-5 py-2 w-full sm:w-6/12">
        Just like
        <Link className="p-1 hover:text-gray-800 underline" href="/hiragana">
          Hiragana
        </Link>
        ,{" "}
        <Link className="p-1 hover:text-gray-800 underline" href="/katakana">
          Katakana
        </Link>{" "}
        has its own
        <Link
          className="p-1 hover:text-gray-800 underline"
          href="https://www.japanesepod101.com/lesson/how-to-write-in-japanese-hiragana-and-katakana-19-the-katakana-y-column-and-more-digraphs"
          target="_blank"
        >
          dyagraphs
        </Link>
        . Let's have a look at them:
      </p>
    </>
  );
};
