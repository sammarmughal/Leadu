import Head from "next/head";
export default function Audios() {
  return (
    <>
     <Head>
        <title>Audio Library - Lead U</title>
        <meta
          name="description"
          content="Explore our collection of educational audios at Lead U. Listen to enriching content and expand your knowledge with our audio resources."
        />
        <meta
          name="keywords"
          content="Lead U Audio Library, Educational Audios, ISM-E-AZAM, Learning Resources, Audio Files, Listen and Learn"
        />
        <meta name="author" content="Lead U" />
        <meta property="og:title" content="Audio Library - Lead U" />
        <meta
          property="og:description"
          content="Discover our audio library featuring a wide range of educational content. Enhance your learning experience with our audio resources at Lead U."
        />
        <meta property="og:image" content="/path-to-social-media-image.jpg" />
        <meta property="og:url" content="https://www.leadu.com/audios" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Audio Library - Lead U" />
        <meta
          name="twitter:description"
          content="Access a variety of educational audios at Lead U. From ISM-E-AZAM to other insightful content, our audio library has something for everyone."
        />
        <meta name="twitter:image" content="/path-to-twitter-image.jpg" />
        <link rel="canonical" href="https://www.leadu.com/audios" />
      </Head>
      <div className="justify-center bg-white" id="row-84246874">
        <div id="col-916361718" className="col mx-auto  py-10 md:w-1/2 sm:w-full lg:w-1/2">
          <div className="my-4 text-center flex flex-col gap-2">
            <h3 className="font-bold text-xl my-2">ISM-E-AZAM</h3>
            <p className="my-2">Click the play button.</p>
            <audio controls preload="none" className="my-2 w-full max-w-md mx-auto">
              <source
                src="https://leadu.pk/wp-content/uploads/2019/12/ISM-E-AZAM.mp3"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </>
  );
}
