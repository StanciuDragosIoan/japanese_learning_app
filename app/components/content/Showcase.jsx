import Image from "next/image";
import Link from "next/link";
export const Showcase = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-10">
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
          <div className="p-4">
            <Image
              src="/girl_learns.avif"
              width={500}
              height={500}
              alt="Girl Learns Japanese"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 lg:max-w-[30%] md:max-w-[50%] flex items-center justify-center">
          <div className="p-4 mt-5">
            <p className="text-xl py-5 md:py-0 lg:py-5">
              If you ever dreamed of speaking the Japanese language, you are in
              the right place!
            </p>
            <p className="text-xl py-5 md:py-0">
              Kawaii Learn is your go-to app for learning
              <Link
                className="p-5 hover:text-gray-800 underline"
                href="/hiragana"
              >
                Hiragana,
              </Link>
              <Link
                className="p-5 hover:text-gray-800 underline"
                href="/katakana"
              >
                Katakana
              </Link>
              or
              <Link className="p-5 hover:text-gray-800 underline" href="/kanji">
                Kanji
              </Link>
              as well as some basic conversational phrases.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-10 w-[85%] mx-auto">
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
          {/* card */}
          <div className="bg-white shadow-md border border-gray-700 rounded-lg max-w-sm dark:bg-gray-800">
            <a href="/hiragana" target="_blank">
              <Image
                src="/hiragana.png"
                width={500}
                height={500}
                alt="Hiragana Octopus"
              />
            </a>
            <div className="p-5">
              <a href="/hiragana" target="_blank">
                <h5 className="text-white font-bold text-2xl tracking-tight mb-2">
                  Learn Hiragana
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                The most basic Japanese Script that will allow you to read and
                understand many things.
              </p>
              <a
                href="/hiragana"
                target="_blank"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Go check Hiragana
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
          {/* card */}

          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="/katakana" target="_blank">
              <Image
                className="rounded-md"
                src="/kana.jpg"
                width={500}
                height={500}
                alt="Kana face"
              />
            </a>
            <div className="p-5">
              <a href="/katakana" target="_blank">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                  Learn Katakana
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                Next level, for even more words in your vocabulary is of course
                Katakana.
              </p>
              <a
                href="/katakana"
                target="_blank"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Go check Katakana
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-10 w-[85%] mx-auto">
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
          {/* card */}
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="/kanji" target="_blank">
              <Image
                className="rounded-md"
                src="/kanji_tokyo.avif"
                width={500}
                height={500}
                alt="Kanji for Tokyo"
              />
            </a>
            <div className="p-5">
              <a href="/kanji" target="_blank">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                  Learn Kanji
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                There are thousands of them and you need them for true mastery
                of the language, but do not worry! It is easier than you think
                to start learning them.
              </p>
              <a
                href="/kanji"
                target="_blank"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Go check Kanji
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
          {/* card */}
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="/readings" target="_blank">
              <img className="rounded-t-lg" src="girl_reading.jpg" alt="" />
            </a>
            <div className="p-5">
              <a href="/readings" target="_blank">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                  Readings
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                Once you've mastered some of the reading and writing basics, you
                should definitely test out your knowledge with some of our
                stories.
              </p>
              <a
                href="/readings"
                target="_blank"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Go check stories
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
