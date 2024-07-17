import Head from 'next/head'
import React from 'react'
import Link from 'next/link';


function ThanksPage() {
  return (
    <div className="container mx-auto">
    <Head>
      <title>Thank You</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Thank You</h1>
      <p className="text-lg mb-4">Thank you for contacting me! We will get back to you soon.</p>
      <Link href="/">
        <div className="text-blue-500 hover:underline">Go back to the homepage</div>
      </Link>
    </main>
  </div>  )
}

export default ThanksPage
