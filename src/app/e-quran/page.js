export default function E_Quran() {
  return (
    <div className="bg-white ">
      <div className="container mx-auto max-w-[1100px] px-4 py-8">
        <section className="text-center my-8">
          <h1 className="text-3xl font-bold text-[#0c6bac]  mb-4">E-Quran</h1>
          <p className="text-lg">
            Here you can listen to the recitation of the Holy Quran and access
            online translation and commentary.
          </p>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-semibold text-[#0c6bac]  mb-4">
            Chapters of the Holy Quran
          </h2>
          <ul className="list-disc list-inside">
            <li>Surah Al-Fatiha</li>
            <li>Surah Al-Baqarah</li>
            <li>Surah Al-Imran</li>
            <li>Surah An-Nisa</li>
            <li>Surah Al-Ma'idah</li>
          </ul>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-semibold text-[#0c6bac]  mb-4">
            Translation and Commentary
          </h2>
          <p className="text-lg">
            Join our translation and commentary courses to understand the
            meanings of the Holy Quran.
          </p>
        </section>
      </div>
    </div>
  );
}
