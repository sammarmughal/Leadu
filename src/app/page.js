import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Lead U - Empowering Quranic Education</title>
        <meta
          name="description"
          content="Lead U is dedicated to empowering Quranic education through innovative learning approaches. Explore our courses and programs designed to deepen your understanding and connection with the Quran."
        />
        <meta
          name="keywords"
          content="Lead U, Quranic Education, Quran Courses, Islamic Studies, Online Learning"
        />
        <meta name="author" content="Lead U" />

        <meta property="og:title" content="Lead U - Empowering Quranic Education" />
        <meta
          property="og:description"
          content="Join Lead U to deepen your understanding of the Quran through innovative courses and programs. Discover our online Quranic education platform today."
        />
        <meta property="og:image" content="/leadu-and-quran-academy-logo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lead U - Empowering Quranic Education" />
        <meta
          name="twitter:description"
          content="Explore Lead U's innovative approach to Quranic education. Join our online platform to deepen your understanding of the Quran and Islamic studies."
        />
        <meta name="twitter:image" content="/leadu-logo.png" />

      </Head>

      <main className="flex flex-col items-center justify-between">
        <div className="relative w-full max-h-[1041px] h-auto">
          <Image
            src="/background.png"
            alt="Lead U Background"
            width={2000}
            height={582}
            style={{ objectFit: 'cover' }}
            className="cursor-pointer w-full bg-cover lg:h-auto h-full"
            title="Lead U Background"
          />
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center">
            <Image
              src="/leadu-and-quran-academy-logo.png"
              alt="leadu and quran academy logo"
              width={600}
              height={200}
              className="cursor-pointer hover:grayscale bg-cover md:h-auto h-[50%] lg:w-auto w-[50%]"
              title="leadu and quran academy logo"
            />
            <h1 className="text-white text-center md:text-lg text-xs sm:mt-3">
              Registration Open For Takhasus Fil Quran Wa-Tafseer Course
            </h1>
            <div className="sm:mt-6 mt-3 w-full flex justify-center">
              <button className="rounded-full py-1 text-white whitespace-nowrap px-3 flex gap-2 items-center bg-[#0c6bac] hover:bg-sky-800 cursor-pointer">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </main>
      <section className="pb-10 pt-2 bg-gray-100">
        <div className="bg-cover absolute left-0 bg-center">
          <Image
            src="/bg2.png"
            alt="Bg2"
            width={1250}
            height={1024}
            className="h-full"
          />
        </div>
        <div className="relative  py-10 flex justify-center items-center">
          <div className="text-center max-w-3xl border-b-2 border-neutral-300 pb-8 mx-auto">
            <div className="my-6">
              <div className="border-t-2 border-neutral-300 mx-auto w-14"></div>
            </div>
            <div className="my-6">
              <div className="hover:opacity-90">
                <Image
                  src="/welcome-note-1536x1236.jpg"
                  alt="Welcome Note"
                  width={1024}
                  height={824}
                  className="hover:grayscale shadow-lg rounded-lg"
                />
              </div>
            </div>
            <Link
              href="/about-us/"
              className="mt-6 lead-btn uppercase  rounded-xl"
            >
              Read more about us
            </Link>
          </div>
        </div>
      </section>
      <section className="pb-10 bg-gray-100" >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-normal">Videos</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
            <div className="relative pb-9/16 shadow-lg rounded-lg overflow-hidden">
              <iframe
                loading="lazy"
                title="پھل دار درخت لگانے کا اجر Virtue of Planting a Fruit Tree by Shafqat Hayat"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/pc2jp6CaAQU?feature=oembed"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="relative pb-9/16 shadow-lg rounded-lg overflow-hidden">
              <iframe
                loading="lazy"
                title="Islam Ki Bunyadi Talimaat by Shafqat Hayat اسلام کی بنیادی تعلیمات"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ewexDu2mdEg?feature=oembed"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="relative pb-9/16 shadow-lg rounded-lg overflow-hidden">
              <iframe
                loading="lazy"
                title="Deen Ka Maqsad by Shafqat Hayat دین کا مقصد"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ganUcNIro6U?feature=oembed"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/videos" className="inline-block lead-btn rounded-full">
              Click here to watch more
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
