import Image from "next/image";
import Head from "next/head";
export default function About_Us() {
  return (
    <>
      <Head>
        <title>About Us - Lead U</title>
        <meta name="description" content="Learn more about Lead U, our mission, vision, and the courses we offer. Join us to explore the world of knowledge." />
        <meta name="keywords" content="Lead U, About Us, Education, Courses, Learning, Quran Academy" />
        <meta name="author" content="Lead U" />
        <meta property="og:title" content="About Us - Lead U" />
        <meta property="og:description" content="Discover more about Lead U, our values, and the educational opportunities we provide." />
        <meta property="og:image" content="/leadu-logo.png" />
        <meta property="og:url" content="https://www.leadu.pk/about-us" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Lead U" />
        <meta name="twitter:description" content="Explore Lead U and learn about our commitment to education and our range of courses." />
        <meta name="twitter:image" content="/leadu-logo.png" />
        <link rel="canonical" href="https://www.leadu.pk/about-us" />
      </Head>
      <main className="flex flex-col items-center justify-between">
        <div className="relative w-full md:h-[491px] justify-center items-center">
          <Image
            src="/background.png"
            alt="Lead U Background"
            width={1500}
            height={382}
            objectFit="cover"
            className="cursor-pointer w-full md:h-[100%]"
            title="Lead U Background"
          />
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center">
            <Image
              src="/leadu-and-quran-academy-logo.png"
              alt="leadu and quran academy logo"
              width={600}
              height={200}
              className="cursor-pointer hover:grayscale md:h-auto h-[80%] md:w-auto w-[80%]"
              title="leadu and quran academy logo"
            />
          </div>
        </div>
      </main>
      <section className="pb-10 pt-2 bg-gray-100" id="section_1601293061">
        <div className="relative  py-10 flex justify-center items-center">
          <div className="text-center max-w-4xl mx-auto">
            <div className="hover:opacity-90 flex justify-center w-full">
              <Image
                src="/bismillah.png"
                alt="Welcome Note"
                width={336}
                height={206}
                className="md:h-auto h-[80%] md:w-auto w-[50%]"
              />
            </div>
            <div className="my-6">
              <div className="border-t-2 border-neutral-300 mx-auto w-16"></div>
            </div>
            <div className="my-6 pb-5">
              <div className="hover:opacity-90">
                <Image
                  src="/welcome-note-1536x1236.jpg"
                  alt="Welcome Note"
                  width={874}
                  height={997}
                  className="hover:grayscale h-full w-full shadow-lg rounded-lg"
                />
              </div>
            </div>
            <div className="border-t-4 pt-4 border-neutral-300 mx-auto w-24"></div>
            <div className="my-6 pb-5">
              <div className="hover:opacity-90">
                <Image
                  src="/imp-urdu-1338x1536.jpg"
                  alt="Ahmiyat Note"
                  width={874}
                  height={997}
                  className="hover:grayscale h-full w-full shadow-lg rounded-lg"
                />
              </div>
            </div>
            <div className="border-t-4 pt-4 border-neutral-300 mx-auto w-24"></div>
            <div className="my-6 pb-5">
              <div className="hover:opacity-90">
                <Image
                  src="/maqasid-1536x833.jpg"
                  alt="maqasid"
                  width={874}
                  height={997}
                  className="hover:grayscale h-full w-full shadow-lg rounded-lg"
                />
              </div>
            </div>
            <div className="border-t-4 pt-4 border-neutral-300 mx-auto w-24"></div>
            <div className="my-6 pb-5">
              <div className="hover:opacity-90">
                <Image
                  src="/ahdaf-1536x1477.jpg"
                  alt="ahdaf"
                  width={874}
                  height={997}
                  className="hover:grayscale h-full w-full shadow-lg rounded-lg"
                />
              </div>
            </div>       
          </div>
        </div>
      </section>
    </>
  );
}
