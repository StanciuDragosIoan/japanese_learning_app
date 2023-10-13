import Image from "next/image";
export const ImageComponent = ({ imageSrc, imageAlt, script }) => {
  return (
    <div>
      <p className="text-white leading-8 mx-auto px-5 py-2 w-full sm:w-6/12">
        As a final practice material, I will also give you this cute little
        table with {script} characters:
      </p>

      <div className="mt-10 flex items-center justify-center p-5">
        <Image
          src={imageSrc}
          width={0}
          height={0}
          priority
          sizes="100vw"
          style={{ width: "600px", height: "auto" }}
          alt={imageAlt}
        />
      </div>
    </div>
  );
};
