import { diacritics } from "@/app/(site)/hiragana/data";
import Link from "next/link";

export const Diacritics = () => {
  return (
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

      {diacritics.map((d) => {
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
  );
};
