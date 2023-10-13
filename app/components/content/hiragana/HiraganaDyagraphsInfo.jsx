import Link from "next/link";

export const HiraganaDyagraphsInfo = () => {
  return (
    <>
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
        <span className="text-2xl">や (Ya), ゆ (Yu), よ (Yo)</span> vowels plus
        a consonant. Let's have a look at them:
      </p>
    </>
  );
};
