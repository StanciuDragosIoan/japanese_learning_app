import Image from "next/image";
export const StrokeOrder = ({ indexes, script, scriptName }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-4 center">
      {script.map((i, index) => {
        const hiraganaChar = i.split("-")[1].toLocaleLowerCase().trim();
        const translation = i.split("-")[0].toLocaleLowerCase().trim();

        return (
          <>
            {indexes.includes(index) ? <br /> : ""}

            <div className="text-center" key={hiraganaChar}>
              <p className="text-xl">
                {translation} - {hiraganaChar}
              </p>
              <Image
                className="mx-auto m-5 rounded-full"
                src={`/assets/${scriptName}/${scriptName}_${translation}.gif`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "90px", height: "auto" }}
                alt={`${scriptName} ${translation}`}
              />
            </div>
          </>
        );
      })}
    </div>
  );
};
