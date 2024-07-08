"use client";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FaPhone } from "react-icons/fa6";
import { useState } from "react";
export default function Contact_us() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <Head>
        <title>Contact Us - Lead U</title>
        <meta
          name="description"
          content="Get in touch with Lead U for any inquiries or support. We are here to assist you with all your educational needs and questions."
        />
        <meta
          name="keywords"
          content="Lead U Contact, Contact Us, Support, Inquiries, Educational Support, Contact Information"
        />
        <meta name="author" content="Lead U" />
        
        <meta property="og:title" content="Contact Us - Lead U" />
        <meta
          property="og:description"
          content="Reach out to Lead U for assistance with your educational journey. Our team is ready to answer your questions and provide the support you need."
        />
        <meta property="og:image" content="/leadu-logo.png" />
        <meta property="og:url" content="https://www.leadu.pk/contact" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Lead U" />
        <meta
          name="twitter:description"
          content="Contact Lead U for any inquiries or support. We are here to assist you with all your educational needs and questions."
        />
        <meta name="twitter:image" content="/leadu-logo.png" />
        
        <link rel="canonical" href="https://www.leadu.pk/contact" />
      </Head>
      <main className="bg-white">
        <div id="content" role="main" className="content-area">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-screen-lg p-6">
              <div className="flex flex-col items-center">
                <div className="relative w-full mb-10">
                  <div className="aspect-w-16 aspect-h-9">
                    <Image
                      src="/leadu-and-quran-academy-logo.png"
                      alt="LeadU and Quran Academy Logo"
                      width={870}
                      height={435}
                      objectFit="contain"
                      className="w-full h-full"
                      priority
                    />
                  </div>
                  <div className="text-center py-4">
                    <h6 className="text-sm">LEAD Organization</h6>
                    <h3 className="text-xl">Asas Quran Academy, Gujranwala</h3>
                    <p>Sialkot Bypass, Gujranwala</p>
                  </div>
                  <div className="text-center py-4">
                    <h6 className="text-sm">Contact</h6>
                    <p>
                      +92 321 74 21 808
                      <br />
                      <Link
                        href="mailto:info@leadu.pk"
                        className="hover:text-red-700"
                      >
                        info@leadu.pk
                      </Link>
                    </p>
                  </div>
                  <div className="relative flex space-x-1 w-full justify-center icon-style-fill">
                    <div className="flex items-center justify-center p-3 w-9 h-9 rounded-full bg-blue-600 text-white hover:bg-blue-700">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                    <div className="flex items-center justify-center p-3 w-9 h-9 rounded-full bg-green-600 text-white hover:bg-green-700">
                      <FaPhone className="w-9 h-9 text-white" />
                    </div>
                    <div className="flex items-center justify-center p-2  w-9 h-9 rounded-full bg-red-500 text-white hover:bg-red-700">
                      <FontAwesomeIcon icon={faYoutube} />
                    </div>
                  </div>
                </div>

                <section className="w-full max-w-[890px] py-10">
                  <div className="bg-white  shadow-md rounded-lg p-8">
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 max-w-[550px] mx-auto gap-6">
                        <div className="flex flex-col">
                          <label htmlFor="name" className="mb-1 text-gray-700 text-center font-bold">
                            Your Name (required)
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 bg-neutral-100 rounded-full p-2"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor="email" className="mb-1 text-gray-700 text-center font-bold">
                            Your Email (required)
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 bg-neutral-100 rounded-full p-2"
                          />
                        </div>
                        <div className="flex flex-col ">
                          <label
                            htmlFor="subject"
                            className="mb-1 text-gray-700 text-center font-bold"
                          >
                            Subject
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="border border-gray-300 bg-neutral-100 rounded-full p-2"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label
                            htmlFor="message"
                            className="mb-1 text-gray-700 text-center font-bold"
                          >
                            Your Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="6"
                            className="border border-gray-300 bg-neutral-100 rounded-xl p-2"
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          className="mt-4 bg-[#0c6bac] text-white w-min flex justify-center mx-auto py-2 px-6 rounded-full hover:bg-sky-800  transition-colors duration-300"
                        >
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
