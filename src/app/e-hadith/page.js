export default function E_Hadith() {
  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-[1100px] px-4 py-8">
        <section className="text-center my-8">
          <h1 className="text-3xl font-bold text-[#0c6bac] mb-4">E-Hadith</h1>
          <p className="text-lg">
            Here you can listen to the recitation of Hadith and access online
            translation and commentary.
          </p>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-semibold text-[#0c6bac] mb-4">
            Famous Hadiths
          </h2>
          <ul className="list-disc list-inside">
            <li>Hadith Jibril</li>
            <li>Hadith Qudsi</li>
            <li>Prophetic Hadith</li>
          </ul>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-semibold text-[#0c6bac] mb-4">
            Translation and Commentary
          </h2>
          <p className="text-lg">
            Join our translation and commentary courses to understand the
            meanings of Hadith.
          </p>
        </section>
      </div>
    </div>
  );
}
