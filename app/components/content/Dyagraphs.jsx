import Link from "next/link";
import { HiraganaDyagraphsInfo } from "./hiragana/HiraganaDyagraphsInfo";
import { KatakanaDyagraphsInfo } from "./katakana/KatakanaDyagraphsInfo";
export const Dyagraphs = ({
  dyagraphs,
  hiragana = false,
  katakana = false,
}) => {
  return (
    <div className="text-center p-5">
      {hiragana && <HiraganaDyagraphsInfo />}
      {katakana && <KatakanaDyagraphsInfo />}

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
