import Image from "next/image";
import Head from "next/head";
export default function Videos() {
  const videos = [
    {
      id: "1",
      title:
        "Islam Ki Bunyadi Talimaat by Shafqat Hayat اسلام کی بنیادی تعلیمات",
      src: "https://www.youtube.com/embed/ewexDu2mdEg?feature=oembed",
    },
    {
      id: "2",
      title:
        "Insani Jaan Ki Hurmat Part 1 by Shafqat Hayat انسانی جان کی حرمت ۱",
      src: "https://www.youtube.com/embed/vE2u1dy7Jng?feature=oembed",
    },
    {
      id: "3",
      title:
        "Insani Jaan Ki Hurmat Part 2 by Shafqat Hayat انسانی جان کی حرمت ۱۱",
      src: "https://www.youtube.com/embed/pDYOMLLiT_Y?feature=oembed",
    },
    {
      id: "4",
      title: "Naimat-e-Quran Par Khushi by Shafqat Hayat نعمتِ قرآن پر خوشی",
      src: "https://www.youtube.com/embed/p3HRziWs6oM?feature=oembed",
    },
    {
      id: "5",
      title: "Nuzool-e-Quran Ka Maqsad by Shafqat Hayaat نزولِ قرآن کا مقصد",
      src: "https://www.youtube.com/embed/LW7mg7rT1dA?feature=oembed",
    },
    {
      id: "6",
      title: "Maqsad-e-Kainaat by Shafqat Hayat مقصد کائنات",
      src: "https://www.youtube.com/embed/WaaEv0XHQUo?feature=oembed",
    },
    {
      id: "7",
      title:
        "Qurani Hidayat Kay Hasool Ka Haqiqi Sabab by Shafqat Hayat قرآنی ہدایت کے حصول کا حقیقی سبب",
      src: "https://www.youtube.com/embed/cc4w6BOjbo0?feature=oembed",
    },
    {
      id: "8",
      title:
        "Sarbarah Aur Mubalag Ki Zimadaru by Shafqat Hayat سربراہ اور مبلغ کی ذمہ داری",
      src: "https://www.youtube.com/embed/xllQ2TTQ3SU?feature=oembed",
    },
    {
      id: "9",
      title: "Quran Pak Ki Haisiyat by Shafqat Hayat قرآن پاک کی حیثیت",
      src: "https://www.youtube.com/embed/9F0J-_OuXbw?feature=oembed",
    },
    {
      id: "10",
      title: "Deen Ka Maqsad  by Shafqat Hayat دین کا مقصد",
      src: "https://www.youtube.com/embed/ganUcNIro6U?feature=oembed",
    },
    {
      id: "11",
      title:
        "پھل دار درخت لگانے کا اجر Virtue of Planting a Fruit Tree by Shafqat Hayat",
      src: "https://www.youtube.com/embed/pc2jp6CaAQU?feature=oembed",
    },
    {
      id: "12",
      title: "Quran Kay Mukhatbeen by Shafqat Hayat قرآن کے مخاطبین",
      src: "https://www.youtube.com/embed/l0T2F3yZjqE?feature=oembed",
    },
    {
      id: "13",
      title: "Hurmat-e-Izzat by Shafqat Hayat حرمتِ عزّت",
      src: "https://www.youtube.com/embed/y78KcqsCQnU?feature=oembed",
    },
    {
      id: "14",
      title:
        "Quran Aur Ilm-e-Khuda Wandi by Shafqat Hayat قرآن اور علم ِ خداوندی",
      src: "https://www.youtube.com/embed/6zeqN-y6aIQ?feature=oembed",
    },
    {
      id: "15",
      title: "Insani Jazbaat Aur Islam by Shafqat Hayat انسانی جذبات اور اسلام",
      src: "https://www.youtube.com/embed/RXONZvr4JxE?feature=oembed",
    },
    {
      id: "16",
      title: "Hurmat-e-Maal by Shafqat Hayat حرمتِ مال",
      src: "https://www.youtube.com/embed/R9PGOWNMMt0?feature=oembed",
    },
    {
      id: "17",
      title: "Hakook-e-Insani ki Ahmiat by Shafqat Hayat حقوق انسانی کی اہمیت",
      src: "https://www.youtube.com/embed/CWIK92vrHms?feature=oembed",
    },
    {
      id: "18",
      title: "Hurmat-e-Jaan by Shafqat Hayat حرمتِ جان",
      src: "https://www.youtube.com/embed/n12fjhYAVG4?feature=oembed",
    },
    {
      id: "19",
      title: "صلہ ر حمی ۱ Sila Rehmi Part 1 by Shafqat Hayat",
      src: "https://www.youtube.com/embed/lJFg9bAdFpo?feature=oembed",
    },
    {
      id: "20",
      title: "صلہ ر حمی ۱ Sila Rehmi Part 2 by Shafqat Hayat",
      src: "https://www.youtube.com/embed/t48L1MUGbs4?feature=oembed",
    },
    {
      id: "21",
      title: "انسانی عزّت کی حرمت  Insani Izzat Ki Hurmat by Shafqat Hayat",
      src: "https://www.youtube.com/embed/2AO7YWl94Yk?feature=oembed",
    },
    {
      id: "22",
      title:
        "اسلام کی بنیادی تعلیمات ۲ Islam Ki Bunyadi Talimaat Part 2 by Shafqat Hayat",
      src: "https://www.youtube.com/embed/9Fm28OGruIs?feature=oembed",
    },
    {
      id: "23",
      title: "تعارف و پیغام  Taruf and Paigham by Shafqat Hayat",
      src: "https://www.youtube.com/embed/IsX5r9DQZmY?feature=oembed",
    },
    {
      id: "24",
      title: "توحید Touheed by Shafqat Hayat",
      src: "https://www.youtube.com/embed/0s_zYFsg6BI?feature=oembed",
    },
    {
      id: "25",
      title: "حرمتِ مال Hurmat-e-Maal by Shafqat Hayat",
      src: "https://www.youtube.com/embed/R04uj8CjLBg?feature=oembed",
    },
    {
      id: "26",
      title: "والدین کے حقوق Waldain Kay Haqooq by Shafqat Hayat",
      src: "https://www.youtube.com/embed/Ere38dhtrU4?feature=oembed",
    },
    {
      id: "27",
      title:
        "محنت اور مزدوری کے خوبصورت نتائج Mehnat aur Mazdori kay Khobsorat Nataij by Shafqat Hayat",
      src: "https://www.youtube.com/embed/bvDsznpzNOc?feature=oembed",
    },
  ];
  return (
    <>
      {/* <Head>
        <title>Video Library - Lead U</title>
        <meta
          name="description"
          content="Explore our comprehensive video library at Lead U. Watch educational videos and enhance your learning experience with our curated video content."
        />
        <meta
          name="keywords"
          content="Lead U Video Library, Educational Videos, Learning Resources, Watch and Learn, Video Content"
        />
        <meta name="author" content="Lead U" />
        <meta property="og:title" content="Video Library - Lead U" />
        <meta
          property="og:description"
          content="Discover a wide range of educational videos in our video library at Lead U. Enhance your knowledge with our carefully selected video content."
        />
        <meta property="og:image" content="/path-to-social-media-image.jpg" />
        <meta property="og:url" content="https://www.leadu.com/videos" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Video Library - Lead U" />
        <meta
          name="twitter:description"
          content="Access a diverse collection of educational videos at Lead U. From instructional videos to insightful content, our video library offers something for everyone."
        />
        <meta name="twitter:image" content="/path-to-twitter-image.jpg" />
        <link rel="canonical" href="https://www.leadu.com/videos" />
      </Head> */}
      <main className="bg-white">
        <div>
          <Image
            src="/youtube-channel.png"
            alt="Youtube Channel"
            width={1024}
            height={314}
            className="w-full h-auto  border border-neutral-200 bg-cover"
            priority
          />
        </div>
        <section>
          <div id="content" role="main" className="content-area">
            <div className="flex flex-wrap justify-center items-center py-8">
              {videos.map((video) => (
                <div
                  key={video.id}
                  id={video.id}
                  className="w-full md:w-1/3 p-4 text-center animate-fadeInRight"
                >
                  <div
                    className="relative overflow-hidden shadow-lg hover:shadow-xl"
                    style={{ paddingTop: "56.25%" }}
                  >
                    <iframe
                      loading="lazy"
                      title={video.title}
                      className="absolute top-0 left-0 w-full h-full"
                      src={video.src}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
