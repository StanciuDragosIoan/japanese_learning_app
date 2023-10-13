import Link from "next/link";
export const KanjiInfo = () => {
  return (
    <>
      <div>
        <p className="mt-6 leading-8">
          <Link className="p-1 hover:text-gray-800 underline" href="/kanji">
            Kanji
          </Link>
          is the mos widely used Japanese script. Hoever it is not native to
          Japan, it was brought in and adapted from China.
        </p>
      </div>
    </>
  );
};
