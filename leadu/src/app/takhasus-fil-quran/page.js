import Image from "next/image";
import Head from "next/head";
export default function About_Us() {
  return (
    <>
       {/* <Head>
        <title>Takhasus-fil-Quran - Lead U</title>
        <meta
          name="description"
          content="Explore our specialized Takhasus-fil-Quran program designed to deepen your understanding and recitation of the Quran. Join Lead U to advance your Quranic studies."
        />
        <meta
          name="keywords"
          content="Takhasus-fil-Quran, Quranic Studies, Quran Recitation, Lead U, Advanced Quran Program"
        />
        <meta name="author" content="Lead U" />
        
        <meta property="og:title" content="Takhasus-fil-Quran - Lead U" />
        <meta
          property="og:description"
          content="Join the Takhasus-fil-Quran program at Lead U to enhance your knowledge and proficiency in Quranic studies. Our curriculum is designed for advanced learners seeking deeper insights into the Quran."
        />
        <meta property="og:image" content="/images/takhasus-quran-social.jpg" />
        <meta property="og:url" content="https://www.leadu.com/takhasus-fil-quran" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Takhasus-fil-Quran - Lead U" />
        <meta
          name="twitter:description"
          content="Enroll in the Takhasus-fil-Quran program at Lead U to advance your Quranic studies. Our expert-led courses are designed to provide deep and comprehensive knowledge of the Quran."
        />
        <meta name="twitter:image" content="/images/takhasus-quran-twitter.jpg" />
        
        <link rel="canonical" href="https://www.leadu.com/takhasus-fil-quran" />
      </Head> */}
      <main className="flex flex-col items-center justify-between">
        <div className="relative w-full md:h-[491px] justify-center items-center">
          <Image
            src="/banner.jpg"
            alt="Lead U Background"
            width={1500}
            height={382}
            objectFit="cover"
            className="cursor-pointer w-full md:h-[100%]"
            title="Lead U Background"
          />        
        </div>
      </main>
      <section className="pb-10 pt-2 bg-white" id="section_1601293061">
        <div className="relative  py-10 flex justify-center items-center">
          <div className="text-center max-w-4xl mx-auto">
          <h1 className="md:text-2xl text-xl font-noraml tracking-wide uppercase">Syllabus/Properties</h1>
            <div className="hover:opacity-90 flex justify-center w-full">
              <Image
                src="/sallybus-1536x530.jpg"
                alt="Welcome Note"
                width={436}
                height={156}
                className="md:w-auto w-[70%]"
              />
            </div>
            <div className="my-6 pb-5">
              <div className="hover:opacity-90">
                <Image
                  src="/tajweed-1536x543.jpg"
                  alt="tajweed"
                  width={874}
                  height={997}
                  className="hover:grayscale h-full w-full border border-neutral-200 hover:shadow-lg rounded-lg"
                />
              </div>
            </div>
            <div className="my-6 pb-5">
              <div className="hover:opacity-90">
                <Image
                  src="/arabic-1536x780.jpg"
                  alt="arabic"
                  width={874}
                  height={997}
                  className="hover:grayscale h-full w-full border border-neutral-200 hover:shadow-lg rounded-lg"
                />
              </div>
            </div>
            <div className="my-6 pb-5">
              <div className="hover:opacity-90">
                <Image
                  src="/uloom-ul-quran-1536x1442.jpg"
                  alt="uloom-ul-quran"
                  width={874}
                  height={997}
                  className="hover:grayscale h-full w-full border border-neutral-200 hover:shadow-lg rounded-lg"
                />
              </div>
            </div>
            <div className="my-6 pb-5">
              <div className="hover:opacity-90">
                <Image
                  src="/dawat-1536x941.jpg"
                  alt="dawat"
                  width={874}
                  height={997}
                  className="hover:grayscale h-full w-full border border-neutral-200 hover:shadow-lg rounded-lg"
                />
              </div>
            </div> 
            <div className="my-6 pb-5">
              <div className="hover:opacity-90">
                <Image
                  src="/computer-768x1085.jpg"
                  alt="Computer"
                  width={874}
                  height={997}
                  className="hover:grayscale h-full w-full border border-neutral-200 hover:shadow-lg rounded-lg"
                />
              </div>
            </div> 
            <div className="my-6 pb-5">
              <div className="hover:opacity-90">
                <Image
                  src="/geography-768x1085.jpg"
                  alt="geography"
                  width={874}
                  height={997}
                  className="hover:grayscale h-full w-full border border-neutral-200 hover:shadow-lg rounded-lg"
                />
              </div>
            </div> 
            <div className="my-6 pb-5">
              <div className="hover:opacity-90">
                <Image
                  src="/astronomy-768x1085.jpg"
                  alt="astronomy"
                  width={874}
                  height={997}
                  className="hover:grayscale h-full w-full border border-neutral-200 hover:shadow-lg rounded-lg"
                />
              </div>
            </div> 
            <div className="my-6 pb-5">
              <div className="hover:opacity-90">
                <Image
                  src="/tarbiyat-1183x1536.jpg"
                  alt="tarbiyat"
                  width={874}
                  height={997}
                  className="hover:grayscale h-full w-full border border-neutral-200 hover:shadow-lg rounded-lg"
                />
              </div>
            </div>       
          </div>
        </div>
      </section>
    </>
  );
}
