"use client";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useState, useRef } from "react";
export default function Admissions() {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };
  const handleFileDelete = () => {
    setFileName(null);
    fileInputRef.current.value = null;
  };

  return (
    <>
      <Head>
        <title>Admissions - Lead U</title>
        <meta
          name="description"
          content="Join Lead U to embark on a journey of learning and personal growth. Explore our admissions process and become a part of our community."
        />
        <meta
          name="keywords"
          content="Lead U Admissions, Education, Enrollment, Learning Opportunities, Join Lead U, Application Process"
        />
        <meta name="author" content="Lead U" />
        <meta property="og:title" content="Admissions - Lead U" />
        <meta
          property="og:description"
          content="Discover how to apply to Lead U and start your educational journey with us. Learn about our programs and the admissions criteria."
        />
        <meta property="og:image" content="/leadu-logo.png" />
        <meta property="og:url" content="https://www.leadu.pk/admissions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Admissions - Lead U" />
        <meta
          name="twitter:description"
          content="Find out how you can join Lead U. Explore our admissions process and learn about the requirements and opportunities available."
        />
        <meta name="twitter:image" content="/leadu-logo.png" />
        <link rel="canonical" href="https://www.leadu.pk/admissions" />
      </Head>
      <div className="bg-white">
        <main className="max-w-[1100px] w-full mx-auto bg-white">
          <div className="relative w-full justify-center items-center">
            <Image
              src="/banner.jpg"
              alt="Lead U Background"
              width={1200}
              height={282}
              objectFit="cover"
              className="cursor-pointer bg-cover mx-auto w-full"
            />
          </div>
          <div className="px-6 flex flex-col md:flex-row gap-6 md:justify-between">
            <div className="lg:w-1/2 text-center mb-8 lg:mb-0">
              <div className="relative shadow-lg hover:shadow-2xl">
                <Image
                  src="/admission-urdu-1536x1522.jpg"
                  alt="Admission Urdu"
                  width={1024}
                  height={314}
                  className="w-full h-auto hover:grayscale  border border-neutral-200 hover:shadow-lg rounded-lg"
                  priority
                />
              </div>
            </div>

            <div className="lg:w-1/2 text-left py-4">
              <div className="mb-6">
                <h3 className="md:text-2xl text-lg mb-4">
                  ELIGIBILITY CRITERIA FOR ADMISSION
                </h3>
                <ol className="list-decimal ml-5">
                  <li>
                    To be certified from any verified Religious Institute.
                  </li>
                  <li>
                    Student/Candidate must have his CNIC and 2 passport size
                    photographs.
                  </li>
                  <li>Attestation from any certified literati.</li>
                  <li>
                    Priority will be given to those candidates who are
                    interested in learning Quran by heart and in getting
                    contemporary education.
                  </li>
                  <li>Course duration would be one year.</li>
                </ol>
                <p className="mt-4">
                  <strong>Note:</strong>{" "}
                  <i>
                    Last date for admission would be 20th Shawwal and Interview
                    would be conducted on 21st Shawwal.
                  </i>
                </p>
              </div>
            </div>
          </div>
          <div className="py-10 max-w-[1000px] lg:mx-auto mx-6">
            <h1 className="text-3xl my-4">Admission Form</h1>
            <p className="mb-4">
              Get yourself registered by filling the form below.
            </p>
            <form
              action="/admission/submit"
              method="post"
              className="space-y-4 mb-10"
            >
              <h2 className="text-2xl mb-4">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <label className="block font-semibold">
                    Your Name *
                    <input
                      type="text"
                      name="your-name"
                      className="w-full p-2 border bg-neutral-100 placeholder:font-bold placeholder:text-neutral-500  rounded-full"
                      placeholder="آپکا اسم گرامی"
                      required
                    />
                  </label>
                  <label className="block font-semibold mt-4">
                    Father&#39;s Name *
                    <input
                      type="text"
                      name="father-name"
                      className="w-full p-2 border bg-neutral-100 placeholder:font-bold placeholder:text-neutral-500  rounded-full"
                      placeholder="ولدیت"
                      required
                    />
                  </label>
                  <label className="block font-semibold mt-4">
                    Date of Birth *
                    <input
                      type="date"
                      name="DateofBirth"
                      className="w-full p-2 border bg-neutral-100 placeholder:font-bold placeholder:text-neutral-500  rounded-full"
                      required
                    />
                  </label>
                  <label className="block font-semibold mt-4">
                    Your CNIC # *
                    <input
                      type="text"
                      name="cnic"
                      className="w-full p-2 border bg-neutral-100 placeholder:font-bold placeholder:text-neutral-500  rounded-full"
                      placeholder="شناختی کارڈ نمبر"
                      required
                    />
                  </label>
                  <label className="block font-semibold mt-4">
                    Your Mobile # *
                    <input
                      type="tel"
                      name="mobile"
                      className="w-full p-2 border bg-neutral-100 placeholder:font-bold placeholder:text-neutral-500  rounded-full"
                      placeholder="موبائل نمبر"
                      required
                    />
                  </label>
                </div>
                <div>
                  <label className="block font-semibold">
                    Your Guardian&#39;s Name *
                    <input
                      type="text"
                      name="guardian-name"
                      className="w-full p-2 border bg-neutral-100 placeholder:font-bold placeholder:text-neutral-500  rounded-full"
                      placeholder="سرپرست کا نام"
                      required
                    />
                  </label>
                  <label className="block font-semibold mt-4">
                    Your Guardian&#39;s CNIC # *
                    <input
                      type="text"
                      name="guardian-cnic"
                      className="w-full p-2 border bg-neutral-100 placeholder:font-bold placeholder:text-neutral-500  rounded-full"
                      placeholder="سرپرست کا شناختی کارڈ نمبر"
                      required
                    />
                  </label>
                  <label className="block font-semibold mt-4">
                    Guardian&#39;s Mobile # *
                    <input
                      type="tel"
                      name="guardian-mobile"
                      className="w-full p-2 border bg-neutral-100 placeholder:font-bold placeholder:text-neutral-500  rounded-full"
                      placeholder="سرپرست کا موبائل نمبر"
                      required
                    />
                  </label>
                  <label className="block font-semibold mt-4">
                    Relation with Guardian *
                    <input
                      type="text"
                      name="relation"
                      className="w-full p-2 border bg-neutral-100 placeholder:font-bold placeholder:text-neutral-500  rounded-full"
                      placeholder="سرپرست سے رشتہ"
                      required
                    />
                  </label>
                </div>
              </div>

              <label className="block font-semibold mt-4">
                Upload your Photograph
                <div
                  className="border-2 border-dashed border-gray-300 rounded-md mb-2.5 relative p-4 cursor-pointer"
                  onClick={handleClick}
                >
                  <div className="overflow-hidden w-full justify-center mx-auto text-center truncate">
                    <h3 className="font-normal md:text-3xl">
                      Drag or Drop your Photo here
                    </h3>
                    <p className="font-medium">or</p>
                    <div className="flex justify-center items-center mx-auto w-full p-2 text-center mt-2 rounded text-blue-800 font-semibold hover:text-red-800">
                      Browse File from your Device
                    </div>
                  </div>
                  {/* Hidden file input */}
                  <input
                    type="file"
                    name="photo"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                  <span className="absolute right-[5px] bottom-[3px] text-xs font-bold">
                    0 of 1
                  </span>
                </div>
              </label>
              {fileName && (
                <div className="mt-2 flex text-sm text-gray-600 text-center justify-around">
                  <p>
                    Selected file:{" "}
                    <span className="font-semibold">{fileName}</span>
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 flex items-center hover:text-red-600"
                    onClick={handleFileDelete}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              )}
              <label className="block font-semibold mt-4">
                Current Residence Address *
                <input
                  type="text"
                  name="current-address"
                  className="w-full p-2 border bg-neutral-100 placeholder:font-bold placeholder:text-neutral-500  rounded-full"
                  placeholder="موجودہ پتہ"
                  required
                />
              </label>

              <label className="block font-semibold mt-4">
                Permanent Residence Address *
                <input
                  type="text"
                  name="permanent-address"
                  className="w-full p-2 border bg-neutral-100 placeholder:font-bold placeholder:text-neutral-500  rounded-full"
                  placeholder="مستقل پتہ"
                  required
                />
              </label>
              <h2 className="text-2xl my-4">Educational History</h2>
              <p className="mb-4">
                Islamic, College, University and School where you studied.
              </p>
              <table className="w-full mb-4 border-none">
                <tbody>
                  <tr className="border-b pb-4">
                    <td className="sm:px-4 px-1 py-4 text-neutral-500">
                      Hifz-ul-Quran
                    </td>
                    <td className="sm:px-4 px-1 py-4">
                      <input
                        type="text"
                        name="hifz-institute"
                        className="w-full p-2 bg-neutral-100 placeholder:font-medium border border-neutral-300 placeholder:text-neutral-400  rounded-full"
                        placeholder="ادارے کا نام"
                        required
                      />
                    </td>
                    <td className="sm:px-4 px-1 py-2">
                      <input
                        type="text"
                        name="hifz-duration"
                        className="w-full p-2 bg-neutral-100 placeholder:font-medium border border-neutral-300 placeholder:text-neutral-400  rounded-full"
                        placeholder="مدت مع سال"
                        required
                      />
                    </td>
                    <td className="sm:px-4 px-1 py-2">
                      <input
                        type="text"
                        name="hifz-status"
                        className="w-full p-2 bg-neutral-100 placeholder:font-medium border border-neutral-300 placeholder:text-neutral-400  rounded-full"
                        placeholder="کیفیت"
                        required
                      />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="sm:px-4 px-1 py-4 text-neutral-500">
                      Dawra-e-Hadith
                    </td>
                    <td className="sm:px-4 px-1 py-4">
                      <input
                        type="text"
                        name="dawra-institute"
                        className="w-full p-2 bg-neutral-100 placeholder:font-medium border border-neutral-300 placeholder:text-neutral-400  rounded-full"
                        placeholder="ادارے کا نام"
                        required
                      />
                    </td>
                    <td className="sm:px-4 px-1 py-2">
                      <input
                        type="text"
                        name="dawra-duration"
                        className="w-full p-2 bg-neutral-100 placeholder:font-medium border border-neutral-300 placeholder:text-neutral-400  rounded-full"
                        placeholder="مدت مع سال"
                        required
                      />
                    </td>
                    <td className="sm:px-4 px-1 py-2">
                      <input
                        type="text"
                        name="dawra-status"
                        className="w-full p-2 bg-neutral-100 placeholder:font-medium border border-neutral-300 placeholder:text-neutral-400  rounded-full"
                        placeholder="کیفیت"
                        required
                      />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="sm:px-4 px-1 py-4 text-neutral-500">
                      Dawra-e-Tafseer
                    </td>
                    <td className="sm:px-4 px-1 py-4">
                      <input
                        type="text"
                        name="qirat-institute"
                        className="w-full p-2 bg-neutral-100 placeholder:font-medium border border-neutral-300 placeholder:text-neutral-400  rounded-full"
                        placeholder="ادارے کا نام"
                        required
                      />
                    </td>
                    <td className="sm:px-4 px-1 py-2">
                      <input
                        type="text"
                        name="qirat-duration"
                        className="w-full p-2 bg-neutral-100 placeholder:font-medium border border-neutral-300 placeholder:text-neutral-400  rounded-full"
                        placeholder="مدت مع سال"
                        required
                      />
                    </td>
                    <td className="sm:px-4 px-1 py-2">
                      <input
                        type="text"
                        name="qirat-status"
                        className="w-full p-2 bg-neutral-100 placeholder:font-medium border border-neutral-300 placeholder:text-neutral-400  rounded-full"
                        placeholder="کیفیت"
                        required
                      />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="sm:px-4 px-1 py-4 text-neutral-500">
                      Iftaa
                    </td>
                    <td className="sm:px-4 px-1 py-4">
                      <input
                        type="text"
                        name="school-institute"
                        className="w-full p-2 bg-neutral-100 placeholder:font-medium border border-neutral-300 placeholder:text-neutral-400  rounded-full"
                        placeholder="ادارے کا نام"
                        required
                      />
                    </td>
                    <td className="sm:px-4 px-1 py-2">
                      <input
                        type="text"
                        name="school-duration"
                        className="w-full p-2 bg-neutral-100 placeholder:font-medium border border-neutral-300 placeholder:text-neutral-400  rounded-full"
                        placeholder="مدت مع سال"
                        required
                      />
                    </td>
                    <td className="sm:px-4 px-1 py-2">
                      <input
                        type="text"
                        name="school-status"
                        className="w-full p-2 bg-neutral-100 placeholder:font-medium border border-neutral-300 placeholder:text-neutral-400  rounded-full"
                        placeholder="کیفیت"
                        required
                      />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="sm:px-4 px-1 py-4 text-neutral-500">
                      Additional Education
                    </td>
                    <td className="sm:px-4 px-1 py-4">
                      <input
                        type="text"
                        name="college-institute"
                        className="w-full p-2 bg-neutral-100 placeholder:font-medium border border-neutral-300 placeholder:text-neutral-400  rounded-full"
                        placeholder="ادارے کا نام"
                        required
                      />
                    </td>
                    <td className="sm:px-4 px-1 py-2">
                      <input
                        type="text"
                        name="college-duration"
                        className="w-full p-2 bg-neutral-100 placeholder:font-medium border border-neutral-300 placeholder:text-neutral-400  rounded-full"
                        placeholder="مدت مع سال"
                        required
                      />
                    </td>
                    <td className="sm:px-4 px-1 py-2">
                      <input
                        type="text"
                        name="college-status"
                        className="w-full p-2 bg-neutral-100 placeholder:font-medium border border-neutral-300 placeholder:text-neutral-400  rounded-full"
                        placeholder="کیفیت"
                        required
                      />
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="text-center mt-8">
                <button
                  type="submit"
                  className="rounded-full py-1 uppercase font-medium text-white whitespace-nowrap px-5 flex gap-2 items-center bg-[#0c6bac] hover:bg-sky-800 cursor-pointer"
                >
                  send
                </button>
              </div>
            </form>
            <div
              className="flex md:flex-row flex-col justify-between items-center py-20"
              id="row-543910648"
            >
              <div id="col-735748507" className="">
                <div className="col-inner text-left">
                  <h2 className="text-3xl font-medium">Contact us!</h2>
                  <p className="lead text-lg my-4">
                    For any query regarding admissions, please contact us.
                  </p>
                </div>
              </div>
              <div id="col-1119556514" className="block lg:w-1/3 sm:w-full">
                <div className="col-inner flex flex-col gap-5">
                  <Link
                    href="tel:%20+923006158327"
                    className="button primary flex justify-center expand lead-btn rounded-full"
                  >
                    <span>0300 6158327</span>
                  </Link>

                  <Link
                    href="#"
                    className="button primary is-outline flex justify-center expand lead-btn rounded-full"
                  >
                    <span>More info</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
