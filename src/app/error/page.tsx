import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

function errorPage() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Submission Error</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-8">Submission Error</h1>
        <p className="text-lg mb-4">There was an error submitting the form. Please try again later.</p>
        <Link href="/">
          <div className="text-blue-500 hover:underline">Go back to the homepage</div>
        </Link>
      </main>
    </div>
  )
}

export default errorPage
