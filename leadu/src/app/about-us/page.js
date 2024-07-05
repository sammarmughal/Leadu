import Image from "next/image";
import Link from "next/link";
export default function About_Us() {
  return (
    <>
      <main className="flex flex-col items-center justify-between">
        <div className="relative w-full h-[491px] justify-center items-center">
          <Image
            src="/background.png"
            alt="Lead U Background"
            // layout="fill"
            width={1500}
            height={382}
            objectFit="cover"
            className="cursor-pointer w-full h-[100%]"
            title="Lead U Background"
          />
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center">
            <Image
              src="/leadu-and-quran-academy-logo.png"
              alt="leadu and quran academy logo"
              width={500}
              height={200}
              className="cursor-pointer hover:grayscale h-auto"
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
                className=""
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
