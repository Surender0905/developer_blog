import Head from "next/head";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About DevSpace</title>
      </Head>
      <h1 className="text-5xl border-b-4 pb-5 font-bold text-center">About</h1>

      <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
        <h3 className="text-2xl mb-5">DevSpace Blog</h3>

        <p className="mb-3">This is a blog built with Next.js and Markdown</p>

        <p>
          <span className="font-bold">Version 1.0.0</span>
        </p>
      </div>
    </>
  );
};

export default AboutPage;
