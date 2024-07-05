import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="relative w-full h-[641px]">
        <Image
          src="/background.png"
          alt="Lead U Background"
          // layout="fill"
          width={2000}
          height={582}
          objectFit="cover"
          className="cursor-pointer w-full h-auto"
          title="Lead U Background"
        />
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center">
          <Image
            src="/leadu-and-quran-academy-logo.png"
            alt="leadu and quran academy logo"
            width={600}
            height={200}
            className="cursor-pointer hover:grayscale h-auto"
            title="leadu and quran academy logo"
          />
          <h1 className="text-white text-center sm:text-lg text-xs mt-3">
            Registration Open For Takhasus Fil Quran Wa-Tafseer Course
          </h1>
          <div className="mt-6 w-full flex justify-center">
            <button className="rounded-full py-1 text-white whitespace-nowrap px-3 flex gap-2 items-center bg-[#0c6bac] hover:bg-sky-800 cursor-pointer">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </main>
    <section className="pb-10 pt-2 bg-gray-100" id="section_1601293061">
      <div className="bg-cover absolute left-0 bg-center">
      I <Image
                  src="/bg2.png"
                  alt="Welcome Note"
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
          <Link href="/about-us/" className="mt-6 lead-btn uppercase  rounded-xl">
              Read more about us
          </Link>
        </div>
      </div>
    </section>
    <section className="pb-10 bg-gray-100" id="videos-section">
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
              frameBorder="0"
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
              frameBorder="0"
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
