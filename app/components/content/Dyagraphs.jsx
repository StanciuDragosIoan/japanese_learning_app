import { dyagraphs } from "@/app/(site)/hiragana/data";
import Link from "next/link";
export const Dyagraphs = () => {
  return (
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
        <span className="text-2xl">や (Ya), ゆ (Yu), よ (Yo)</span> vowels plus
        a consonant. Let's have a look at them:
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
  );
};
